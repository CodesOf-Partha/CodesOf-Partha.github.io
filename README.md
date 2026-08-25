# Parthasarathi RV — Portfolio

[![Linkedin Badge](https://img.shields.io/badge/-iampartha-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/iampartha/)](https://www.linkedin.com/in/iampartha/) [![Twitter Badge](https://img.shields.io/badge/-@RvParthasarathi-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/RvParthasarathi)](https://twitter.com/RvParthasarathi) [![Gmail Badge](https://img.shields.io/badge/-rvparthasarathi@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:rvparthasarathi@gmail.com)](mailto:rvparthasarathi@gmail.com)

Source for **[codesof-partha.github.io](https://codesof-partha.github.io)** — a single-page portfolio for Parthasarathi RV, Senior Software Engineer (SDE-IV) specializing in full-stack and applied Generative AI engineering.

## Stack

- React 16 + Create React App (`react-scripts`)
- Plain CSS with custom properties (no CSS framework, no preprocessor)
- Deployed to GitHub Pages via `gh-pages`

## Content as data

All résumé content — summary, skills, experience, projects, education, certifications, and contact links — lives in one file: [`src/data/profile.js`](./src/data/profile.js). To update the site (new role, new project, new skill), edit that file; every section reads from it. No component changes needed for content updates.

The page itself is composed from small, single-purpose sections under [`src/Component/Home/Sections`](./src/Component/Home/Sections): `Nav`, `Hero`, `About`, `Skills`, `Experience`, `Projects`, `Education`, `Contact`, `Footer`.

## Run locally

```
yarn install
yarn start
```

## Deploy

```
yarn install
yarn deploy   # builds and publishes ./build to the gh-pages branch
```

## Updating the résumé / photo

- Résumé PDF: replace `public/resume/Parthasarathi_RV.pdf` (keep the filename, or update `resume` in `src/data/profile.js`).
- Profile photo: replace `public/images/profile.jpg`.
