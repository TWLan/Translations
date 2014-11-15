/* Convert all json files to indented versions (for being commited/editable) */

var fs = require('fs');
fs.readdirSync('.').forEach(function (file) {
    if (file.substr(-5) != ".json") return;
    fs.writeFileSync(file, JSON.stringify(JSON.parse(fs.readFileSync(file, {encoding: "UTF-8"})), null, 4));
});