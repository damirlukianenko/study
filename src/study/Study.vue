<script setup lang="ts">
import Examples from './examples/Examples.vue';
import Lesson from './Lesson.vue';

</script>

<template>
    <div class="page-content text-center">
        <Row>
            <Column>
                <Suspense>
                    <Examples />
                </Suspense>
            </Column>

            <Column>
                <Suspense>
                    <Lesson />
                </Suspense>
            </Column>
        </Row>
    </div>
</template>

<style lang="scss" scoped>
@import 'scss/helpers/all.scss';

.page-content {
    @extend .text-center;
}
</style>