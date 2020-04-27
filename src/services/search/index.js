import { AppGet } from '@/utils/request'

export function queryHotSearch() {
  return AppGet('/search/hot.json')
}

export function queryRelatedSearch() {
  return AppGet('/search/related.json')
}
