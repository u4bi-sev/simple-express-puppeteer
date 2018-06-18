const puppeteer = require('puppeteer');

module.exports = async (req, res, next) => {

    let url = 'https://www.naver.com',
        data = [];

    const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    const page = await browser.newPage();


    await page.goto(url, { waitUntil: 'networkidle2' }); // https://github.com/GoogleChrome/puppeteer/issues/1552


    data = await page.evaluate(() => Array.from(document.querySelectorAll('.themecast_list .tl_default'))
                                                        .map((v, i) => ({
                                                            id : i,
                                                            image : v.querySelector('img').src,
                                                            content : v.innerText
                                                        })));


    await browser.close();


    console.log('data', data);

    res.json({
        url : url,
        data
    });

};