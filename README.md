# Projeto Croct-Avatar

[Link Netlify](https://croct.netlify.app/)

Create with:

- React
- StyledComponents
- Node-sass
- Cypress
- Eslint-plugin
- Eslint-plugin-cypress
- Cypress-file-upload

Start project (after clone repository):

```
yarn install
yarn start
```

Functions:

- Load image (jpg, png and svg) until 50kb and alert if invalid file.

- Allow image border editing via an Input Range

- Save the image with the configuration, display it on the home screen and allow loading a new one

Start Tests (Cypress):

```
yarn test:component
yarn test:e2e
```

To use e2e it is necessary to start the application before.
