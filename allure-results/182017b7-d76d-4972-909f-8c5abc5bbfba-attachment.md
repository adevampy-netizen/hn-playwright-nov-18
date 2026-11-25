# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: navigation.spec.js >> page navigators
- Location: tests\navigation.spec.js:3:1

# Error details

```
Error: page.goto: Navigation to "https://www.redbus.in/" is interrupted by another navigation to "https://www.amazon.in/"
Call log:
  - navigating to "https://www.redbus.in/", waiting until "load"

```

# Test source

```ts
  1  | import {test} from '@playwright/test'
  2  | 
  3  | test('page navigators', async ({page})=>{
  4  |     await page.goto('https://www.amazon.in/');
  5  |     await page.waitForTimeout(2000);
> 6  |     await page.goto('https://www.redbus.in/');
     |                ^ Error: page.goto: Navigation to "https://www.redbus.in/" is interrupted by another navigation to "https://www.amazon.in/"
  7  |     await page.waitForTimeout(2000);
  8  |     const URL = page.url();
  9  |     console.log(URL);
  10 |     const title = await page.title();
  11 |     console.log(title)
  12 |     await page.screenshot({path : './screenshot/redbus.png'});
  13 |     await page.goto('https://www.saucedemo.com/'); 
  14 |     await page.screenshot({path : './screenshot/saucedemo.png'});
  15 |     // await page.waitForTimeout(2000);
  16 |     await page.goBack();
  17 |     // await page.waitForTimeout(2000);
  18 |     await page.goBack();
  19 |     await page.goForward();
  20 |     await page.goForward();
  21 |     await page.reload();
  22 | 
  23 | 
  24 | 
  25 | 
  26 | 
  27 | 
  28 | 
  29 | 
  30 | })
```