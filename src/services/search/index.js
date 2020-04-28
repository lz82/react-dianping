import { AppGet } from '@/utils/request';

export function queryHotSearch() {
  return AppGet('/search/hot.json');
}

export function queryRelatedSearch() {
  return AppGet('/search/related.json');
}

export function querySearchResult(data) {
  console.log('api', data);
  return AppGet('/search/result.json', data);
}
