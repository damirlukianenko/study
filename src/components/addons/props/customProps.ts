import { colorProps } from './colorProps';
import { sizeProps } from './sizeProps';
import { flexProps } from './flexProps';
import { fontProps } from './fontProps';
import { positionProps } from './positionProps';

export let customProps = {
    ...colorProps,
    ...sizeProps,
    ...flexProps,
    ...fontProps,
    ...positionProps,
};
