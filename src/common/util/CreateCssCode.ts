export const createCssCodeForParent = (parentStyleContents: string): string => {
    return `
.parent {
    ${parentStyleContents}
}

`;
};
