const puppeteer = require('puppeteer');
const config = require('./config');

exports.run = async (req) => {
    process.stdout.write("puppeter - ");
    config.browser = await puppeteer.launch({
        headless: true,
        args: config.launchOptionForLambda,
    });

    var page = await config.browser.newPage()
    console.log("OK");

    process.stdout.write("loading page " + config.gympassURL + " - ");
    await page.goto(config.gympassURL,
        { waitUntil: ['domcontentloaded', 'networkidle0'] }
    )
    console.log("OK")

    process.stdout.write("login - ");
    await page.type('.form-content > form > .field-group > .field-holder > #person_search_info', config.gympassLogin)
    await page.click('.button-holder > input')

    await page.waitFor(2000)

    await page.type('.form-holder > #new_session_person > .field-group > .form-group > #person_password', config.gympassPassword)
    await page.click('.buttons-holder > button')

    await page.waitFor(2000)
    console.log("OK")

    process.stdout.write("token - ");
    await page.goto(config.gympassTokenURL)
    await page.waitFor(1000)

    var token;
    try {
        token = await page.evaluate(() => document.querySelector('.doTjSp').innerText);
    } catch (ex) {
        console.log("ERROR: Token already used.")
        await config.browser.close()
        return
    }
    console.log(token);

    process.stdout.write("loading page " + config.bluefitURL + " - ");
    await page.goto(config.bluefitURL,
        { waitUntil: ['domcontentloaded', 'networkidle0'] }
    )
    console.log("OK")

    process.stdout.write("filling fields - ");
    await page.type('#documento', config.bluefitCPF)
    await page.click('.g-bt-entrar')

    await page.waitFor(2000)

    await page.select('#unit', '09')
    await page.type('.gympass-form > .container > form > p > input', token)

    await page.click('body > section > div > form > button')
    console.log("OK");

    await page.waitFor(2000)
    await config.browser.close()

    console.log("Checkin Done!")
}