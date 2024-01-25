const express = require('express');
const path = require('path');
const { access } = require('fs').promises;
const compression = require('compression');
const https = require('https');
const http = require('http');
const fs = require('fs');

const app = express();
const portHttp = 80;
const portHttps = 443;

const distFolder = path.join(__dirname, './');

// Use the compression middleware
app.use(compression());

// Redirect HTTP to HTTPS and enforce 'www' in the domain
// app.use(async (req, res, next) => {
//   if (req.headers.host === 'nicheshack.com') {
//     // Redirect to 'www.nicheshack.com'
//     return res.redirect(`https://www.nicheshack.com${req.url}`);
//   } else if (!req.secure) {
//     // Redirect to HTTPS if not secure
//     return res.redirect(`https://${req.headers.host}${req.url}`);
//   }
//   next();
// });



// Serve static files with the specified extensions and disable trailing slash redirect
app.use(express.static(distFolder, {
  maxAge: '1y',
  extensions: ['html'], // Only serve HTML files
  redirect: false
}));

// Route for handling all other requests and sending the 'index.html' file
app.get('*', async (req, res) => {
  // Construct the physical file path, removing any URL params
  const staticPath = path.join(distFolder, req.path.split(';')[0], 'index.html');

  try {
    await access(staticPath); // Asynchronous check for file existence

    // If the file exists, send it
    res.sendFile(staticPath);
  } catch (error) {
    // If not, send the usual 'index.html'
    res.sendFile(path.join(distFolder, 'index.html'));
  }
});

// HTTPS options (replace 'your-key.pem' and 'your-cert.pem' with your actual key and certificate file paths)
const httpsOptions = {
  key: fs.readFileSync('./server-key.pem'),
  cert: fs.readFileSync('./server-certificate.pem'),
  passphrase: "Cyb668622",
};

// // Create both HTTP and HTTPS servers with domain binding
const httpServer = http.createServer(app);
const httpsServer = https.createServer(httpsOptions, app);

// Listen for HTTP requests on port 80 for www.nicheshack.com
httpServer.listen(portHttp, () => {
  console.log(`HTTP Server is running on http://localhost:${portHttp}`);
});

// Listen for HTTPS requests on port 443 for www.nicheshack.com
httpsServer.listen(portHttps, () => {
  console.log(`HTTPS Server is running on https://localhost:${portHttps}`);
});
