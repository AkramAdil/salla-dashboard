# Interflow Task

## Table of Contents
- [Introduction](#introduction)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Localization](#localization)

## Introduction
This project is a web application built with Next and TaillwindCSS.

## Project Structure
The project structure is as follows:
```
interflow-task/
├── src/
│   ├── components/
│   ├── libs/
│   │   ├── constants.js
│   ├── locales/
│   │   ├── ar.js
│   │   ├── en.js
│   ├── App.js
│   ├── index.js
├── public/
├── package.json
├── README.md
```

- `src/components/`: Contains React components used in the project.
- `src/libs/constants.js`: Contains constants used throughout the project, including sidebar items and menu options.
- `src/locales/`: Contains localization files for different languages.
- `src/App.js`: Main application component.
- `src/index.js`: Entry point of the application.

## Installation
To install the project dependencies, run the following command:
```bash
npm install
```

## Running the Project
To start the development server, run the following command:
```bash
npm start
```
This will start the application on `http://localhost:3000`.

## Localization
Localization is handled using the `locales` directory. Each language has its own file (e.g., `ar.js` for Arabic, `en.js` for English).

### Adding a New Locale
1. Create a new file in the `src/locales/` directory with the language code.
2. Customize the `next.config.js` add the new language to `locales` array
3. Add the translations for the new language in the new file.
4. Import the new locale in the necessary components or files.

### Using Locales
To use the localized strings in your components, import the locale file and access the desired string. For example:
```javascript
import locales from '../locales/en';

const title = locales.home; // Access the localized string for 'home'
```

## License
This project is licensed under the MIT License.
