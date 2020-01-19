import localforage from 'localforage'

localforage.config({
  name        : 'll-rides',
  storeName   : 'll_rides_db',
  description : 'll-rides local storage for some datas'
})

const setItem = async (key: string, value: any): Promise<any> => {
  return localforage.setItem(key, value)
}

const getItem = async (key: string): Promise<any> => {
  return await localforage.getItem(key)
}

export default {
  setItem,
  getItem
}
