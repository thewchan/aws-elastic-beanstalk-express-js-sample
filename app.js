/* jshint esversion: 8 */
const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World! This update required a manual review!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
