const express = require('express');
const path = require('path');
const { access } = require('fs').promises;
const compression = require('compression');
const https = require('https');
// const http = require('http');
const fs = require('fs');
const config = require('config');
const app = express();
// const portHttp = 80;
const portHttps = 443;
const rootDirectory = __dirname;



// Use the compression middleware
app.use(compression());



// Redirect HTTP to HTTPS and enforce 'www' in the domain
// app.use(async (req, res, next) => {
//   const targetProtocol = 'https';

//   if (req.headers['host'] != 'localhost') {
//     if (req.protocol !== targetProtocol || req.get('host') !== 'www') {
//       // Redirect to the specified protocol and 'www' subdomain
//       return res.redirect(`${targetProtocol}://www.${req.get('host')}${req.url}`);
//     }
//   }

//   next();
// });



// Serve static files with the specified extensions and disable trailing slash redirect
app.use(express.static(rootDirectory, {
  maxAge: '1y',
  extensions: ['html'], // Only serve HTML files
  redirect: false
}));



// app.get('/getImage/:img', (req, res) => {
//   const width = req.query.w;
//   const acceptHeader = req.headers['accept'];
//   const imagePath = path.join(rootDirectory, 'images');
//   let image = req.params.img.replace(/(\..+)/, '');
//   let imageType = '';

//   if (acceptHeader.includes('image/avif')) {
//     imageType = 'avif';
//   } else 
//   if (acceptHeader.includes('image/webp')) {
//     imageType = 'webp';
//   } else {
//     imageType = 'png';
//   }

//   if (width) image += '-' + width;


//   // Set the Content-Type header
//   res.header('Content-Type', 'image/' + imageType);

//   // Set the Content-Disposition header to 'inline' for displaying in the browser
//   res.header('Content-Disposition', 'inline');

//   // Set the Cache-Control header to allow caching
//   res.header('Cache-Control', 'public, max-age=86400'); // Cache for 24 hours, adjust as needed

  
//   res.sendFile(path.join(imagePath, image + '.' + imageType));
// });



// Route for handling all other requests and sending the 'index.html' file
app.get('*', async (req, res) => {
  // Construct the physical file path, removing any URL params
  const staticPath = path.join(rootDirectory, req.path.split(';')[0], 'index.html');

  try {
    await access(staticPath); // Asynchronous check for file existence

    // If the file exists, send it
    res.sendFile(staticPath);
  } catch (error) {
    // If not, send the usual 'index.html'
    res.sendFile(path.join(rootDirectory, 'index.html'));
  }
});

// HTTPS options using configuration settings
const httpsOptions = {
  key: fs.readFileSync(config.get('server.keyPath')),
  cert: fs.readFileSync(config.get('server.certPath')),
  passphrase: config.get('server.passphrase')
};

// // Create both HTTP and HTTPS servers with domain binding
// const httpServer = http.createServer(app);
const httpsServer = https.createServer(httpsOptions, app);

// Listen for HTTP requests on port 80
// httpServer.listen(portHttp, () => {
//   console.log(`HTTP Server is running on http://localhost:${portHttp}`);
// });

// Listen for HTTPS requests on port 443
httpsServer.listen(portHttps, () => {
  console.log(`HTTPS Server is running on https://localhost:${portHttps}`);
});
