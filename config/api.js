const http = uni.$u.http

export const register = (params) => http.get('/api/userinfo/regUser',{params})

export const login = (data) => http.post('/api/userinfo/userLogin',data)

export const signOfDay = (params) => http.get('/api/userinfo/userSign',{params})

export const queryRechargeRecord = (params) => http.get('/api/userinfo/queryInchangeLog',{params})


export const  queryWithDrawRecord = (params) => http.get('/api/userinfo/queryWithDrawLog',{params})

export const queryExtensionRecord = (params) => http.get('/api/userinfo/queryExtensionLog',{params})

export const queryInvestmentRecord = (params) => http.get('/api/userinfo/queryInvestmentLog',{params})



export const getProjectList = ()=>http.get('/api/project/getProjectList')


export const getProjectDetail = (params)=> http.get('/api/project/getProjectById',{params})

export const  queryMoneyFlow = (params) => http.get('/api/userinfo/queryMoneyFlow',{params}) //资金明细
export const  queryProfitLogqueryProfitLog = (params) => http.get('/api/userinfo/queryProfitLog',{params}) //收益记录

export const bindBankCard = (data) => http.post('/api/userinfo/addBankCard',data)

export const bindAlipay = (data) => http.post('/api/userinfo/addAlipay',data)

export const getUserInfo = ()=> http.get('/api/userinfo/getUserinfo')




