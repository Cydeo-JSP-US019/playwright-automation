import { expect } from "@playwright/test";

export class CommonUI {
  static async login(page) {
    const encode = Buffer.from(
      `${process.env.SEP_USERNAME}:${process.env.SEP_PASSWORD}`,
    ).toString("base64");
    await page.setExtraHTTPHeaders({ Authorization: `Basic ${encode}` });
    await page.goto(process.env.SEP_QA_URL);
  }

  static async enterPersonalDetails(
    page,
    firstName = "John",
    lastName = "Doe",
    email = "john.doe@cydeo.com",
    phoneNumber = "123-456-7890",
    howDidYouHear = "Email",
  ) {
    let firstNameInput = page.locator("//input[@formcontrolname='firstName']");
    let lastNameInput = page.locator("//input[@formcontrolname='lastName']");
    let emailInput = page.locator("//input[@formcontrolname='email']");
    let phoneInput = page.locator("//input[@formcontrolname='phoneNumber']");
    let howDidYouHearSelect = page.locator(
      "//mat-label[text()='How did you hear about us?']",
    );

    await firstNameInput.fill(firstName);
    await lastNameInput.fill(lastName);
    await emailInput.fill(email);
    await phoneInput.fill(phoneNumber);
    await howDidYouHearSelect.click();
    let howDidYouHearOption = page.locator(`//span[text()='${howDidYouHear}']`);
    await howDidYouHearOption.click();
  }

  static async completeStartApplicationStep(
    page,
    firstName = "John",
    lastName = "Doe",
    email = "john.doe@cydeo.com",
    phoneNumber = "123-456-7890",
    howDidYouHear = "Email",
  ) {
    await this.enterPersonalDetails(
      page,
      firstName,
      lastName,
      email,
      phoneNumber,
      howDidYouHear,
    );
    let nextButton = page.locator("//button[text()=' Next']");
    await nextButton.click();
    let startApplicationCircle = page.locator(
      "(//div[@class='step-circle'])[1]",
    );
    await expect(startApplicationCircle).toHaveCSS(
      "background-color",
      "rgb(172, 245, 138)",
    );
  }

  static async selectPaymentPlan(page, planName = "Upfront") {
    planName = planName.toLowerCase();
    let upfrontPaymentPlan = page.locator(
      "//mat-expansion-panel-header[.//span[contains(@class,'payment-type') and normalize-space(.)='Upfront']]",
    );
    let installmentsPaymentPlan = page.locator(
      "//mat-expansion-panel-header[.//span[contains(@class,'payment-type') and normalize-space(.)='5 Installments']]",
    );

    switch (planName) {
      case "upfront":
        await upfrontPaymentPlan.click();
        break;
      case "installments":
        await installmentsPaymentPlan.click();
        break;
      default:
        throw new Error(
          `Invalid plan name: ${planName}. Valid options are 'upfront' or 'installments'.`,
        );
    }
  }

  static async completePaymentPlanStep(page, planName = "Upfront") {
    await this.selectPaymentPlan(page, planName);
    let activeNextButton = page.locator("//button[text()='Next']");
    await activeNextButton.click();

    let paymentPlanCircle = page.locator("(//div[@class='step-circle'])[2]");
    await expect(paymentPlanCircle).toHaveCSS(
      "background-color",
      "rgb(172, 245, 138)",
    );
  }
  
}
