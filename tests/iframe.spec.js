import {test, expect} from '@playwright/test'

test('handling JS alerts', async({page})=>{
    await page.goto('https://practice-automation.com/iframes/');


    const frame1 = page.frameLocator('iframe[name="top-iframe"]')

    // div[class="navbar__inner"] div
    await frame1.locator('//a[text()="MCP"]').click()

    
    console.log('test completed')

    
    // .getByRole('link', {name: 'MCP'}).click()
    
    // .getByRole('link', {name: 'MCP'}).click()

    // await frame1.locator('div[class="navbar__inner"]').getByRole('link', {name: 'MCP'}).click()
    // const frame1 = await page.frameLocator('[name="top-iframe"]').getByRole('link', {name: 'MCP'}).click()
    // await frame1.getByRole('link', {name: 'Installation'}).click()
    // await frame1.locator('span[title="Getting Started"]').click()
    // await frame1.locator('//ul[@class="menu__list"]//span[text()="Installation"]').click()

})