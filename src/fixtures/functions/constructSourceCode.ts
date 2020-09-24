import { FlexboxPropertyStyle } from '../../data/flexboxProperties';

export const convertObjectToCssNotation = (styleObj: { [key: string]: string }, propertyPrefix?: string) => {
    const prefix = propertyPrefix === undefined ? '' : propertyPrefix;

    let cssNotation = '';
    Object.entries<string>(styleObj).forEach(([key, value]) => {
        cssNotation += `${prefix}${key}: ${value};\n`;
    });
    return cssNotation;
};

const constructCssBySelector = (selector: string, styleObj: { [key: string]: string }) =>
    `${selector} {\n${convertObjectToCssNotation(styleObj, '  ')}}`;

export const constructCss = (style: FlexboxPropertyStyle) => {
    const { parent, child, childFeatured, firstChild, lastChild } = style;
    let css = '';
    css += parent ? constructCssBySelector('.parent', parent) : '';
    css += child ? `\n\n${constructCssBySelector('.child', child)}` : '';
    css += childFeatured ? `\n\n${constructCssBySelector('.child-featured', childFeatured)}` : '';
    css += firstChild ? `\n\n${constructCssBySelector('.first-child', firstChild)}` : '';
    css += lastChild ? `\n\n${constructCssBySelector('.last-child', lastChild)}` : '';
    return css;
};
