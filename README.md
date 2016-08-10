# skeleton2

## What is it

Scaffold to quickly stand up new front end projects. Can be used for either traditional multi-page, static output type projects or your latest greatest single page application.

## Project Structure

```
├── README.md
├── client
│   └── src
│       ├── Gulpfile.js
│       ├── bower.json
│       ├── components
│       │   ├── footer-main
│       │   │   ├── _default.jade
│       │   │   └── style.scss
│       │   └── form-contact
│       │       ├── _default.jade
│       │       ├── controller.js
│       │       └── style.scss
│       ├── data
│       │   └── README.md
│       ├── js
│       │   ├── app.js
│       │   ├── directives.js
│       │   ├── lib
│       │   │   └── readme.md
│       │   ├── main.js
│       │   └── services.js
│       ├── media
│       │   ├── audio
│       │   ├── favicon.ico
│       │   ├── images
│       │   └── video
│       ├── package.json
│       ├── scss
│       │   ├── base.scss
│       │   ├── forms.scss
│       │   ├── layout.scss
│       │   ├── reset.scss
│       │   ├── style.scss
│       │   ├── temp.scss
│       │   ├── typography.scss
│       │   ├── utility.scss
│       │   └── variables.scss
│       └── templates
│           ├── blocks
│           │   ├── README.md
│           │   ├── head.jade
│           │   └── scripts.jade
│           ├── index.jade
│           ├── layouts
│           │   └── layout.jade
│           ├── pages
│           │   └── 404
│           │       ├── 404.jade
│           │       ├── controller.js
│           │       └── route.js
│           └── robots.txt
```
        
## Getting Started

- update package.json and gulpfulie.js for desired project build dependancies

- update bower.json with external library dependancies

- Open terminal and navigate to client > src >

```
npm install -g npm 
npm install -g bower
npm install
bower install
```





