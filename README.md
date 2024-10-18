
## Test Repo Example w/Playwright

### Configure .env.local
Rename .env.example
```bash
mv ./.env.example ./.env.local
```
Paste in your keys from the Clerk dashboard.

### Install Deps
```bash
npm i
```

### Configure [global.setup.ts](./e2e/global.setup.ts)

Update the `clerk.signIn`

```ts
 signInParams: {
      strategy: "password",
      identifier: "user+clerk_test@example.com", 
      password: "##@this-is-a-test-password!@@", //update this to a new password 
    }
```

### Configure [app.spec.ts](./e2e/app.spec.ts)

Update the `clerk.signIn`

```ts
signInParams: { strategy: 'password', identifier: 'user+clerk_test@example.com', password: '##@this-is-a-test-password!@@' }
```

### Configure User in Clerk Dashboard

- Enable password in [Authentication strategies](https://dashboard.clerk.com/last-active?path=user-authentication/email-phone-username) 
- Enable test mode in [Settings](https://dashboard.clerk.com/last-active?path=settings) 
- Create the user
  - Set the passsword and email that you used in the app.spec.ts and global.setup.ts


### Run the test

```bash
npm run test:e2e

output: 
> playwright test

baseURL http://localhost:3000

Running 3 tests using 1 worker

baseURL http://localhost:3000
  ✓  1 [global setup] › global.setup.ts:8:6 › global setup (254ms)
  ✓  2 [global setup] › global.setup.ts:17:6 › authenticate (1.8s)
baseURL http://localhost:3000
  ✓  3 [Main tests] › app.spec.ts:4:5 › sign in (1.9s)

  3 passed (13.1s)


```


