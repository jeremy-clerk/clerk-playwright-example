import { clerk } from '@clerk/testing/playwright'
import { test } from '@playwright/test';

test('sign in', async ({ page }) => {
  // Navigate to an unprotected page that loads Clerk
  await page.goto('/')

  await clerk.signIn({
    page,
    signInParams: { strategy: 'password', identifier: 'user+clerk_test@example.com', password: '##@this-is-a-test-password!@@' },
  })

  
  await page.goto('/protected')
})