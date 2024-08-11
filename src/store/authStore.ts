import { defineStore } from 'pinia'
import { User } from '@/api/user/type'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: '',
    userInfo: ref<User>()
  }),
  actions: {
    setToken(token: any) {
      this.token = token
      // localStorage.setItem('token', token)
    },

    clearToken() {
      this.token = ''
      // localStorage.removeItem('token')
    },

    setUserInfo(userInfo: any) {
      this.userInfo = userInfo
    },

    clearUserInfo() {
      this.userInfo = undefined
    }
  },
  persist: true // 开启持久化存储
})
