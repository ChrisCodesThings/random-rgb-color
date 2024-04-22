# random-rgb-color <br> [![Test workflow status](https://github.com/ChrisCodesThings/random-rgb-color/actions/workflows/test.yml/badge.svg)](../../actions/workflows/test.yml) [![NPM Version](https://img.shields.io/npm/v/@chriscodesthings/random-rgb-color)](https://www.npmjs.com/package/@chriscodesthings/random-rgb-color) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

> **Generates a random color in RGB format**

## Description

Generates a random color in RGB format and returned as an array.

### See...
- [Install/Usage](#install "Install and Usage")
- [Syntax](#syntax "Syntax")
- [Examples](#examples "Examples")
- [See Also](#see-also "See Also")

---

## Install

```sh
npm install --save @chriscodesthings/random-rgb-color
```

## Usage

```js
import randomRGBColor from '@chriscodesthings/random-rgb-color';

console.log(randomRGBColor());
// => [78, 143, 28]
```

## Syntax

```js
randomRGBColor((tone));
```

### Parameters

- *tone* (optional): If true, colour is dark, if false, colour is light, based on YIQ calculation. 

### Return Value

Returns an array containing red, green and blue values from 0 to 255.

## Examples

```js
// random colour that should look ok with black text
function pickBackgroundColour() {
    return randomRGBColor(false);
} 
```

## See Also...

- [**random-css-hex-color**: Generates a random color in CSS hex format](https://github.com/ChrisCodesThings/random-css-hex-color "Generates a random color in CSS hex format")
- [**color-object**: Simple, lightweight class to store and manipulate a color, and convert between formats](https://github.com/ChrisCodesThings/color-object "Simple, lightweight class to store and manipulate a color, and convert between formats")
- [**random-in-range**: Picks a random number within a given range](https://github.com/ChrisCodesThings/random-in-range "Picks a random number within a given range")
- [**Calculating Color Contrast**](https://24ways.org/2010/calculating-color-contrast/ "Calculating Color Contrast")
