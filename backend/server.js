const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Caminho do arquivo JSON
const dataPath = path.join(__dirname, "data", "products.json");

// Middlewares
app.use(cors());
app.use(express.json());

// Rota para listar produtos
app.get("/products", (req, res) => {
  fs.readFile(dataPath, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Erro ao ler arquivo" });
    res.json(JSON.parse(data));
  });
});

// Rota para adicionar produto
app.post("/products", (req, res) => {
  const newProduct = req.body;

  fs.readFile(dataPath, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Erro ao ler arquivo" });

    const products = JSON.parse(data);
    products.push(newProduct);

    fs.writeFile(dataPath, JSON.stringify(products, null, 2), (err) => {
      if (err) return res.status(500).json({ error: "Erro ao salvar produto" });
      res.json({
        message: "Produto adicionado com sucesso",
        product: newProduct,
      });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
