import { AppGet } from '@/utils/request';

export function getProductDetailById(id) {
  return AppGet(`/product-detail/${id}.json`)
}

export function getShopById(id) {
  return AppGet(`/shop/${id}.json`)
}
