const express = require('express');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.static('public'));

require('./routes/nota')(app);

app.listen(3000, () => console.log('Servidor ouvindo na porta 3000'));
