import { theme } from '../fixtures/theme';

export type FlexboxPropertyStyle = {
    parent: { [key: string]: string } | null;
    child: { [key: string]: string } | null;
    childFeatured: { [key: string]: string } | null;
    firstChild: { [key: string]: string } | null;
    lastChild: { [key: string]: string } | null;
};

export type FlexboxPropertyInfo = {
    value: string;
    numberOfNumberBlock: number;
    style: FlexboxPropertyStyle;
};

export type FlexboxProperty = {
    name: string;
    hasReference: boolean;
    infoList: FlexboxPropertyInfo[];
};

export const flexboxProperties: FlexboxProperty[] = [
    {
        name: 'display',
        hasReference: true,
        infoList: [
            {
                value: 'flex',
                numberOfNumberBlock: 4,
                style: {
                    parent: { display: 'flex' },
                    child: null,
                    childFeatured: null,
                    firstChild: null,
                    lastChild: null,
                },
            },
            {
                value: 'inline-flex',
                numberOfNumberBlock: 4,
                style: {
                    parent: { display: 'inline-flex' },
                    child: null,
                    childFeatured: null,
                    firstChild: null,
                    lastChild: null,
                },
            },
        ],
    },
    {
        name: 'flex-direction',
        hasReference: true,
        infoList: [
            {
                value: 'row',
                numberOfNumberBlock: 4,
                style: {
                    parent: { display: 'flex', 'flex-direction': 'row', height: '100%' },
                    child: null,
                    childFeatured: null,
                    firstChild: null,
                    lastChild: null,
                },
            },
            {
                value: 'row-reverse',
                numberOfNumberBlock: 4,
                style: {
                    parent: { display: 'flex', 'flex-direction': 'row-reverse', height: '100%' },
                    child: null,
                    childFeatured: null,
                    firstChild: null,
                    lastChild: null,
                },
            },
            {
                value: 'column',
                numberOfNumberBlock: 4,
                style: {
                    parent: { display: 'flex', 'flex-direction': 'column', height: '100%' },
                    child: null,
                    childFeatured: null,
                    firstChild: null,
                    lastChild: null,
                },
            },
            {
                value: 'column-reverse',
                numberOfNumberBlock: 4,
                style: {
                    parent: { display: 'flex', 'flex-direction': 'column-reverse', height: '100%' },
                    child: null,
                    childFeatured: null,
                    firstChild: null,
                    lastChild: null,
                },
            },
        ],
    },
    {
        name: 'flex-wrap',
        hasReference: true,
        infoList: [
            {
                value: 'nowrap',
                numberOfNumberBlock: 4,
                style: {
                    parent: { display: 'flex', 'align-items': 'flex-start', 'flex-wrap': 'nowrap', height: '100%' },
                    child: { width: '40%' },
                    childFeatured: null,
                    firstChild: null,
                    lastChild: null,
                },
            },
            {
                value: 'wrap',
                numberOfNumberBlock: 4,
                style: {
                    parent: { display: 'flex', 'align-items': 'flex-start', 'flex-wrap': 'wrap', height: '100%' },
                    child: { width: '40%' },
                    childFeatured: null,
                    firstChild: null,
                    lastChild: null,
                },
            },
            {
                value: 'wrap-reverse',
                numberOfNumberBlock: 4,
                style: {
                    parent: {
                        display: 'flex',
                        'align-items': 'flex-start',
                        'flex-wrap': 'wrap-reverse',
                        height: '100%',
                    },
                    child: { width: '40%' },
                    childFeatured: null,
                    firstChild: null,
                    lastChild: null,
                },
            },
        ],
    },
    {
        name: 'justify-content',
        hasReference: true,
        infoList: [
            {
                value: 'flex-start',
                numberOfNumberBlock: 4,
                style: {
                    parent: { display: 'flex', 'justify-content': 'flex-start' },
                    child: null,
                    childFeatured: null,
                    firstChild: null,
                    lastChild: null,
                },
            },
            {
                value: 'flex-end',
                numberOfNumberBlock: 4,
                style: {
                    parent: { display: 'flex', 'justify-content': 'flex-end' },
                    child: null,
                    childFeatured: null,
                    firstChild: null,
                    lastChild: null,
                },
            },
            {
                value: 'center',
                numberOfNumberBlock: 4,
                style: {
                    parent: { display: 'flex', 'justify-content': 'center' },
                    child: null,
                    childFeatured: null,
                    firstChild: null,
                    lastChild: null,
                },
            },
            {
                value: 'space-between',
                numberOfNumberBlock: 4,
                style: {
                    parent: { display: 'flex', 'justify-content': 'space-between' },
                    child: null,
                    childFeatured: null,
                    firstChild: null,
                    lastChild: null,
                },
            },
            {
                value: 'space-around',
                numberOfNumberBlock: 4,
                style: {
                    parent: { display: 'flex', 'justify-content': 'space-around' },
                    child: null,
                    childFeatured: null,
                    firstChild: null,
                    lastChild: null,
                },
            },
            {
                value: 'space-evenly',
                numberOfNumberBlock: 4,
                style: {
                    parent: { display: 'flex', 'justify-content': 'space-evenly' },
                    child: null,
                    childFeatured: null,
                    firstChild: null,
                    lastChild: null,
                },
            },
        ],
    },
    {
        name: 'align-items',
        hasReference: true,
        infoList: [
            {
                value: 'flex-start',
                numberOfNumberBlock: 4,
                style: {
                    parent: { display: 'flex', 'align-items': 'flex-start', height: '100%' },
                    child: null,
                    childFeatured: null,
                    firstChild: null,
                    lastChild: null,
                },
            },
            {
                value: 'flex-end',
                numberOfNumberBlock: 4,
                style: {
                    parent: { display: 'flex', 'align-items': 'flex-end', height: '100%' },
                    child: null,
                    childFeatured: null,
                    firstChild: null,
                    lastChild: null,
                },
            },
            {
                value: 'center',
                numberOfNumberBlock: 4,
                style: {
                    parent: { display: 'flex', 'align-items': 'center', height: '100%' },
                    child: null,
                    childFeatured: null,
                    firstChild: null,
                    lastChild: null,
                },
            },
            {
                value: 'baseline',
                numberOfNumberBlock: 4,
                style: {
                    parent: { display: 'flex', 'align-items': 'baseline', height: '100%' },
                    child: null,
                    childFeatured: null,
                    firstChild: null,
                    lastChild: null,
                },
            },
            {
                value: 'stretch',
                numberOfNumberBlock: 4,
                style: {
                    parent: { display: 'flex', 'align-items': 'stretch', height: '100%' },
                    child: null,
                    childFeatured: null,
                    firstChild: null,
                    lastChild: null,
                },
            },
        ],
    },
    {
        name: 'align-content',
        hasReference: true,
        infoList: [
            {
                value: 'flex-start',
                numberOfNumberBlock: 4,
                style: {
                    parent: { display: 'flex', 'flex-wrap': 'wrap', 'align-content': 'flex-start', height: '100%' },
                    child: { width: '30%' },
                    childFeatured: null,
                    firstChild: null,
                    lastChild: null,
                },
            },
            {
                value: 'flex-end',
                numberOfNumberBlock: 4,
                style: {
                    parent: { display: 'flex', 'flex-wrap': 'wrap', 'align-content': 'flex-end', height: '100%' },
                    child: { width: '30%' },
                    childFeatured: null,
                    firstChild: null,
                    lastChild: null,
                },
            },
            {
                value: 'center',
                numberOfNumberBlock: 4,
                style: {
                    parent: { display: 'flex', 'flex-wrap': 'wrap', 'align-content': 'center', height: '100%' },
                    child: { width: '30%' },
                    childFeatured: null,
                    firstChild: null,
                    lastChild: null,
                },
            },
            {
                value: 'space-between',
                numberOfNumberBlock: 4,
                style: {
                    parent: { display: 'flex', 'flex-wrap': 'wrap', 'align-content': 'space-between', height: '100%' },
                    child: { width: '30%' },
                    childFeatured: null,
                    firstChild: null,
                    lastChild: null,
                },
            },
            {
                value: 'space-around',
                numberOfNumberBlock: 4,
                style: {
                    parent: { display: 'flex', 'flex-wrap': 'wrap', 'align-content': 'space-around', height: '100%' },
                    child: { width: '30%' },
                    childFeatured: null,
                    firstChild: null,
                    lastChild: null,
                },
            },
            {
                value: 'space-evenly',
                numberOfNumberBlock: 4,
                style: {
                    parent: { display: 'flex', 'flex-wrap': 'wrap', 'align-content': 'space-evenly', height: '100%' },
                    child: { width: '30%' },
                    childFeatured: null,
                    firstChild: null,
                    lastChild: null,
                },
            },
            {
                value: 'stretch',
                numberOfNumberBlock: 4,
                style: {
                    parent: { display: 'flex', 'flex-wrap': 'wrap', 'align-content': 'stretch', height: '100%' },
                    child: { width: '30%' },
                    childFeatured: null,
                    firstChild: null,
                    lastChild: null,
                },
            },
        ],
    },
    {
        name: 'order',
        hasReference: true,
        infoList: [
            {
                value: '-1',
                numberOfNumberBlock: 4,
                style: {
                    parent: { display: 'flex', 'align-items': 'flex-start' },
                    child: null,
                    childFeatured: { order: '-1', 'background-color': theme.color.blue700 },
                    firstChild: null,
                    lastChild: null,
                },
            },
            {
                value: '0',
                numberOfNumberBlock: 4,
                style: {
                    parent: { display: 'flex', 'align-items': 'flex-start' },
                    child: null,
                    childFeatured: { order: '0', 'background-color': theme.color.blue700 },
                    firstChild: null,
                    lastChild: null,
                },
            },
            {
                value: '1',
                numberOfNumberBlock: 4,
                style: {
                    parent: { display: 'flex', 'align-items': 'flex-start' },
                    child: null,
                    childFeatured: { order: '1', 'background-color': theme.color.blue700 },
                    firstChild: null,
                    lastChild: null,
                },
            },
        ],
    },
    {
        name: 'align-self',
        hasReference: true,
        infoList: [
            {
                value: 'flex-start',
                numberOfNumberBlock: 4,
                style: {
                    parent: { display: 'flex', height: '100%' },
                    child: null,
                    childFeatured: { 'align-self': 'flex-start', 'background-color': theme.color.blue700 },
                    firstChild: null,
                    lastChild: null,
                },
            },
            {
                value: 'flex-end',
                numberOfNumberBlock: 4,
                style: {
                    parent: { display: 'flex', height: '100%' },
                    child: null,
                    childFeatured: { 'align-self': 'flex-end', 'background-color': theme.color.blue700 },
                    firstChild: null,
                    lastChild: null,
                },
            },
            {
                value: 'center',
                numberOfNumberBlock: 4,
                style: {
                    parent: { display: 'flex', height: '100%' },
                    child: null,
                    childFeatured: { 'align-self': 'center', 'background-color': theme.color.blue700 },
                    firstChild: null,
                    lastChild: null,
                },
            },
            {
                value: 'baseline',
                numberOfNumberBlock: 4,
                style: {
                    parent: { display: 'flex', height: '100%' },
                    child: null,
                    childFeatured: { 'align-self': 'baseline', 'background-color': theme.color.blue700 },
                    firstChild: null,
                    lastChild: null,
                },
            },
            {
                value: 'stretch',
                numberOfNumberBlock: 4,
                style: {
                    parent: { display: 'flex', height: '100%' },
                    child: null,
                    childFeatured: { 'align-self': 'stretch', 'background-color': theme.color.blue700 },
                    firstChild: null,
                    lastChild: null,
                },
            },
        ],
    },
    {
        name: 'flex-grow',
        hasReference: true,
        infoList: [
            {
                value: '0',
                numberOfNumberBlock: 4,
                style: {
                    parent: { display: 'flex', 'align-items': 'flex-start' },
                    child: null,
                    childFeatured: { 'flex-grow': '0', 'background-color': theme.color.blue700 },
                    firstChild: null,
                    lastChild: null,
                },
            },
            {
                value: '1',
                numberOfNumberBlock: 4,
                style: {
                    parent: { display: 'flex', 'align-items': 'flex-start' },
                    child: null,
                    childFeatured: { 'flex-grow': '1', 'background-color': theme.color.blue700 },
                    firstChild: null,
                    lastChild: null,
                },
            },
        ],
    },
    {
        name: 'flex-shrink',
        hasReference: true,
        infoList: [
            {
                value: '0',
                numberOfNumberBlock: 4,
                style: {
                    parent: { display: 'flex', 'align-items': 'flex-start' },
                    child: { width: '40%' },
                    childFeatured: { 'flex-shrink': '0', 'background-color': theme.color.blue700 },
                    firstChild: null,
                    lastChild: null,
                },
            },
            {
                value: '1',
                numberOfNumberBlock: 4,
                style: {
                    parent: { display: 'flex', 'align-items': 'flex-start' },
                    child: { width: '40%' },
                    childFeatured: { 'flex-shrink': '1', 'background-color': theme.color.blue700 },
                    firstChild: null,
                    lastChild: null,
                },
            },
        ],
    },
    {
        name: 'flex-basis',
        hasReference: true,
        infoList: [
            {
                value: '30%',
                numberOfNumberBlock: 4,
                style: {
                    parent: { display: 'flex', 'flex-wrap': 'wrap' },
                    child: null,
                    childFeatured: { 'flex-basis': '30%', 'background-color': theme.color.blue700 },
                    firstChild: null,
                    lastChild: null,
                },
            },
            {
                value: '50%',
                numberOfNumberBlock: 4,
                style: {
                    parent: { display: 'flex', 'flex-wrap': 'wrap' },
                    child: null,
                    childFeatured: { 'flex-basis': '50%', 'background-color': theme.color.blue700 },
                    firstChild: null,
                    lastChild: null,
                },
            },
            {
                value: 'content',
                numberOfNumberBlock: 4,
                style: {
                    parent: { display: 'flex', 'flex-wrap': 'wrap' },
                    child: null,
                    childFeatured: { 'flex-basis': 'content', 'background-color': theme.color.blue700 },
                    firstChild: null,
                    lastChild: null,
                },
            },
        ],
    },
    {
        name: 'headers',
        hasReference: false,
        infoList: [
            {
                value: 'header1',
                numberOfNumberBlock: 4,
                style: {
                    parent: { display: 'flex' },
                    child: null,
                    childFeatured: null,
                    firstChild: { 'margin-right': 'auto', 'background-color': theme.color.blue700 },
                    lastChild: null,
                },
            },
            {
                value: 'header2',
                numberOfNumberBlock: 4,
                style: {
                    parent: { display: 'flex' },
                    child: null,
                    childFeatured: { 'margin-left': 'auto', 'background-color': theme.color.blue700 },
                    firstChild: null,
                    lastChild: null,
                },
            },
            {
                value: 'header3',
                numberOfNumberBlock: 4,
                style: {
                    parent: { display: 'flex', 'justify-content': 'center', position: 'relative' },
                    child: null,
                    childFeatured: null,
                    firstChild: null,
                    lastChild: { position: 'absolute', top: '0', right: '0', 'background-color': theme.color.blue700 },
                },
            },
        ],
    },
];
