import request from '@/utils/request'

export function createNe(neCount, firstNeId, neType, firstNeIp, mask, neVersion, networkIfIndex) {
  console.log('createne')
  console.log(neCount)
  return request({
    url: '/api/ne/create',
    method: 'post',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
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
