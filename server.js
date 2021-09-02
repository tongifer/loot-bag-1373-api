const express = require("express");
const app = express();

app.get("/", async (req, res) => {
  res.json({
    id: 5172,
    weapon: 'Book',
    chestArmor: 'Demon Husk',
    headArmor: '"Woe Peak" Great Helm of Anger +1',
    waistArmor: 'Plated Belt',
    footArmor: 'Dragonskin Boots',
    handArmor: 'Linen Gloves',
    necklace: 'Pendant of Titans',
    ring: 'Bronze Ring of Anger'
  });
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
