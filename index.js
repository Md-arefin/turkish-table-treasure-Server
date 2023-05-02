const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req, res) => {
    res.send("Turkish food Cuisine")
});

app.get('/foodRecipe', (req, res) => {
    // console.log(foodRecipe);
    res.send(foodRecipe);
})

app.get('/foodRecipe/:id', (req, res) => {
    const id = req.params.id;
    // console.log(id);
  const selectedChef = foodRecipe.find(chef => chef._id === id);
  res.send(selectedChef);
})

app.listen(port, ()=> {
    console.log(`Turkish food Cuisine on port:${port}`)
})