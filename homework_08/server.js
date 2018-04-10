process.stdout.write('What are you waiting for? \n');

const express        = require('express');
const app            = express();
const handlers       = require('./controllers/handlers');
const port           = process.env.PORT || 3000;
const rockstars      = require('./routes');

app.use('/', rockstars);
app.use(express.json());

app.listen(port, () => {
  console.log(`We are live on ${port}`);
});
