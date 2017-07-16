# Form Loader

In this app User can create card with 'name' and 'email' fields. Card can be created with the help of 'Form loader' component. User can click on 'Edit button' in card and edit card's fileds in a 'Form loader', after that he can save this card with new inputs data. User can delete selected card. 'Name' field has validation: only letters, 'Email' field has email validation rule. When validation fails User can't click the 'Save' or 'Edit' button in 'Form loader'. User can type in a search input card name and all appropriate cards will be displayed with this search term name. User can switch between English and German languages. Only simple styles were applied in this application. Main components were divided by feature modules.

Run application:
```
1. npm install -g @angular/cli
2. Clone project (git clone https://github.com/Rostyy/formLoader.git)
3. cd formLoader
4. npm install
5. ng serve ---> Navigate to `http://localhost:4200/` (by default)
```
(was developed in Node -v 6.0.0)

Tech-stack:

* @angular/cli @latest
* angular @latest
* ngx-translate
* @angular/material

Task description:
1. Click create button to open the right side drawer
2. Doing this, items on the left side are either pushed in responsive manner with a wrapping column or the drawer may as well open over the page
3. Load the create component into the form loader directive that is existing in the right side drawer
4. Validate form inputs
5. Create item and make item appear in the items grid
6. Clicking create button successfully is supposed to automatically close the drawer
7. Click edit button on an item
8. Drawer opens and edit component is loaded into form loader directive
9. Click edit button on a section in the edit view and enable editable fields
10. Edit an item and save to disable edit mode of the section
11. Corresponding item is updated in the grid on the left side
12. Done button closes the drawer


## From Angular documentation:

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
