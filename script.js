const form = document.getElementById("productForm");
const messageDiv = document.getElementById("message");
const productList = document.getElementById("productList");

const API_URL = "http://localhost:3000/products";

// Função para mostrar mensagem
function showMessage(msg) {
  messageDiv.textContent = msg;
  setTimeout(() => {
    messageDiv.textContent = "";
  }, 3000);
}

// Função para renderizar produtos
async function renderProducts() {
  productList.innerHTML = "";
  try {
    const res = await fetch(API_URL);
    const products = await res.json();

    products.forEach((prod) => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
                ${
                  prod.image
                    ? `<img src="${prod.image}" alt="${prod.name}">`
                    : ""
                }
                <h3>${prod.name}</h3>
                <p>${prod.description}</p>
                <p>Categoria: ${prod.category}</p>
                <p class="price">R$ ${prod.price}</p>
            `;
      productList.appendChild(card);
    });
  } catch (error) {
    console.error("Erro ao carregar produtos:", error);
  }
}

// Evento ao enviar formulário
form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const product = {
    id: Date.now(),
    name: form.name.value,
    description: form.description.value,
    price: parseFloat(form.price.value).toFixed(2),
    category: form.category.value,
    image: form.image.value,
  };

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });

    const data = await res.json();
    showMessage(data.message);
    form.reset();
    renderProducts();
  } catch (error) {
    console.error("Erro ao adicionar produto:", error);
  }
});

// Carregar produtos ao iniciar
renderProducts();
