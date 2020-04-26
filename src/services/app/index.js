import { AppGet } from '@/utils/request';

export function queryLikes() {
  return AppGet('/product/likes.json');
}
