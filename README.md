<p align="right">
  <a href="https://www.npmjs.com/package/angularjs-flagkit-directive">
    <img src="https://img.shields.io/npm/v/angularjs-flagkit-directive.svg" alt="version" />
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/npm/l/angularjs-flagkit-directive.svg" alt="license" />
  </a>
</p>

<h1 align="center">angularjs-flagkit-directive</h1>

<h5 align="center">An AngularJS directive for [FlagKit](https://github.com/madebybowtie/FlagKit)</h5>

<h2 align="center">Installation</h2>

NPM
```shell
npm install angularjs-flagkit-directive --save
```

<h2 align="center">Get Started</h2>

Include the files in your `index.html`:
```html
<script src="angularjs-flagkit-directive.min.js"></script>
```

Add `flagkit-directive` module in your AngularJS project:
```javascript
var app = angular.module('YourProject', ['flagkit-directive']);
```

<h2 align="center">Usage</h2>

```html
<flag fkCountry="US"></flag>
```
or
```html
<div fkCountry="US"></div>
```

<h2 align="center">Developing</h2>

Install dependencies, build the source files and preview

```shell
git clone https://github.com/Naimikan/angularjs-flagkit-directive.git
npm install
grunt & grunt preview
```

<h2 align="center">Reference</h2>
The list of available flags you can find in [FlagKit](https://github.com/madebybowtie/FlagKit#reference) repo.

<h2 align="center">Thanks</h2>

[FlagKit](https://github.com/madebybowtie/FlagKit) for awesome collection of flag icons.
