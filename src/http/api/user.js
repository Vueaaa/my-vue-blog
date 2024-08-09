import serviceAxios from '../index'

export const getUserInfo = (params) => {
  return serviceAxios({
    url: '/website/queryMenuWebsite',
    method: 'post',
    params
  })
}
export const login = (data) => {
  return serviceAxios({
    url: '/user/login',
    method: 'post',
    data
  })
}

export const reqRegister = (params) => {
  return serviceAxios({
    url: '/user/register',
    method: 'post',
    params
  })
}
