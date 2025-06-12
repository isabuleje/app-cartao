import React, {useState, useEffect, useInsertionEffect} from 'react'
import './Cart.css'

//rafce pra gerar a estrutura

const Cart5 = () => {
  //definicao do estado 'products' com o uso do hook useState, inicialmente com um
  const [products, setProducts] = React.useState([]);

  //definicao do estado loading, para controlar o se os dados estao sendo carregados
  const[loading, setLoading] = React.useState(true);

  //define o estado 'error' para armazenar qualquer err que ocorra durante o carregamento
  const[error, setError] = React.useState(null);

  //setEffect para buscar os dados do arquivo JSON quando o componente é montando
  useEffect(() => {
    const fetchProducts = async () =>{
      //faz uma requesicao GET para o arquivo 'produto.json' quando o componente é um
      try{
        //converte a resposta para o formato JSON
        const response = await fetch('./products.json')

        //veriica se a resposta da aquisicao nao foi bem sucessida
        if(!response.ok){
          //se a respota nao for bem sucessida, anca um erro com o status de erro
          throw new Error("Erro a buscar os produtos: ${response.status");
        }
        //converte a resposta para o formato JSON
        const data = await response.json();
        //atualiza o estado 'products' com os dados recebidos
        setProducts(data);
        
      }catch(error){
        //se ocorreu algum erro durante o processo de busca, atualiza o estado 'error'
        setError(error);
      }finally{
        //independente de sucesso ou erro, atualiza o estado 'loading' para false 
        setLoading(false);

      }
    }

    //chama a funcao fetchProdutos para iniciar a busca por dados
    fetchProducts();
  },{});// O array vazio como segundo argumento garante que o efeito é executado apenas uma vez, na montagem do componente.

   const incrementQuantity = (id) => {
    setProducts(prev =>
      prev.map(product =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const decrementQuantity = (id) => {
    setProducts(prev =>
      prev.map(product =>
        product.id === id && product.quantity > 0
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };
  
  //renderizacao condicional baseada nos estados 'loading' e 'error'
  if(loading){
    //se 'loading' for true, exibe a mensagem de carregamento
    return <div>Carregando produtos....</div>
  }if (error){
    //se 'error' nao for null, ele exibe uma messagem de erro
    return <div>Erro: {error.message}</div>
  }
  //se nao estiver carregando e houver erro, renderiza a lista de produtos

  return (
    <div className='products'>
      {products.map((product) => (
        <div className='product' key={product.id}>
          <div className='product_details'>
            {product.image &&(
                <img
                    src = {product.image}
                    alt = {product.product_name}
                    style={{width:'100px', height:'auto'}}
                />
            )}
            <h3>{product.product_name}</h3>
            <p>Produto dolor sit amet consectetur adipiscing elite</p>
            <h3>R$ {product.price.toFixed(2)}</h3>
          </div>
          <div className='product_quantity-container'>
            <button onClick={() => incrementQuantity(product.id)}>+</button>
            <p>{product.quantity}</p>
            <button onClick={() => decrementQuantity(product.id)}>-</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart5