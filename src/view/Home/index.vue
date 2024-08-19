<script setup lang="ts">
const arrowDown = () => {
  window.scrollTo({
    behavior: 'smooth',
    top: document.documentElement.clientHeight
  })
}
</script>

<template>
  <div class="bg">
    <div style="position: relative">
      <Images></Images>
      <!-- <Title></Title> -->
      <!-- <Waves></Waves> -->
      <el-icon class="arrow-down" :size="36" :color="'black'" @click="arrowDown">
        <ArrowDown />
      </el-icon>
    </div>
    <div class="home-container">
      <div class="left-container">
        <div class="w-100">
          <div class="news">
            <div class="flex">
              <SvgIcon icon-class="laba" size="1.2rem"></SvgIcon>
            </div>
            <div>welcome</div>
            <div class="flex arrow-right">
              <el-icon :size="20">
                <DArrowRight />
              </el-icon>
            </div>
          </div>
          <div class="article">
            <ArticleItem></ArticleItem>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg {
  z-index: 100;
}

.arrow-down {
  position: absolute;
  bottom: 70px;
  left: 49%;
  -webkit-animation: arrow-shake 1.5s ease-out infinite;
  animation: arrow-shake 1.5s ease-out infinite;
  cursor: pointer;
  z-index: 8;
}

.arrow-down {
  position: absolute;
  bottom: 70px;
  left: 49%;
  -webkit-animation: arrow-shake 1.5s ease-out infinite;
  animation: arrow-shake 1.5s ease-out infinite;
  cursor: pointer;
  z-index: 8;
}

@keyframes arrow-shake {
  0% {
    opacity: 1;
    transform: translateY(0);
  }

  30% {
    opacity: 0.5;
    transform: translateY(25px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.news {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  margin: 0 8px;
  border-radius: 15px;
}

.arrow-right {
  animation: arrow-right-shake 1.5s ease-out infinite;
}

@keyframes arrow-right-shake {
  0% {
    opacity: 1;
    transform: translateX(0);
  }

  30% {
    opacity: 0.5;
    transform: translateX(8px);
  }

  70% {
    opacity: 0.2;
    transform: translateX(12px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.w-100 {
  width: 100%;
}
</style>
