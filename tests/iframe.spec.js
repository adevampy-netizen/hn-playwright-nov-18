import {test, expect} from '@playwright/test'

test('Iframes', async({page})=>{
    await page.goto('https://practice-automation.com/iframes/');


    const frame1 = page.frameLocator('#iframe-1');
    await frame1.locator("//a[text()='MCP']").click();
    await frame1.getByTitle('Installation').click()
    await page.waitForTimeout(2000)
    console.log('completed')
    
})

test('Iframes2', async({page})=>{  //only fail in chrome
    await page.goto('https://practice-automation.com/iframes/');
    const frame2 = page.frameLocator('#iframe-2');
    await frame2.locator("//li/a/span[text()='Documentation']").click();
    await frame2.locator('//a/span[text()="WebDriver"]').click();
    await page.waitForTimeout(2000)
    console.log('completed')
    
})

test('Iframes3', async({page})=>{  //only fail in chrome
    await page.goto('https://practice-automation.com/iframes/');
    const frame2 = page.frameLocator('#iframe-2');
    await frame2.locator("//li/a/span[text()='Documentation']").click();
    await frame2.locator('//a/span[text()="WebDriver"]').click();
    await page.waitForTimeout(2000)
    console.log('completed')
    
})

// iframe[class=" lazyloaded"]

test('Iframes4', async({page})=>{  
    await page.goto('https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame');
    await page.waitForTimeout(2000)
    const frame2 = page.frameLocator('iframe[class=" lazyloaded"]');
    await frame2.getByText('JMeter Training', {exact:true}).click();
    await frame2.locator('//div[@id="mobile_menu_toggler"]').click();
    await frame2.getByRole('link', {name: 'About'}).click();
    await page.waitForTimeout(2000)
    await frame2.getByRole('link', {name: 'Load More'}).click();
    await page.waitForTimeout(2000)
    await page.getByRole('link', {name: 'Sortable'}).click();

    // await frame2.locator('//a/span[text()="WebDriver"]').click();
    // await page.waitForTimeout(2000)
    // console.log('completed')
    
})


test('Iframes5', async({page})=>{  
    await page.goto('https://www.hyrtutorials.com/p/frames-practice.html');
    await page.waitForTimeout(2000)
    const frame2 = page.frameLocator('iframe[class=" lazyloaded"]');
    await frame2.getByText('JMeter Training', {exact:true}).click();
    await frame2.locator('//div[@id="mobile_menu_toggler"]').click();
    await frame2.getByRole('link', {name: 'About'}).click();
    await page.waitForTimeout(2000)
    await frame2.getByRole('link', {name: 'Load More'}).click();
    await page.waitForTimeout(2000)
    await page.getByRole('link', {name: 'Sortable'}).click();

    // await frame2.locator('//a/span[text()="WebDriver"]').click();
    // await page.waitForTimeout(2000)
    // console.log('completed')
    
})


test('frame handling', async({page})=>{
    await page.goto('https://www.hyrtutorials.com/p/frames-practice.html');
    const frame2 = page.frameLocator('[id="frm1"]')
    frame2.locator('[id="selectnav1"]').selectOption('')
    await frame2.locator('[id="firstName"]').fill('deva')

})

test.only('Nested frame handling', async({page})=>{
    await page.goto('https://www.hyrtutorials.com/p/frames-practice.html');
    const frame1 = page.frameLocator('#frm1');
    // frame1.locator('[id="selectnav1"]').selectOption('')
    await frame1.locator('#selectnav1').selectOption({label: '-- Core Java'});
    const frame3_2 = page.frameLocator('#frm3').frameLocator('#frm2');
    await frame3_2.locator('#firstName').fill('deva');
    await frame3_2.locator('#lastName').fill('A');
    await frame3_2.locator('#malerb').check()
    await frame3_2.locator('#englishchbx').check();

})









