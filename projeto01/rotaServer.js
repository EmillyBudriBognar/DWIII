const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

function page404(response) {
  const filePath = path.join(__dirname, '404.html');
  fs.readFile(filePath, (err, data) => {
    if (err) {
      response.writeHead(500, { 'Content-Type': 'text/plain' });
      return response.end('Internal Server Error');
    }
    response.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    response.end(data);
  });
}

function serveHTML(response, filePath) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      return page404(response);
    }
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    response.end(data);
  });
}

function serveStatic(response, pathname) {
  const safePath = pathname.replace(/^\/+/, '');
  const filePath = path.join(__dirname, safePath);
  const ext = path.extname(filePath);

  const types = {
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.webp': 'image/webp'
  };

  fs.readFile(filePath, (err, data) => {
    if (err) {
      return page404(response);
    }
    response.writeHead(200, {
      'Content-Type': types[ext] || 'application/octet-stream'
    });
    response.end(data);
  });
}

const server = http.createServer((request, response) => {
  const parsedUrl = url.parse(request.url);
  const pathname = parsedUrl.pathname;
  const ext = path.extname(pathname);

  if (ext) {
    return serveStatic(response, pathname);
  }

  if (pathname === '/') {
    serveHTML(response, path.join(__dirname, 'index.html'));
  } else if (pathname === '/quemsou') {
    serveHTML(response, path.join(__dirname, 'quemsou', 'quemsou.html'));
  } else if (pathname === '/produtos') {
    serveHTML(response, path.join(__dirname, 'produtos', 'produtos.html'));
  } else if (pathname === '/perguntas') {
    serveHTML(response, path.join(__dirname, 'perguntas', 'perguntas.html'));
  } else if (pathname.startsWith('/produtos/')) {
    const prodName = pathname.split('/')[2];
    if (!prodName) {
      response.writeHead(302, { Location: '/produtos' });
      return response.end();
    }
    serveHTML(response, path.join(__dirname, 'produtos', prodName, `${prodName}.html`));
  } else {
    page404(response);
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Aura Joias server running at http://localhost:${PORT}`);
});
