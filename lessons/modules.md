# Modules

ES6 modules allow you to treat scripts as modular components that can be fit together like puzzle pieces. This replicates as a native feature what libraries such as [RequireJS](http://requirejs.org/) have been doing for a few years now: Asynchronous loading and execution of JavaScript files.

This site uses modules to import a simple Ajax library. (I didn’t need to do it this way, but I wanted to demonstrate a working example of modules.)

From the `<head>` element in `index.html`:

    <script defer type="module" src="assets/js/ajax.js"></script>
    <script defer type="module" src="assets/js/behaviors.js"></script>

**Note:** The `type="module"` attribute is required on both the exported and importing script tags.

From `ajax.js`:

    // ajax in 120 characters from https://gist.github.com/segdeha/5601610
    function a(u,c){…}

    // insta-module, voilá
    export { a }

From `behaviors.js`:

    import { a as ajax } from './ajax.js'

The above is a pretty simple example. There are a ton of variations including default and wildcard values, exporting multiple functions, importing only certain methods from the module, etc. You can read all about the many cool and clever ways to use modules in [ES6 In Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/).
