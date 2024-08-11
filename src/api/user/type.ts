// export interface LoginUser {
//   userInfo: User
//   token: string
// }

export interface User {
  id: number
  username: string
  password: string
  avatar?: string
  email?: string
  role?: 'root' | 'author' | 'visitor'
  createTime: Date
  updateTime: Date
}
