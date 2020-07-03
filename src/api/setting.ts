import request from '@/utils/request'

export function getSettingInfo() {
    return request({
      url: '/api/v1/setting/getsetting',
      method: 'get',
    })
}
