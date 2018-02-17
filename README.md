angular recruitment test
=========

This test is about to estimate your experience in develop Apps with Angular. 

See what you can do in the available time. You can choose any of the following requirements.
If the time is over please zip your code and send it to norman@dynabase.de.
The timestamp of the email is important.

# Requirements

* Code quality is more important than quantity.
* UI design is not of interest. It can be ugly.
* Stick to [angular styleguide](https://angular.io/guide/styleguide).

## Page layout
* The app's layout consists of 3 parts.
  * header with title "beer" always stays and gets not re-renderes when the user navigates.
  * main with the html representing the current url.
  * (optional) right side-bar which contains the favorite list. 

## List view

* Starting the app leads to a list page with url "/".
* User sees a list of all available [beers](https://api.punkapi.com/v2/beers).
* The list contains the columns: name, first_brewed and abv.
* The first row is the list header with the titles Names, First brewed and abv.

## Sort the list

* The list is initialy sorted by name ASC .
* Clicking the title "Name" lets the list be sorted by name ASC or DESC.
* Clicking the title "First brewed" lets the list be sorted ASC or DESC.
* Clicking the title "abv" lets the list be sorted asc or DESC.

## Filter the list

* An ingredients filter allows to filter the list.
* A select box with all available ingredients is displayed. 
* The select box should be implemented using [ng material](https://material.angular.io/components/select)
* Whenever the user chooses an ingredient, all beers having that ingredient are highlighted in some easy way (i.e. bold name)

## Details view

* Clicking on a row in the list leads to a detail page with url "detail/{id}".
* Some few more details of the beer is displayed (the design is not important): name, description, ingredients, tagline, image_url.
* A back button provides navigation to the list view.

## Favorite List

* On the right of the screen is a sticky favorite list.
* A button on the details view adds/removes a beer to/from the favorite list.
* The favorite list gets stored so that a page reload will not prune it.

## Store/Load favorite list

* A button allows to store the favorite list on the local computer in json format
* A button allows to parse a stored favorite list from the local computer and replaces an existing one.

## Sugar

This sugar is optional when there is time left and you have implemented all requirements.

* Add some specs in a reasonable way
* Make your app AoT-compatible
* Enable tree-shaking
* Enable ssr (universal)
* Make your app offline-compatible by using a service worker (at least for chrome browser)