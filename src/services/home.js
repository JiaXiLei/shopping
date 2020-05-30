import { get, post } from '@/utils/request'
import api from '@/services/api'

export const homeNavData = () => get(api.homeNavData)