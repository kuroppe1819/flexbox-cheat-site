export const createCssCodeForParent = (styleContents: string): string => {
    return `.parent {
    ${styleContents}
}`;
};

export const createCssCodeForChild = (styleContents: string): string => {
    return `.child {
    ${styleContents}
}`;
};

export const createCssCodeForChildFeatured = (styleContents: string): string => {
    return `.child--featured {
    ${styleContents}
}`;
};
