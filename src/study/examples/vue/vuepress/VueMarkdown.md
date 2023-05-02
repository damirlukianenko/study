# {{ pageTitle }}

- и это очень 
- очень 
- очень прикольно

<Row>
    <Column>
        Колонка 1
    </Column>

    <Column>
        Колонка 2
    </Column>
</Row>

<script setup>
import { ref } from 'vue';
import Column from '@/components/layout/Column.vue';

let pageTitle = ref('Mardown работает во VueJS');   
</script>

<style scoped></style>