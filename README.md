# How to Start Project

## Development

- run `npm install` or `npm install --force` to install packages
- run `npm start` to start development server on PORT 3000

## Folder Structure Explanation

#### api/

- For API queries use `useSWR` for Fetching and reference `POST` requests using the example query

#### assets/

- Put images, icons, fonts etc. on this folder.

#### components/

- Put UI components here that are going to be used on multiple components through out the application.

##### layout/

- Located inside the components folder. This folder houses Layout specific components

#### containers/

- Put UI components here for page specific components. Examples are shown inside the folder.

#### context/

- For Context API

#### lib/

- For `axios` and `SWR` configuration

#### pages/

- Pages of the application
