[![npm version](https://img.shields.io/npm/v/nval-tippy.svg?style=flat-square)](https://www.npmjs.com/package/nval-tippy)
[![npm downloads](https://img.shields.io/npm/dm/nval-tippy.svg?style=flat-square)](https://www.npmjs.com/package/nval-tippy)

# Description
**NVal-Tippy** is a wrapper for [NVal](https://github.com/NickMaev/NVal) and [Tippy.js](https://github.com/atomiks/tippyjs) plugins that allows you to display validation errors in tooltips.

# Installation
#### NPM
```console
npm install nval-tippy
```
#### CDN
```html
<script src="https://unpkg.com/nval@1.1.5/dist/browser/nval.min.js"></script>
<script src="https://unpkg.com/popper.js@1"></script>
<script src="https://unpkg.com/tippy.js@4"></script>
<script src="https://unpkg.com/nval-tippy@1.0.38/dist/browser/nval-tippy.min.js"></script>
```

# Usage

## Declare

#### NPM version
###### Import:
```typescript
import { NValTippy } from "nval-tippy";
```
###### Then:
```typescript
// Pass the form element as an argument.
var validator = new NValTippy(document.getElementById("myForm"));
```

---------------

#### CDN version
```javascript
// Pass the form element as an argument.
var validator = new NValTippy.NValTippy(document.getElementById("myForm"));
```

## Run
```typescript
validator.isValid(); // Returns boolean.
```

# Configuration
## Validation
NValTippy object extends [NVal](https://github.com/NickMaev/NVal). To configure validation use the official documentation for it.
## Tooltips
Tooltip options are available by the public property `tippyOptions`.
To configure tooltips use the official documentation for [Tippy.js](https://github.com/atomiks/tippyjs).