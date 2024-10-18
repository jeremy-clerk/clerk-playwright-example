import { clerk, clerkSetup } from "@clerk/testing/playwright";
import { setupClerkTestingToken } from '@clerk/testing/playwright'
import { test as setup } from "@playwright/test";
import path from "path";


    
setup("global setup", async ({}) => {
  await clerkSetup();
  
}
);

const authFile = path.join(__dirname, "../playwright/.clerk/user.json");


setup("authenticate", async ({ page }) => {
  await setupClerkTestingToken({ page });
  await page.goto("/");
  await clerk.signIn({
    page,
    signInParams: {
      strategy: "password",
      identifier: "user+clerk_test@example.com",
      password: "##@this-is-a-test-password!@@",
    },
  });

  // await page.goto("/protected");
  // await page.waitForSelector("h1:has-text('Protected it is')");

  await page.context().storageState({ path: authFile });
});