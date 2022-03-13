const http = uni.$u.http

export const register = (params) => http.get('/api/userinfo/regUser',{params})

export const login = (data) => http.post('/api/userinfo/userLogin',data)

export const signOfDay = (params) => http.get('/api/userinfo/userSign',{params})

export const queryRechargeRecord = (params) => http.get('/api/userinfo/queryInchangeLog',{params})


export const  queryWithDrawRecord = (params) => http.get('/api/userinfo/queryWithDrawLog',{params})

export const queryExtensionRecord = (params) => http.get('/api/userinfo/queryExtensionLog',{params})

export const queryInvestmentRecord = (params) => http.get('/api/userinfo/queryInvestmentLog',{params})
