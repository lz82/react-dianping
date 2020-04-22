import { AppGet } from '@/utils/request';

export function queryHomeAd() {
  return AppGet('/ad/home.json')
}
