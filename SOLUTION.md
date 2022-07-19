<div id="top"></div>

<!-- PROJECT Header -->
<p align="center">
  <h3 align="center">CoverGo Stepper</h3>
  <p align="center">CoverGo Stepper is a interactive wizard to for users to buy a premium insurance</p>
  <p align="center">
    <a href="#technical-choices">Technical Choices</a>
  |
    <!-- Replace with https://cheesecakelabs.atlassian.net/secure/CreateIssueDetails!init.jspa?pid=10210&issuetype=<issue-id> -->
    <a href="#architecture">Architecture</a>
  |
    <a href="#the-approach">The Approach</a>
  </p>
</p>

## Technical Choices

I have been building applications using React from quite a while. Hence, I chose to pick React to build the Stepper. Saying so,I have used Angular in the past and I am open to learn anything new which helps in solving interesting business problems. I have used the following technologies to build this project:

- [React.js](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [CSS Modules](https://www.npmjs.com/package/css-modules)
- [ES6](https://www.ecma-international.org/ecma-262/6.0/)
- [ESLinter](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://husky.run/)
- [Git](https://git-scm.com/)
- [Lint-staged](https://github.com/okonet/lint-staged)

I have written tests for all the components in the project. I have used the following technologies to write the tests:

- [Jest](https://jestjs.io/)
- [React Testing Library](https://reacttesting.com/)

Linters have been used to lint the code. I have used Prettier to format the code.

All the files have strong type checks.

Lint Staged has been used to verify the code quality of the changed files. Husky has been enabled to run the linter and the tests on the changed files. Code can be committed and pushed to the repository only if the lint and formatting tests pass. I have not enabled them for jest tests but it can be easily toggled. Although, I have not used any CI/CD tools to run the tests. So, it can be force pushed to the repository.

Latest version of React is used to build the project. I have used React Hooks for handling side effects, state changes, memoization, and other React features.

<p align="right">(<a href="#top">back to top</a>)</p>

## Architecture

For this project, I have used the following divisions:

- Main App
- Stepper Components
- Common Components for layout
- Global Theme
- Helpers
- Types
- Constants

I have prepared a architectural diagram for the project here:

[Archietctural Diagram](https://excalidraw.com/#json=nEJjJzgv1UtB2713iOzPO,rgTa6f85ABL1yKXS-3_oDA)

The above diagram should provide a high level overview of the project.

<p align="right">(<a href="#top">back to top</a>)</p>

## The Approach

The business logic of the app resides in `App.tsx`. The main app file is responsible for the stepper navigation. It also stores the state of the stepper locally so that its persisted after the user navigates away from the page.

A spinner has been added to provide a glimpse of how we can takle the App-read state.

A memoized collection of stepper components has been created. The components are responsible for the individual steps of the stepper.

In total, there are 4 steps in the stepper:

- Step 1: We pitch the user about the insurance. Logic can be found in `WizardPitch.tsx`
- Step 2: We ask the user to fill details to calculate the premium amount. Once all the details are provided, we validate it. Once the details are validated, we calculate the premium amount and show it. On submit, we take the user to the next step. Logic can be found in `WizardVerificationForm.tsx`
- Step 3: If the user's age is above 101, we show a message saying that the user is not eligible for the insurance. The logic can be found in the main App where we check the age and send the user to the Wizard error page.
- Step 4: We show the users the premium amount they have chosen on the summary page. Logic can be found in `WizardSummary.tsx`. On buy press, we take the user to step 1 and reset the form data and local storage related details.

There are helpers to validate the user's details and calculate premium.

We have created the Container, Card and InfoBox layout for common UI layout and elements.

Global theme has been set in `theme/global.css`. It has been used to set the colors, font size and weight for the UI.

<p align="right">(<a href="#top">back to top</a>)</p>
