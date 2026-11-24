import {test} from '@playwright/test'

test('amazon search', async({page})=>{
    await page.goto('https://www.amazon.in/')
    await page.locator('input#twotabsearchtextbox').fill('laptop')
    await page.locator('input[id="nav-search-submit-button" ][class*="nav-input"]').click()
    await page.waitForTimeout(2000)
    await page.screenshot({path: './screenshot/amazon.png'})
    /*
    ./screenshot/amazon.png   means in root level save in screenshot folder 
    this screenshot will save locally , but while configuring in config.js it will only save in report and in local.
    1) local - code in script
    2) report - config in config.js

    */
    
})

test('demoqa', async({page})=>{
    await page.goto('https://demoqa.com/')
    await page.locator('//h5[text()="Elements"]').click()
    

} )





