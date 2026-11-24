import {test, expect} from '@playwright/test'

// file upload is similar to drop-down ###select option method
test('file Upload', async({page})=>{     

    await page.goto('https://uploadnow.io/')
    await page.waitForTimeout(2000)
    await page.locator('input[multiple]').setInputFiles(['./screenshot/amazon.png',
        './screenshot/multiselectScreenshot.png'
        ])
    await page.getByText('Validate and upload').click()
    //await page.locator('//h1[text()= "All done!"]').waitFor({state: 'visible'})
    // await expect(page.locator('//h1[text()= "All done!"]')).toContainText('All done')

    await expect(page.locator('//h1[text()= "All done!"]')).toBeVisible({timeout: 15000})
    console.log('completed')
})


test('download files' , async({page})=>{
    await page.goto('https://demoqa.com/upload-download');
    const [downloaded_file] = await Promise.all([
        page.waitForEvent('download'), 
        page.getByRole('button' ,{name: 'Download'}).click()
        ]);
    // await downloaded_file.saveAs('./download/' + downloaded_file.suggestedFilename());
    await downloaded_file.saveAs('./download/customNameFile.png')
    console.log('file downloaded')
})

