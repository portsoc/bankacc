# Classes and Objects in JS

## Bank Account

The classic BankAccount example converted from Java to JavaScript.

The key files are:

* `bankacc.mjs` within which is defined a `BankAcc` class.

* `main.js` which creates an instance of the `BankAcc` class, and exercises it a little, reporting in its state after each mutation.

### Install

Either:

* download and uncompress [this zip file](https://github.com/portsoc/bankacc/archive/master.zip), _or (preferably)_...
* clone the repo using git as follows:

```bash
git clone https://github.com/portsoc/bankacc.git
```

### Run

Change to the `bankacc` folder, and run the `test` script:

```bash
cd bankacc
npm test
```

### Live

A browser client has also been created that imports and uses the `BankAcc` class.  This can be seen [live here](https://portsoc.github.io/bankacc/) or run locally - how to do that is left as an exercise for the reader - you'll need to run a local server.

### Notes

* This example uses ES6 modules.
  * The big advantage of ES6 modules this is that the same class definition file can be used on server side (e.g. nodejs) or client side in any browser.
  * ES6 modules are standards in node v13.  In v12 it was necessary to enable their use with `--experimental-modules`.
  * The `mjs` file extension is a relatively recent approach to file naming used to make clear the importable modular nature of the code therein.
* This example uses [Private Fields](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Class_fields#Private_instance_fields) which are currently supporte in NodeJS, and the Chrome & Edge browsers, but are [yet be supported](https://caniuse.com/#feat=mdn-javascript_classes_private_class_fields) by Firefox or Safari.
