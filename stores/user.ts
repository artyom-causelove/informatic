import { defineStore } from 'pinia'

interface User {
  id: string
  telegramId: string
  firstName: string
  lastName: string | null
  username: string
  role: string
  avatarUrl: string
  createdAt: string
  updatedAt: string
  tariff?: number
}

interface UserState {
  user: User | null
  token: string | null
  isAuthenticated: boolean
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    user: null,
    token: null,
    isAuthenticated: false
  }),
  
  actions: {
    setUser(user: User) {
      console.log('Setting user in store:', user)
      this.user = user
      this.isAuthenticated = true
    },
    
    setToken(token: string) {
      this.token = token
    },
    
    logout() {
      this.user = null
      this.token = null
      this.isAuthenticated = false
      localStorage.removeItem('access_token')
      localStorage.removeItem('user')
    },
    
    initializeFromStorage() {
      const token = localStorage.getItem('access_token')
      const userStr = localStorage.getItem('user')
      
      console.log('Initializing from storage:', { token, userStr })
      
      if (token && userStr) {
        this.token = token
        this.user = JSON.parse(userStr)
        this.isAuthenticated = true
        console.log('Store initialized with user:', this.user)
      }
    }
  },
  
  getters: {
    getUserProfile: (state): User | null => state.user,
    getToken: (state): string | null => state.token,
    getIsAuthenticated: (state): boolean => state.isAuthenticated
  }
}) 