# Products comparator

* [Live demo](#live-demo)
* [Install](#how-to-run)
* [Tests](#tests)
* [Libraries](#libraries)
* [Exercise](#exercise)
* [Extra points](#extra-points)
* [More Extra points](#more-extra-points)
* [Structure](#structure)
* [Components](#components)
* [Store](#store)

## Live demo
[click me](https://faouzioudouh.github.io/products-comparator/)

## How to run

Clone the repository
```
$ git clone https://github.com/faouzioudouh/products-comparator.git
```

Install dependencies
```
$ yarn
```

Start development server
```
$ yarn start
```

Production build
```
$ yarn build
```

## Tests
Tests coverage is **100%**, you can find all the tests whithin the `./tests` folder.
I used `Jest` and `Enzymer`.

- To run the tests:
```
$ yarn test
```

## Libraries
- **React** for the UI
- **Redux** for the state managment
- **Lodash** as _Helper_

## Exercise
All the required points are there ;).

- [x]   Show and hide products
- [x]   Highlight differences between product features
- [x]   Features should be in alphabetical order by feature name
- [x]   Badges should be placed before features

## Extra points
I've done all the extra points and more.. :p

- [x]   Webpack
- [x]   Sass/Less
- [x]   Any CSS methodology (BEM)
- [x]   Responsiveness (100%)
- [x]   Browser backward compatibility (IE11)
- [x]   Delivery the exercise with a readme file that explains what you have done and how to run your project.

## More Extra points

- [x]   Unit tests (100% coverage)
- [x]   Handling Network errors (ErrorMessage).. there is a funny gif here :D
- [x]   Loading indicator.. there is a funny gif here also :D
- [x]   Preload/prefetch resources such as Gifs..
- [x]   DNS prefetch the API domain..
- [x]   You can configue the app from on file `src/config`.. you can change the products and the API Endpoints..

# Components
To have an idea of how I composed the components
# ![Component](https://image.ibb.co/g7HFzo/componenets.png)

# Structure
Within each component folder you'll find three fils:

- `Componenet.js` stateless component (functional component)
- `ComponenetContainer.js` Where the managing state/ connection to store.. logic belongs.
- `Componenet.scss` Style
- `index.js` just to keep the path/to/component as small as possible

# Conception
I've tried to create DUMP components so we can reuse them in other contexts.
So for Example the Component `Comparator` accepts products, productsToCompare, renderCompareValue function.

- products: All the product
- productsToCompare: Products to compare
- renderCompareValue: This function is responsible on rendering the feature value so if not provided we just render the feature as it is.

The idea here is that our `Comparator` knows nothing about the exceptional `badges` line, because we managed this from the outside, we our component can be used with other form of data!

`Zamro` which is the Root component is responsable on fetching the data and provide it to all the children,

# Store
I tried to keep the state object as plain/ flat as possible, because we might want to store it somewhere in the near future
and also I tries not to store duplicated data, for example for the comparator product I tried only to store the `sku` for the products, because we have already the products objects in our state.
