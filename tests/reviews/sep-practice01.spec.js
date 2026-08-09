import { test, expect } from '@playwright/test';
import { CommonUI } from './CommonUI';

test.describe('Start Application Step Tests', () => {

    test.beforeEach(async ({ page }) => {
       await CommonUI.login(page);
    });
    

  test('Verify that clicking the Terms & Conditions link opens a new Terms & Conditions tab', async ({ page }) => {
    let popupEvenetPromise = page.waitForEvent('popup');

    let termsAndConditionsLink = page.locator("//a[@href='https://cydeo.com/terms-conditions/']");
    await termsAndConditionsLink.click();

    let newPage = await popupEvenetPromise;

    let termsAndConditionsHeader = newPage.locator("//h1[normalize-space()='Terms and Conditions']");
    
    // verify that the Terms and Conditions header is visible
    await expect(termsAndConditionsHeader).toBeVisible();

  });


  test('Verify that the first stepper is blue initially and changes to green once Step 1 is completed', async ({ page }) => {
        let startApplicationCircle = page.locator("(//div[@class='step-circle'])[1]");
        let paymentPlanCircle = page.locator("(//div[@class='step-circle'])[2]");

        let firstNameInput = page.locator("//input[@formcontrolname='firstName']");
        let lastNameInput = page.locator("//input[@formcontrolname='lastName']");
        let emailInput = page.locator("//input[@formcontrolname='email']");
        let phoneInput = page.locator("//input[@formcontrolname='phoneNumber']");

        


       

        // how did you hear about us ===> Nirmal
        // next button ===> Nirmal


  });

  test('Verify that personal input fields are enabled and accept user input', async ({ page }) => {

  });



});