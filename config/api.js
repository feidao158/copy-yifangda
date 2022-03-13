const http = uni.$u.http

export const register = (params) => http.get('/api/userinfo/regUser',{params})

export const login = (data) => http.post('/api/userinfo/userLogin',data)
