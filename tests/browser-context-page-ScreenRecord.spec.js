import {test, chromium} from '@playwright/test'

test('browser context & screen record', async()=>{
    const browser = await chromium.launch();   //Returns the browser instance.
    const context = await browser.newContext({
        recordVideo:{dir: './video/'}
    }
        
    ) //Creates a new browser context. that is new window.It won't share cookies/cache with other browser contexts.
    const page = await context.newPage() //Creates a new page in the browser context.
    await page.goto('https://www.amazon.in/');
    await page.locator('//input[@aria-label="Search Amazon.in"]').fill('iphone');
    await page.locator('#nav-search-submit-button').click();
    await page.waitForTimeout(2000);
    const page1 = await context.newPage();
    await page1.goto('https://www.flipkart.com/');
    await page1.waitForTimeout(2000);

    const context2 = await browser.newContext({
        recordVideo: {dir: './video/'}
    });
    const page2 =await context2.newPage();
    await page2.goto('https://demoqa.com/text-box');
    await page2.getByPlaceholder("Full Name").fill('deva');
    await page.waitForTimeout(2000);
    console.log('##test completed')

})