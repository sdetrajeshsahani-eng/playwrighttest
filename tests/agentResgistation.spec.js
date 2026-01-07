// @ts-check
import { test, expect } from '@playwright/test';

test('Agent registation form happy flow', async ({ page }) => {

  //
  await page.goto("https://app.playonereal.com/agent-signup");

  // fill all data
  await page.getByTestId("text-input-First Name").fill("Rajesh");
  await page.getByTestId("text-input-Last Name").fill("Sahani")
  await page.getByTestId("text-input-Username").fill("rajeshsaha@gmail.com")
  await page.getByTestId("email-input-Email").fill("rajesh082")
  await page.getByTestId("password-input-Password").fill("Xyz011ewewew22@")
  await page.getByTestId("password-input-Password Confirmation").fill("Xyz011ewewew22@")

  // make sure t&c checked
  await page.getByTestId("consentedToCallMessage").check()
  await page.getByTestId("consentedToTerms").check()

  // find create account button and click it
  await page.getByRole('button', { name: 'Create Account' }).click()

  //if registafrion succesfull then land at dashboard screen
  await expect(page).toHaveURL("https://app.playonereal.com/agent-onboarding");
  

});

