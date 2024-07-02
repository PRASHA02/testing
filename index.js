const puppeteer = require('puppeteer');
const express = require('express');
const app = express();
require('dotenv').config();
const router = require('./routes/testRoute');

app.use(express.json());

// Testing route
app.use('/api', router);

const port = process.env.PORT || 5000;
const url = `http://localhost:${port}/api/test`;

// const generatePDF = async () => {
//   try {
//     const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
//     const page = await browser.newPage();

//     await page.goto(url, {
//       waitUntil: 'networkidle2'
//     });

//     await page.pdf({
//       path: 'D:/Downloads/Downloads/test.pdf',
//       format: 'A4'
//     });

//     await browser.close();
//     console.log('PDF generated successfully.');
//   } catch (err) {
//     console.error('Failed to generate PDF:', err);
//   }
// };

const start = async () => {
  try {
    app.listen(port, async () => {
      console.log(`Listening to Port ${port}..`);

      // // Wait a bit for the server to start properly
      // setTimeout(async () => {
      //   await generatePDF();
      // }, 1000);
    });
  } catch (err) {
    console.error('Something went wrong:', err);
    process.exit(1);
  }
};

start();
