const puppeteer = require('puppeteer');

const searchGoogle = async (searchQuery = 'carro') => {

    const browser = await puppeteer.launch();

    const page = await browser.newPage();
    await page.goto('https://google.com');

   
    await page.type('input[name=q]', searchQuery, { delay: 100 })
    await page.click('input[type="submit"]')
    await page.waitForSelector('div[id="search"] a')
    const links = await page.$$eval('div[id="search"] a', anchors => { return anchors.map(a => { return a.href }) })

    
    await browser.close();
return links
};

module.exports = searchGoogle;