"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fixture_1 = require("./fixture");
const delay = (delayInms) => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
};
(0, fixture_1.test)('Showoff BrowserStack .bringToFront', async ({ page, context }) => {
    await page.goto('https://digital.uat.greatminds.dev/');
    await page.getByRole('button', { name: 'Log in with email' }).click();
    await page.getByRole('textbox', { name: 'Email' }).click();
    await page.getByRole('textbox', { name: 'Email' }).fill('playwright_t1@greatmindsdemo.com');
    await page.getByRole('textbox', { name: 'Email' }).press('Tab');
    await page.getByRole('textbox', { name: 'Password' }).fill('Test@123');
    await page.getByRole('button', { name: 'Show Password' }).click();
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.getByRole('button', { name: 'Level Kindergarten K' }).click();
    await page.getByRole('menuitem', { name: 'Level 1 Units of Ten' }).click();
    await page.getByRole('link', { name: '1 Counting, Comparison, and Addition' }).click();
    await page.getByRole('link', { name: 'Lesson 2, Organize and represent data to compare two categories. , item 2 of 6' }).click();
    await page.getByRole('button', { name: 'Present', exact: true }).click();
    await page.getByRole('button', { name: 'Present to Class', exact: true }).click();
    await Promise.all([
        page.waitForEvent('popup'),
        page.locator('[aria-label*="Reopen"]').waitFor({ state: 'visible' }),
        page.locator('[aria-label*="Reopen"]').click(),
        await delay(4000)
    ]);
    const pages = context.pages();
    await pages[1].bringToFront();
    await pages[1].getByRole('button', { name: 'Exit', exact: true }).click();
    await pages[1].getByTestId('exit-presentOnly-footer').click();
    await delay(2000);
});
