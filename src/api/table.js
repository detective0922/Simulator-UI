import request from '@/utils/request'

export function getList(params) {
  return request({
  //  url: '/table/list',
    url: '/api/ne/list',
    method: 'get',
    params
  })
}
