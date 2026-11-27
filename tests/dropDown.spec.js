import {test} from '@playwright/test'

test('handling-dropDown', async({page})=>{
    await page.goto('https://www.amazon.in/')
    // await page.locator('#searchDropdownBox').selectOption({value: 'search-alias=stripbooks'})
    await page.locator('#searchDropdownBox').selectOption('search-alias=stripbooks')
    await page.waitForTimeout(2000)
    await page.locator('#searchDropdownBox').selectOption({label: 'Apps & Games'})
    await page.waitForTimeout(2000)

    await page.locator('[title="Search in"]').selectOption({index: 2})
    
    
})


test('multiSelect dropDown', async({page})=>{
    await page.goto('https://testautomationcentral.com/demo/dropdown.html')
    await page.getByText('Multi-Select', {exact: true}).click()
    await page.locator('.form-multiselect').selectOption([{value: 'option1'}, {value: 'option3' } ])
    await page.screenshot({path: './screenshot/multiselectScreenshot.png'})

})






