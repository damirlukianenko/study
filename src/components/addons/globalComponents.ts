/* Globally registered components */

// generic components
import Text from 'components/base/Text.vue';

// layout
import Theme from 'components/layout/Theme.vue';
import Container from 'components/layout/Container.vue';
import Row from 'components/layout/Row.vue';
import Column from 'components/layout/Column.vue';


export const globalComponents: any = {
    'Theme': Theme,
    'Container': Container,
    'Row': Row,
    'Column': Column,
    'Text': Text,
}