<script setup lang="ts">
import RefreshPageButton from 'components/developer-ui/RefreshPageButton.vue';
import CustomConsoleLog from 'components/developer-ui/CustomConsoleLog.vue';
import ErrorAutoReload from 'components/developer-ui/ErrorAutoReload.vue';
import ErrorStatus from 'components/developer-ui/ErrorStatus.vue';


</script>

<template>
    <section class="developer-overlay">
        <!-- upper section -->
        <header class="overlay at-top p-s">
            <Row columns-between>
                <Column></Column>
                <Column>
                    <ErrorStatus />
                </Column>
            </Row>
        </header>

        <!-- bottom section -->
        <footer class="overlay at-bottom">
            <Row columns-between>
                <Column>
                    <CustomConsoleLog />
                </Column>

                <Column flex="flex">
                    <ErrorAutoReload />
                    <RefreshPageButton />
                </Column>
            </Row>
        </footer>

    </section>
</template>

<style lang="scss" scoped>
@import 'scss/helpers/all.scss';

.at-bottom {
    @extend .at-bottom, , .between, .y-bottom, .p-s;
}
</style>