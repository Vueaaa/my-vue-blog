<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <div class="app-wrapper">
    <Header></Header>
    <main class="main">
      <Suspense>
        <template #default>
          <router-view v-slot="{ Component }">
            <!-- 动态组件的渲染
              传入的是从 router-view 插槽中获取的 Component -->
            <keep-alive>
              <component :key="route.name" :is="Component" v-if="route.meta.keepAlive" />
            </keep-alive>
            <component :key="route.name" :is="Component" v-if="!route.meta.keepAlive" />
          </router-view>
        </template>
        <template #fallback>
          <div>正在加载..........</div>
        </template>
      </Suspense>
    </main>
  </div>
</template>

<style scoped>
.app-wrapper {
  position: relative;
  min-height: 100vh;
}
.main {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
