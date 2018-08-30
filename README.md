# Description
NVal-Tippy is a wrapper for [NVal](https://github.com/NickMaev/NVal) and [Tippy.js](https://github.com/atomiks/tippyjs) plugins that allows you to display validation errors in tooltips.

# Usage

## Install
`npm install nval-tippy`

## Prepare
Import:
```typescript
import {NValTippy} from "nval-tippy";
```
or use scripts tag:
```html
<script src="nval.min.js"></script>
<script src="https://unpkg.com/tippy.js/dist/tippy.all.min.js"></script>
<script src="nval-tippy.min.js"></script>
```
Then:
(TypeScript)
```typescript
var nval = new NValTippy(document.getElementById("myForm"));
```
(JavaScript, using scripts tag)
```javascript
var nval = new NValTippy.NValTippy(document.getElementById("myForm"));
```

## Run check

```typescript
nval.isValid() // Returns boolean.
```