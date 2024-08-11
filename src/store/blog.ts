import { defineStore } from 'pinia'
import { ref } from 'vue'

// 定义用户状态仓库
export const useBlogStore = defineStore(
  'blog',
  () => {
    let isDark = ref(false)
    return {
      isDark
    }
  },
  {
    // 开启持久化（使用本地存储，默认是localStorage）
    persist: true
  }
)
