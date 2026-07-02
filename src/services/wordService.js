import axios from './api'
import { ERRORS } from '../utils/constants'

export const validateWord = async (word) => {
  try {
    const { data } = await axios.get('/api/validate', { params: { word } })
    return { success: true, exists: data.exists }
  } catch {
    return { success: false, error: ERRORS.NETWORK }
  }
}
