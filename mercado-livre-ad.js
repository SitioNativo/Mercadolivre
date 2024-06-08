async function fetchProductData() {
  const productId = 'MLB1234567890'; // Substitua pelo ID do produto
  const productUrl = `https://api.mercadolibre.com/items/${productId}`;

  try {
    const response = await fetch(productUrl);
    const productData = await response.json();

    document.getElementById('produto-titulo').innerText = productData.title;
    document.getElementById('produto-preco').innerText = `Preço: R$ ${productData.price}`;
    document.getElementById('produto-link').href = `https://produto.mercadolivre.com.br/${productId}`;
  } catch (error) {
    console.error('Erro ao buscar os dados do produto:', error);
  }
}

fetchProductData();
