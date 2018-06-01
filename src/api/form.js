import request from '@/utils/request'

export function createNe(neCount, firstNeId, neType, firstNeIp, mask, neVersion, networkIfIndex) {
  return request({
    url: '/api/ne/create',
    method: 'post',
    data: {
      neCount,
      firstNeId,
      neType,
      firstNeIp,
      mask,
      neVersion,
      networkIfIndex
    }
  })
}

export function getNetworkInterfaces() {
  return request({
    url: '/api/interface/list',
    method: 'get'
  })
}
