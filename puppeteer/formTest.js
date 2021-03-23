const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/');
  await page.type('#name', 'foo@example.com');
  await page.type('#cardnumber', '1111000522223333');
  await page.type('#cardtype', 'mastercard');
  await page.type('#expiration-month', '07');
  await page.type('#expiration-year', '23');
  await page.type('#security-code', '123')
  await page.type('#zipcode', 'N1J2J9');
  await page.click('#submit-button');
  await page.screenshot({ path: 'example.png' });

  await browser.close();
})();