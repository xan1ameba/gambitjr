const fs = require('fs');
const content = fs.readFileSync('c:\\Users\\Bekar\\Downloads\\artifacts.html', 'utf8');
const match = content.match(/<script>\s*([\s\S]*?)<\/script>/);
if (match) {
    fs.writeFileSync('c:\\Users\\Bekar\\.gemini\\antigravity\\scratch\\test.js', match[1]);
} else {
    console.log("No script tag found");
}
