import { test } from '@playwright/test';

test.describe('Start Application Step Tests', () => {

    test.beforeEach(async ({ page }) => {

        const username = "automation-user";
        const password = "123abc";
        
        const encode = Buffer.from(`${username}:${password}`).toString('base64');

        await page.setExtraHTTPHeaders( { 'Authorization': `Basic ${encode}` } );

        await page.goto('https://qa.sep.tdtm.cydeo.com/taws');


    });
    

  test('Verify that clicking the Terms & Conditions link opens a new Terms & Conditions tab', async ({ page }) => {

  });


  test('Verify that the first stepper is blue initially and changes to green once Step 1 is completed', async ({ page }) => {

  });

  test('Verify that personal input fields are enabled and accept user input', async ({ page }) => {

  });


});