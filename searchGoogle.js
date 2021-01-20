const puppeteer = require('puppeteer');

const searchGoogle = async (searchQuery = 'carro') => {

    const browser = await puppeteer.launch();

    const page = await browser.newPage();
    await page.goto('https://google.com');

   
    await page.type('input[name=q]', searchQuery, { delay: 100 })
    await page.click('input[type="submit"]')
    await page.waitForSelector('h3 span')
    const links = await page.$$eval('h3 span', anchors => { return anchors.map(a => { return a.textContent }) })

    
    await browser.close();
return links
};

module.exports = searchGoogle;