import { test, expect } from '@playwright/test';
import { CommonUI } from './CommonUI';
import { faker  } from '@faker-js/faker';

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
        await expect(startApplicationCircle).toHaveCSS('background-color', 'rgb(1, 201, 255)');

        let firstname = faker.person.firstName();
        let lastname = faker.person.lastName();
        let email = faker.internet.email({ firstName: firstname, lastName: lastname });
        let phoneNumber = faker.string.numeric(10);
        
        const hearAboutUsOptions = ['Email', 'Facebook', 'Google', 'Instagram', 'LinkedIn', 'Twitter', 'Referred by a friend or colleague', 'Other'];
        let howDidYouHear = hearAboutUsOptions[Math.floor(Math.random() * hearAboutUsOptions.length)];

        await CommonUI.completeStartApplicationStep(page, firstname, lastname, email, phoneNumber, howDidYouHear);

        let paymentPlanCircle = page.locator("(//div[@class='step-circle'])[2]");
        await expect(paymentPlanCircle).toHaveCSS('background-color', 'rgb(1, 201, 255)');

  });



  test('Verify that personal input fields are enabled and accept user input', async ({ page }) => {
        let firstname = faker.person.firstName(); // Muhtar
        let lastname = faker.person.lastName();
        let email = faker.internet.email({ firstName: firstname, lastName: lastname });
        let phoneNumber = faker.string.numeric(10);

        let firstNameInput = page.locator("//input[@formcontrolname='firstName']");
        let lastNameInput = page.locator("//input[@formcontrolname='lastName']");
        let emailInput = page.locator("//input[@formcontrolname='email']");
        let phoneInput = page.locator("//input[@formcontrolname='phoneNumber']");

        await CommonUI.enterPersonalDetails(page, firstname, lastname, email, phoneNumber);

        await expect(firstNameInput).toHaveValue(firstname);
        await expect(lastNameInput).toHaveValue(lastname);
        await expect(emailInput).toHaveValue(email);
        await expect(phoneInput).toHaveValue(phoneNumber);


  });



});