# Playwright Automation Framework

A production-style end-to-end test automation framework built using **Playwright and TypeScript**, demonstrating Page Object Model, custom fixtures, authentication state management, reusable components, cross-browser testing, reporting, and CI/CD integration.

## Tech Stack

* Playwright
* TypeScript / JavaScript
* Node.js
* Git & GitHub
* GitHub Actions
* HTML Test Reports

## Framework Features

* Page Object Model (POM)
* Custom Playwright fixtures
* Reusable page components
* Dynamic locators
* Authentication using `storageState`
* Separate authentication setup
* Chromium, Firefox and WebKit projects
* CI-specific retries and workers
* Trace collection for failed/retried tests
* HTML reporting
* GitHub Actions CI/CD

## Project Structure

playwright-framework1/
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── Fixtures/
│   └── testFixture.ts
│
├── pages/
│   ├── LoginPage.ts
│   ├── ProductsPage.ts
│   └── CartPage.ts
│
├── tests/
│   ├── auth.setup.spec.ts
│   ├── login.spec.ts
│   ├── product.spec.ts
│   └── cart.spec.ts
│
├── playwright.config.ts
├── package.json
└── README.md


## Page Object Model

The framework separates UI interaction logic from test cases.

### LoginPage

* Login functionality
* Username/password handling

### ProductsPage

* Dynamic product identification
* Add products to cart

### CartPage

* Cart navigation
* Product verification
* Product removal
* Checkout
* Continue shopping

Example:

await productPage.addProduct('Sauce Labs Backpack');
await productPage.addProduct('Sauce Labs Bike Light');


###Custom Fixtures

Page Objects are injected through reusable Playwright fixtures:
test('Add product to cart', async ({ productPage }) => {
    await productPage.addProduct('Sauce Labs Backpack');
});
Available fixtures:
loginPage
productPage
cartPage

##Authentication
The framework uses a dedicated authentication setup to log in once and save the authenticated browser state.
Login
  ↓
Validate authentication
  ↓
Save storageState
  ↓
Reuse authenticated session

The generated auth.json is excluded from Git using .gitignore.

##Test Coverage
The current suite contains 34 automated tests covering:
Valid and invalid login
Product selection
Add-to-cart scenarios
Multiple products
Cart verification
Product removal
Checkout flow
Authentication setup

##CI/CD

GitHub Actions automatically:
Checkout
   ↓
Install Node.js
   ↓
npm ci
   ↓
Install Playwright browsers
   ↓
Run tests
   ↓
Generate HTML report
   ↓
Upload report artifact

Current CI execution:
34 tests passed
Status: PASSED
Workers: 1

##Run Locally
git clone https://github.com/kshnshrivastav-hash/Playwright_framework-1.git
cd Playwright_framework-1
npm ci
npx playwright install
npx playwright test

Run in headed mode:
npx playwright test --headed

Run a specific test:
npx playwright test tests/login.spec.ts

Open the HTML report:
npx playwright show-report

##Engineering Practices
This project focuses on:
Maintainable automation architecture
Reusable test components
Reliable locators
Fixture-based dependency management
Authentication state reuse
CI/CD execution
Debugging with traces and reports
Cross-browser automation

##Roadmap
Currently expanding the framework with:
API automation using APIRequestContext
API client/service layer
API fixtures
Authentication/token handling
CRUD API testing
API + UI integration
SQL/database validation
Advanced CI/CD

##Author
Kishan Srivastav
QA Automation Engineer
Skills: Playwright | TypeScript | JavaScript | API Testing | SQL | Manual Testing | Git | GitHub Actions
