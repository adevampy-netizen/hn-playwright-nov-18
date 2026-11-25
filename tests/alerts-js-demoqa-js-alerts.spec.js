import {test, expect} from '@playwright/test'

test('handling JS alerts', async({page})=>{
    await page.goto('https://demoqa.com/');
    await page.getByRole('link', {name: 'Elements'}).click();
    await page.getByText('Alerts, Frame & Windows').click();
    await page.locator('[href="/alerts"]').click();
    
    
    // event listerner -dialog 
    // Dialog is reference variable to access methods from the listener
    // it is sync function

    page.on('dialog', (Dialog) =>{
        console.log(Dialog.message())
        console.log(Dialog.type())
        // Dialog.accept()
        if ( Dialog.type() === 'alert'){
            console.log(Dialog.message())
            Dialog.accept()

        } else if (Dialog.type() === 'confirm'){
            console.log(Dialog.message())
            Dialog.dismiss()

        } else if (Dialog.type() == 'prompt'){
            console.log(Dialog.message())
            Dialog.accept('deva')
        }
    

    })


    await page.locator('#alertButton').click();
    await page.locator('#confirmButton').click();
    await page.locator('#promtButton').click();


    // const dialogPromise = page.waitForEvent('dialog', { timeout: 10000 });
    // await page.locator('#timerAlertButton').click();

    // const timerDialog = await dialogPromise;
    // console.log('Timer alert type:', timerDialog.type());
    // console.log('Timer alert message:', timerDialog.message());
    // expect(timerDialog.message()).toBe('This alert appeared after 5 seconds');
    // await timerDialog.accept();





})