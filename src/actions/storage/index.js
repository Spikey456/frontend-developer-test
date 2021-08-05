import storage from 'redux-persist/lib/storage'

export const getTokenData = async () => storage.getItem('token');

export const removeTokenData = async () => storage.removeItem('token');

export const saveTokenData = async token => storage.setItem('token', token)