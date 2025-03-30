const fs = require('fs');
const path = require('path');

const reportDir = path.resolve(__dirname, 'lhci-report');
const files = fs.readdirSync(reportDir)
  .filter(f => f.endsWith('.html') && f.startsWith('report-'))
  .sort()
  .reverse();

const links = files.map(file => {
  return `<li><a href="./${file}" target="_blank">${file}</a></li>`;
}).join('\n');

const html = `
<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8">
  <title>Lighthouse 歷史報告列表</title>
  <style>
    body { font-family: sans-serif; padding: 2rem; }
    h1 { font-size: 1.5rem; }
  </style>
</head>
<body>
  <h1>Lighthouse 歷史效能分析報告</h1>
  <ul>
    ${links}
  </ul>
</body>
</html>
`;

fs.writeFileSync(path.join(reportDir, 'index.html'), html);
console.log('✅ index.html 已建立');
