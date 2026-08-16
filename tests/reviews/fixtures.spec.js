import { test, expect } from '@playwright/test';

test('Context fixture example', async ({ context }) => {

    test.setTimeout(60000); // Set a timeout of 60 seconds for this test

    const page1 = await context.newPage(); // Create a new page in the context
    await page1.waitForTimeout(1000);

    const page2 = await context.newPage(); // Create a new page in the context
    await page2.waitForTimeout(1000);

    const page3 = await context.newPage(); // Create a new page in the context
    await page3.waitForTimeout(1000);

    const page4 = await context.newPage(); // Create a new page in the context

    await page4.waitForTimeout(3000);

    await page1.bringToFront(); // Bring page1 to the front
    await page1.goto("https://www.facebook.com/");
    await page1.waitForTimeout(3000);

    await page2.bringToFront(); // Bring page2 to the front
    await page2.goto("https://www.instagram.com/");
    await page2.waitForTimeout(3000);

    await page3.bringToFront(); // Bring page3 to the front
    await page3.goto("https://www.linkedin.com/");
    await page3.waitForTimeout(3000);

    await page4.bringToFront(); // Bring page4 to the front
    await page4.goto("https://www.youtube.com/");
    await page4.waitForTimeout(3000);



});


test('Browser fixture example', async ({ browser }) => {

    test.setTimeout(60000); // Set a timeout of 60 seconds for this test

    const context1 = await browser.newContext(); // Create a new browser context
    const context2 = await browser.newContext(); // Create a new browser context

    const page1 = await context1.newPage(); // Create a new page in context1
    await page1.waitForTimeout(1000);
    const page2 = await context1.newPage(); // Create a new page in context1
    await page2.waitForTimeout(1000);
    const page3 = await context1.newPage(); // Create a new page in context1
    await page3.waitForTimeout(1000);


    const page4 = await context2.newPage(); // Create a new page in context2
    await page4.waitForTimeout(1000);
    const page5 = await context2.newPage(); // Create a new page in context2
    
    await page5.waitForTimeout(3000);

    await page1.bringToFront(); // Bring page1 to the front
    await page1.goto("https://www.facebook.com/");
    await page1.waitForTimeout(3000);

    await page2.bringToFront(); // Bring page2 to the front
    await page2.goto("https://www.instagram.com/");
    await page2.waitForTimeout(3000);

    await page3.bringToFront(); // Bring page3 to the front
    await page3.goto("https://www.linkedin.com/");
    await page3.waitForTimeout(3000);


    await page4.bringToFront(); // Bring page4 to the front
    await page4.goto("https://www.youtube.com/");
    await page4.waitForTimeout(3000);

    await page5.bringToFront(); // Bring page5 to the front
    await page5.goto("https://www.google.com/");
    await page5.waitForTimeout(3000);


});
