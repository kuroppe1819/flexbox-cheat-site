import { createZIndex } from './zIndex';
import { createColor } from './color';
import { createShadow } from './shadow';
import { createFontSize } from './fontSize';

export const theme = {
    color: createColor(),
    fontSize: createFontSize(),
    shadow: createShadow(),
    zIndex: createZIndex(),
};
