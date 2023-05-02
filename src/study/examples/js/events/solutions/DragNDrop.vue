<script setup>
import { onMounted } from 'vue';

onMounted(() => {
    let note = document.querySelector('.drag-n-drop');
    
    note.onmousedown = function() {
    
        document.onmousemove = function(event) {
            moveElement(event.x, event.y)
        }
    
        document.onmouseup = function() {
            document.onmousemove = null;
        }
    }
    
    function moveElement(x, y) {
        let newX = x - note.offsetWidth / 2 + 'px';
        let newY = y - note.offsetHeight / 2 + 'px';
    
        note.style.left = newX;
        note.style.top = newY;
    }
});




</script>

<template>
    <div class="drag-n-drop">
        Меня можно двигать по всему экрану
    </div>
</template>

<style lang="scss" scoped>
.drag-n-drop {
    border: 1px solid black;
    cursor: pointer;
    position: absolute;
}
</style>