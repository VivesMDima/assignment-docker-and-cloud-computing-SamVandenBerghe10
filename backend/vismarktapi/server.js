const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

app.use(express.json())
app.use(cors());

const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONG_DB_URI)
   .then(() => console.log('Connected to MongoDB'))
   .catch(err => console.error('cant connect to db: ' + err));


const visSchema = new mongoose.Schema({vis: String});

const Vis = mongoose.model('Vis', visSchema);

const seedVissen = async () => {
    const vissen = [{"vis": "Kabeljauw"},{"vis": "Zalm"}, {"vis": "Tonijn"}, {"vis": "Makreel"}, {"vis": "Sardine"}, {"vis": "Forel"}, {"vis": "Baars"}, {"vis": "Karper"}, {"vis": "Snoek"}, {"vis": "Paling"}]
    try {
        await Vis.deleteMany({})
        await Vis.insertMany(vissen)
    } catch (err) {
        console.error(err)
    }
}

seedVissen()

app.get('/', async (req, res) => {
    try {
        const vissen = await Vis.find()
        res.send(vissen);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});