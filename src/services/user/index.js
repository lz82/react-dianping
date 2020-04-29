import { AppGet } from '@/utils/request';

export function queryOrderList(type) {
  return AppGet(`/order/${type}.json`);
}
