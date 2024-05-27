// @ts-check

import random from '@chriscodesthings/random-in-range';
import isDark from '@chriscodesthings/rgb-color-is-dark';
import * as Types from "@chriscodesthings/basic-color-types";

/**
 * Picks a random colour in RGB format
 * @param {boolean} tone (optional) if true generates a dark colour, if false generates a light colour
 * @returns {Types.rgbColor}
 */
export default function randomRGBColor(tone) {
    /** @type {Types.rgbColor} */
    let col = [random(255), random(255), random(255)];

    if (typeof tone === 'boolean') {
        while (isDark(col) != tone) {
            col = [random(255), random(255), random(255)];
        }
    }

    return col;
}
