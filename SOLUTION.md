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
