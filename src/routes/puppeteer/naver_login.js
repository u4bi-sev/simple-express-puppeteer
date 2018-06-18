const puppeteer = require('puppeteer');

module.exports = async (req, res, next) => {

    let { naver_id, naver_pass } = req.query,
        profile = {};
        contact = {};


    if (!naver_id || !naver_pass) return res.send('invalid queries');



    const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    const page = await browser.newPage();


    await page.goto('https://nid.naver.com/nidlogin.login', { waitUntil: 'networkidle2' }); // https://github.com/GoogleChrome/puppeteer/issues/1552


    await page.type('#id', naver_id);
    await page.type('#pw', naver_pass);
    await page.click('.btn_global');

    await page.waitForNavigation({ waitUntil: 'networkidle2'});



    profile = await page.evaluate(() => {

        let iframe = document.querySelector('#minime'),
            iframe_body = iframe.contentDocument.body;

        return {
            iframe_id : iframe.title,
            profile_name : iframe_body.querySelector('#user_name').textContent,
            mail_count : iframe_body.querySelector('#mail_count_profile span').textContent,
            note_count : iframe_body.querySelector('#note_count_profile span').textContent
        };

    });



    await page.goto('https://nid.naver.com/user2/help/myInfo.nhn?lang=ko_KR', { waitUntil: 'networkidle2' });

    contact = await page.evaluate(() => {

        let keys = ['기본 이메일', '본인확인 이메일', '휴대전화'];

        return Array.from(document.querySelectorAll('.sh_lst2 dd')).reduce((acc, v, i) => {
            
            acc[ keys[i] ] = v.textContent;

            return acc;
        }, {});

    });



    await browser.close();


    console.log('data', profile, contact);

    res.json({
        profile,
        contact
    });

};