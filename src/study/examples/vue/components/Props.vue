<script setup lang="ts">

/*
    Здесь использованы:
    1. Пропсы 2х видов: массив и объект (с выводом в HTML)
    2. Дефолты пропсов (default)
    3. Слоты (<slot></slot>)
    4. Привязка пропсов к классам (пропсы в итоге превращаются стили)
*/


/* 1. Пропсы как массив */
// let propsArray = defineProps(
//     ['size', 'background']
// );
// console.log('propsArray: ', propsArray);


/* 2. Пропсы как объект */
let propsObject = defineProps({
    'color-scheme': String,
    'width': {
        type: String,
        default: 'full-width',
    },
});

</script>

<template>
    <!-- 3. Привязка пропсов к классам -->
    <div :class="['container', propsObject.colorScheme, propsObject.width]">
        <slot>Дефолтный текст в пропсе</slot>
        
            <p>Пропсы можно вывести на страницу:</p> 
            {{  propsObject }}  
       
    </div>
</template>

<style lang="scss" scoped>
.container {
    width: 100%;
    max-width: 80%;
    text-align: center;
}

.wide {
    max-width: 90%;
}

.narrow {
    max-width: 70%;
}
</style>