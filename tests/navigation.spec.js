import {test} from '@playwright/test'

test('page navigators', async ({page})=>{
    await page.goto('https://www.amazon.in/');
    await page.waitForTimeout(2000);
    await page.goto('https://www.redbus.in/');
    await page.waitForTimeout(2000);
    const URL = await page.url();
    console.log(URL);
    const title = await page.title();
    console.log(title)
    await page.screenshot({path : './screenshot/redbus.png'});
    await page.goto('https://www.saucedemo.com/'); 
    await page.screenshot({path : './screenshot/saucedemo.png'});
    // await page.waitForTimeout(2000);
    await page.goBack();
    // await page.waitForTimeout(2000);
    await page.goBack();
    await page.goForward();
    await page.goForward();
    await page.reload();
    console.log('mmmm')
    console.log('mmm jjj mm')








})
