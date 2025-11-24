const puppeteer = require("puppeteer");

async function runTest() {
    // puppeteer.launch() Chrome browser open hoga   headless = hidden browser -> false → show browser
    const browser = await puppeteer.launch({ headless: false });

    
    const page = await browser.newPage();

    await page.goto("https://app.cloudqa.io/home/AutomationPracticeForm");

    // fill fields automatic 
    await page.type('#fname', "Bhushan");
    await page.type('#lname', "Gadekar");
    await page.type('#email', "bhushangadekar752@gmail.com");

    console.log("TEST PASSED...");

    await browser.close();
}

runTest();
