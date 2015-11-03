# skeleton2

## What is it

Use this as a scaffold to quickly stand up new front end projects. Can be used for either traditional multi-page, static output type projects or your latest greatest single page application. Looking for the [original skeleton](https://github.com/navigationarts/skeleton)?

## Changes from v1:

- Angular is the default js library (no jQuery).
- Build process now done with gulp. Codekit is gone.
- Updated project structure with conventions application development common/best practices.
- Dev environment setup changes
- Using Bower when possible for external libraries/plugins/modules

## Project Structure


        |-- Project Name    
            |-- .gitignore
            |-- .gitmodules
            |-- README.md
            |-- package.json
            |-- client
                |-- Gulpfile.js
                |-- package.json
                |-- build
                |-- node_modules
                |-- src
                    |-- bower_components
                    |-- components
                        |-- form-some-form
                            |-- _default.jade
                            |-- controller.js
                            |-- style.jade
                    |-- data
                        |-- fake-data-for-testing.jade            
                    |-- js
                        |-- app.js
                        |-- directives.js
                        |-- main.js
                        |-- services.js
                        |-- lib
                    |-- media
                        |-- audio
                        |-- icons
                        |-- images
                        |-- video
                    |-- scss
                        |-- base.scss
                        |-- forms.scss
                        |-- layout.scss
                        |-- reset.scss
                        |-- style.scss
                        |-- typography.scss
                        |-- utility.scss
                        |-- lib
                    |-- templates
                        |-- blocks
                            |-- head.jade
                            |-- scripts
                        |-- layouts
                            |-- layout-main.jade
                        |-- pages
                            |-- 404
                                |-- 404.jade
                                |-- controller.js
                                |-- route.js
                            |-- detail-article
                                |-- detail-article.jade
                                |-- ...
                |-- tests


## Getting Started
- update package.json and gulpfulie.js for desired project build dependancies
- update bower.json with external library dependancies
- Open terminal and navigate to client > src >
- npm install
- bower install
- you should be able to hit your site at localhost:8080 or set up your hosts file to point to the new project with the alias you choose


