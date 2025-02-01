const fs = require('fs');
const path = require('path');

function getDate(name) {
    const filePath = path.join(__dirname, '../locals/en.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    const greeting = data.greeting.replace('%s', name);
    const currentTime = new Date().toString();

    return `<span style="color:blue;">${greeting}${currentTime}</span>`;
}

module.exports = { getDate };