import request from '@/utils/request'

export function getDocslist(data:object) {
    return request({
      url: '/api/v1/docs/getdocslist',
      method: 'post',
      data
    })
}
export function saveDocs(data:object){
  return request({
    url: '/api/v1/docs/savedocs',
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