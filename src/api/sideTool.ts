import request from '@/utils/request'

export function getSideTool() {
    return request({
      url: '/api/v1/sideTool/getsetting',
      method: 'get',
    })
}
