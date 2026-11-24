import {test} from '@playwright/test'

test('page navigators', async ({page})=>{

    // newly created test in branch deva
    await page.goto('https://www.amazon.in/');
    await page.waitForTimeout(2000);
    await page.goto('https://www.redbus.in/');
    await page.waitForTimeout(2000);
    const URL = page.url();
    console.log(URL);
    const title = await page.title();
    console.log(title)
    console.log('added 100')
})
