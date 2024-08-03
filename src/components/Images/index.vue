<script setup lang="ts"></script>

<template>
  <div class="imgs">
    <ul>
      <li class="item" ref="items"></li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/mixin.scss';
.imgs {
  position: relative;
  width: 100%;
  height: 100vh;
  z-index: 0;
  overflow: hidden;

  .item {
    @include absolute;
    width: 100%;
    height: 100%;
    background: url('@/assets/images/bg.jpg') no-repeat 50% 50% / cover;
    opacity: 0;
    animation-name: imageAnimation;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    backface-visibility: hidden;
    transform-style: preserve-3d;
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* background-color: rgba(0, 0, 0, 0.2); */
    transition: all 0.2s ease-in-out 0s;
  }
}

@keyframes imageAnimation {
  0% {
    opacity: 0;
    animation-timing-function: ease-in;
  }

  2% {
    opacity: 1;
  }

  8% {
    opacity: 1;
    transform: scale(1.05);
    animation-timing-function: ease-out;
  }

  17% {
    opacity: 1;
    transform: scale(1.1);
  }

  25% {
    opacity: 0;
    transform: scale(1.1);
  }

  100% {
    opacity: 0;
  }
}
</style>
