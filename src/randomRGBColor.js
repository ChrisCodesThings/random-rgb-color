// @ts-check

import random from '@chriscodesthings/random-in-range';
import isDark from '@chriscodesthings/rgb-color-is-dark';

/**
 * Picks a random colour in RGB format
 * @param {boolean} tone (optional) if true generates a dark colour, if false generates a light colour
 * @returns {[number, number, number]}
 */
export default function randomRGBColor(tone) {
    /** @type {[number, number, number]} */
    let col = [random(255), random(255), random(255)];

    if (typeof tone === 'boolean') {
        while (isDark(col) != tone) {
            col = [random(255), random(255), random(255)];
        }
    }

    return col;
}
