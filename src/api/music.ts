import request from '@/utils/request'


export function getMusic() {
    return request({
      url: '/api/v1/music/getmusic',
      method: 'get',
    })
}

