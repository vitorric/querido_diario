/** 
 * Login Route
 */

export const loginUser = (params = { email: null, password: null }) => axios.post('/auth/login', params)

export const createUser = (params = { email: null, password: null, name: null }) => axios.post('/auth/create', params)