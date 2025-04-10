const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/slike.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'slike.html'));
});
app.get('/grafikon.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'grafikon.html'));
});
app.get('/style.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'style.css'));
});
app.get('/style.css.map', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'style.css.map'));
});
app.get('/assets/img/amcharts_weather_icons/static/day.svg', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'assets/img/amcharts_weather_icons/static/day.svg'));
});
app.get('/assets/img/amcharts_weather_icons/static/rainy-7.svg', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'assets/img/amcharts_weather_icons/static/rainy-7.svg'));
});

app.listen(3000, () => {
    console.log("Server je pokrenut na http://localhost:3000");
});