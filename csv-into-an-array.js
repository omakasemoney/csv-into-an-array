const csv = require('csv-parser')
const fs = require('fs')
const results = [];

fs.createReadStream('data.csv')
.pipe(csv())
.on('data', (data) => {
  results.push(data["wallet"].toLowerCase()) }
)
.on('end', () => {
  console.log(results);
  fs.writeFile("wallets_in_an_array", JSON.stringify(results), function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
  }); 
});
