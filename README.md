# Project Website Template

[![Project Template Website](https://img.shields.io/github/package-json/v/x28project/project-website-template)](https://github.com/x28project/project-website-template)
[![Project Template Submodule](https://img.shields.io/github/package-json/v/x28project/project-website-submodule?label=project-website-submodule)](https://github.com/x28project/project-website-submodule)
[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E)](https://www.cypress.io/)
[![license](https://img.shields.io/github/license/x28project/project-website-template)](LICENSE)

A template for automatically generating static "project" websites that showcase media (e.g. albums, games, videos, etc.) in an attractive, yet simple, light-weight, responsive, mobile-friendly way.

## Live Example

http://www.x28project.com

---

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
  1. [Add HTML data](#1-add-html-data)
  2. [Add project data](#2-add-project-data)
  3. [Add favicon and other related images](#3-add-favicon-and-other-related-images)
- [Generate website](#generate-website)
- [Serve locally with http-server](#serve-locally-with-http-server)
- [Test with Cypress](#test-with-cypress)
- [Copyright](#copyright)
- [License](#license)

---

## Installation

1. Use or fork this template.

2. To install the required dependencies, run: <br />

```
npm install
```

_Note: There is a postinstall routine that will initialize and update the [Project Website Submodule](https://github.com/x28project/project-website-submodule)._

---

## Configuration

### 1. Add HTML data

Modify the [webpack.config.html.js](webpack.config.html.js) file with data specific to the desired website. For example:

- Title
- Meta data
- Logo
- Tagline
- Links
- Copyright

### 2. Add project data

Modify the [webpack.config.projects.js](webpack.config.projects.js) file with project specific data. For example:

- Album
  - Title
  - Cover Artwork
  - Tracks
  - Embedded SoundCloud Player
  - Year
- Game
  - Title
  - Links
    - Play Online
    - Download
  - Year
- Video
  - Title
  - Embedded YouTube Video
  - Year

### 3. Add favicon and other related images

- [images/android-chrome-192x192.png](images/android-chrome-192x192.png)
- [images/android-chrome-512x512.png](images/android-chrome-512x512.png)
- [images/apple-touch-icon.png](images/apple-touch-icon.png)
- [images/favicon.ico](images/favicon.ico)
- [images/favicon.svg](images/favicon.svg)
- [images/logo.png](images/logo.png)

_Note: The viewable area of each template image is marked in gray or black._

---

## Generate website

To generate the full website from the modified [configuration](#configuration), run:

```
npm run build
```

_Note: All website files will be output into the [dist/](dist/) directory._

List of CDN dependencies:

- [MUI](https://www.muicss.com/)

---

## Serve locally with [http-server](https://www.npmjs.com/package/http-server)

1. To install [http-server](https://www.npmjs.com/package/http-server) globally, run:

```
npm install --global http-server
```

2. To start the server, open a new terminal to this repo and run:

```
npm run server
```

3. To view the website, open: https://localhost:8080

---

## Test with [Cypress](https://www.cypress.io)

To test the website, first [serve locally with http-server](#serve-locally-with-http-server), then run:

```
npm run test
```

---

## Copyright

Copyright (c) 2021 X28 Project

---

## License

[MIT](LICENSE)
