# Eurostar Technical Assignment

## Setup

Basic Scripts to run project

You should clone this repository and run `npm install` from the correct directory within your terminal. Once all of the files are installed, you should be able to:

1. Run `npm run dev` - you should see the following:
`🚄 Server running @ http://localhost:4000`
This command runs with nodemon to auto-reload
2. Run `npm run devStart` - starts FE of project with webpack and opens localhost page automatically in browser
3. Run `npm run build` - to bundle project for production and create dist folder for deployment
4. Run `npm t` - to test project using jest
5. Run `npm run cypress` - to run e2e tests using cypress

## Methods followed for Project

1. Testing - e2e, integrations, route testing was completed at a basic level to ensure rudimentary testing of project. Used Husky to test automatically pre-commit and pre-push
2. Agile - Using Github projects and always 'moving forward' in an agile manner. Any fixes were raised as new issues.
3. 

## Basic Requirements for Project

- Load and display the _todo_ items `title` from http://localhost:4000/api/todos ordering them on their ID in descending order
- Display the total number of _todo_ items
- Display the completed number of _todo_ items
- Add styling

## Technologies Used

- Husky
- React
- Redux
- Redux DevTools
- Cypress
- Jest
- Supertest
- React Testing Library
- Styled Components
- Webpack
- Babel

## Future Goals

- Deploy on Heroku
- Connect completed tasks component to update automatically when component
- Build more in depth tests to test API responses and react components
- Add more features such as authentication so that users can create their own to-do lists
- See Github project for other issues in the pipeline.
