
export const createDaily = (params) => axios.post('/user/daily/create', params)

export const listDaily = (params) => axios.post('/user/daily/list', params)

export const getDaily = (params) => axios.get(`/user/daily/get/${params}`)

export const updateDaily = (params) => axios.put('/user/daily/update', params)

export const deleteDaily = (params) => axios.delete(`/user/daily/delete/${params}`)