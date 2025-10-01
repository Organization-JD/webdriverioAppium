import { expect } from "@wdio/globals";
import LoginPage from "../../pageobjects/android/login.page";
import SecurePage from "../../pageobjects/android/secure.page";

describe("My Login application", () => {
  it("should login with valid credentials", async () => {
    await LoginPage.open();

    await LoginPage.login("tomsmith", "SuperSecretPassword!");
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveText(
      expect.stringContaining("You logged into a secure area!")
    );
  });
});
