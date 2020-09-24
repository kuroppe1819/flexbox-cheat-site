import clsx from 'clsx';
import { FlexboxPropertyStyle } from '../../data/flexboxProperties';
import { ChildElementType } from './../../components/FlexboxListItem';

const classNames = {
    PARENT: 'parent',
    CHILD: 'child',
    CHILD_FEATURED: 'child-featured',
    FIRST_CHILD: 'first-child',
    LAST_CHILD: 'last-child',
} as const;

export const convertObjectToCssNotation = (styleObj: { [key: string]: string }, prefix = '') => {
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
    css += parent ? constructCssBySelector(`.${classNames.PARENT}`, parent) : '';
    css += child ? `\n\n${constructCssBySelector(`.${classNames.CHILD}`, child)}` : '';
    css += childFeatured ? `\n\n${constructCssBySelector(`.${classNames.CHILD_FEATURED}`, childFeatured)}` : '';
    css += firstChild ? `\n\n${constructCssBySelector(`.${classNames.FIRST_CHILD}`, firstChild)}` : '';
    css += lastChild ? `\n\n${constructCssBySelector(`.${classNames.LAST_CHILD}`, lastChild)}` : '';
    return css;
};

const constructChildElement = (classNames: string, number: number, prefix = '') =>
    `${prefix}<div class="${classNames}">${number}</div>\n`;

const constructChildElements = (numberOfElement: number, style: FlexboxPropertyStyle) => {
    const { childFeatured, firstChild, lastChild } = style;
    const childElementType = new ChildElementType(numberOfElement);

    let html = '';
    for (let i = 0; i < numberOfElement; i++) {
        html += constructChildElement(
            clsx(
                classNames.CHILD,
                childElementType.isChildFeatured(i) && childFeatured && classNames.CHILD_FEATURED,
                childElementType.isFirstChild(i) && firstChild && classNames.FIRST_CHILD,
                childElementType.isLastChild(i) && lastChild && classNames.LAST_CHILD
            ),
            i + 1,
            '  '
        );
    }
    return html;
};

export const constructHtml = (numberOfElement: number, style: FlexboxPropertyStyle) =>
    `<div class="${classNames.PARENT}">\n${constructChildElements(numberOfElement, style)}</div>`;
