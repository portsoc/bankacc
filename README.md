# Classes and Objects in JS

## Bank Account

The classic BankAccount example converted from Java to JavaScript.

### Install

Either download and uncompress [this zip file](https://github.com/portsoc/bankacc/archive/master.zip), or (preferably) clone the repo using git as follows:

```bash
git clone https://github.com/portsoc/bankacc.git
```

### Run

Change to the `bankacc` folder, and run the `test` script:

```bash
cd bankacc
npm test
```

### Notes

* This example uses ES6 modules.
  * The big advantage of ES6 modules this is that the same class definition file can be used on server side (e.g. nodejs) or client side in any browser.
  * ES6 modules are standards in node v13.  In v12 it was necessary to enable their use with `--experimental-modules`.
* This example uses [Private Fields](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Class_fields#Private_instance_fields) which are [yet be supported](https://caniuse.com/#feat=mdn-javascript_classes_private_class_fields) in Firefox and Safari.