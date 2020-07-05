import request from '@/utils/request'


export function commentsList(data:object) {
  return request({
    url: '/api/v1/comment/commentsList',
    method: 'post',
    data
  })
}

export function addComment(data:object) {
    return request({
      url: '/api/v1/comment/addcomment',
      method: 'post',
      data
    })
}


