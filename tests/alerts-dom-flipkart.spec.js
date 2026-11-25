import {test} from '@playwright/test'

test('General/DOM popup', async({page})=>{
    
    await page.goto('https://www.flipkart.com/');
    try{
    
    await page.waitForSelector('.b3wTlE', {timeout: 5000}); 
    await page.locator('[inputmode="numeric"]').fill('6381866832');
    await page.locator('.b3wTlE').click();
    }
    catch{
        console.log('popup not came');
    }

} )
