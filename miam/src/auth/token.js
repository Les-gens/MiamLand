import AsyncStorage from '@react-native-async-storage/async-storage';

export const clearToken = async () => {
  try {
    await AsyncStorage.setItem('@token', '')
    return ''
  } catch (e) {
    console.error(e)
  }
}

export const setToken = async (value) => {
  try {
    await AsyncStorage.setItem('@token', value)
  } catch (e) {
    console.error(e)
  }
}

export const getToken = async () => {
  try {
    const value = await AsyncStorage.getItem('@token')
    return value
  } catch(e) {
    console.error(e)
  }
}