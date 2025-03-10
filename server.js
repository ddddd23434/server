const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000; // Используем порт Render

// Даем доступ к статическим файлам
app.use(express.static(path.join(__dirname, "public")));

// Главная страница (если у тебя index.html, это не обязательно)
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Запускаем сервер на 0.0.0.0
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
