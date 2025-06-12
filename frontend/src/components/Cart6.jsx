import React, { useState, useEffect } from 'react'; // Importa React e os hooks useState e useEffect
import './Cart4.css'

// Cria um componente funcional chamado Cart6
const Cart6 = () => {
  // Define o estado 'products' usando o hook useState. Inicialmente, é um array vazio.
  const [products, setProducts] = useState([]);
  // Define o estado 'loading' para controlar se os dados estão sendo carregados.
  const [loading, setLoading] = useState(true);
  // Define o estado 'error' para armazenar qualquer erro que ocorra durante o carregamento.
  const [error, setError] = useState(null);
  // Define o estado 'currentPage' para controlar a página atual.
  const [currentPage, setCurrentPage] = useState(1);
  // Define o número de produtos por página.
  const productsPerPage = 3;

  // Usa o hook useEffect para buscar os dados do arquivo JSON quando o componente é montado.
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Faz uma requisição GET para o arquivo 'products.json'.
        const response = await fetch('/products.json');
        // Verifica se a resposta da requisição foi bem-sucedida (status 200-299).
        if (!response.ok) {
          // Se a resposta não for bem-sucedida, lança um erro com o status do erro.
          throw new Error("Erro ao buscar os produtos: ${response.status}");
        }
        // Converte a resposta para o formato JSON.
        const data = await response.json();
        // Atualiza o estado 'products' com os dados obtidos.
        setProducts(data);
      } catch (error) {
        // Se ocorrer algum erro durante o processo de busca, atualiza o estado 'error'.
        setError(error);
      } finally {
        // Independente de sucesso ou erro, atualiza o estado 'loading' para false.
        setLoading(false);
      }
    };

    // Chama a função fetchProducts para iniciar a busca dos dados.
    fetchProducts();
  }, []); // O array vazio como segundo argumento garante que o efeito é executado apenas uma vez, na montagem do componente.

  // Funções para incrementar e decrementar a quantidade dos produtos no carrinho.
  const incrementQuantity = (id) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === id ? { ...product, quantity: product.quantity + 1 } : product
      )
    );
  };

  const decrementQuantity = (id) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === id && product.quantity > 0
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  // Lógica para paginação
  // Encontra o índice do último produto da página atual
  const indexOfLastProduct = currentPage * productsPerPage; 
  // Encontra o índice do primeiro produto da página atual
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage; 
  // Obtém os produtos da página atual
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct); 
  // Função para mudar a página
  const paginate = (pageNumber) => setCurrentPage(pageNumber); 
  // Calcula o número total de páginas
  const totalPages = Math.ceil(products.length / productsPerPage); 

  // Renderização condicional baseada nos estados 'loading' e 'error'.
  if (loading) {
    // Se 'loading' for true, exibe uma mensagem de carregamento.
    return <div>Carregando produtos...</div>;
  }

  if (error) {
    // Se 'error' não for null, exibe uma mensagem de erro.
    return <div>Erro: {error.message}</div>;
  }

  // Se não estiver carregando e não houver erro, renderiza a lista de produtos.
  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Nossos Produtos</h1> {/* Adiciona um título à página */}
      <div className="products">
        {currentProducts.map((product) => (
          <div className="product" key={product.id}>
            <div className="product_details">
              {product.image && (
                <img
                  src={product.image}
                  alt={product.product_name}
                  style={{ width: '100px', height: 'auto' }}
                />
              )}
              <h3>{product.product_name}</h3>
              <p>Produto dolor sit amet consectetur adipiscing elite</p>
              <h3>R$ {product.price.toFixed(2)}</h3>
            </div>
            <div className="product_quantity-container">
              <button onClick={() => incrementQuantity(product.id)}>+</button>
              <p>{product.quantity}</p>
              <button onClick={() => decrementQuantity(product.id)}>-</button>
            </div>
          </div>
        ))}
      </div>
      {/* Adiciona a navegação de paginação */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            style={{ margin: '0 5px', padding: '8px 12px' }}
            disabled={currentPage === index + 1} // Desabilita o botão da página atual
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Cart6;