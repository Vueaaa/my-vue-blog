import { defineStore } from 'pinia'
import { User } from '@/api/user/type'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: '',
    userInfo: ref<User>()
  }),
  persist: true,
  actions: {
    setToken(token: any) {
      this.token = token
    },

    clearToken() {
      this.token = ''
    },

    setUserInfo(userInfo: any) {
      this.userInfo = userInfo
    },

    clearUserInfo() {
      this.userInfo = undefined
    }
  },

})
