const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const port = 3000;

const vis = [{"vis": "Kabeljauw"},{"vis": "Zalm"}, {"vis": "Tonijn"}, {"vis": "Makreel"}, {"vis": "Sardine"}, {"vis": "Forel"}, {"vis": "Baars"}, {"vis": "Karper"}, {"vis": "Snoek"}, {"vis": "Paling"}]
app.get('/', (req, res) => {
    res.send(vis);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});