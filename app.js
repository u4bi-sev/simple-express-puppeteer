const express = require('express'),
      bodyParser = require('body-parser');

const { port } = require('./config'),
      routes = require('./src/routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(routes);

app.listen(port, () => console.log(`Simple-express-puppeteer listening on port ${ port }!`));