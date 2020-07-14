import request from '@/utils/request'

export function getDocslist(data:object) {
    return request({
      url: '/api/v1/docs/getdocslist',
      method: 'post',
      data
    })
}
export function getDocsDetails(data:object){
  return request({
    url:'/api/v1/docs/getdocsdetails',
    method:'post',
    data
  })
}