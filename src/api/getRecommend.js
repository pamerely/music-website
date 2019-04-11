import jsonp from '../common/js/jsonp.js'
import {commonParams, options} from './config'
import axios from 'axios'

// 获取轮播图数据
export function getRecommend(){
  
    const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

    // 配置拼接到URL的参数

    const data = Object.assign({} ,commonParams, {
        platform:'h5',
        uin:0, //登录后为QQ号，没有登录为0
        needNewCode:1,

    })

    return jsonp(url, data, options)
}

// 获取歌单列表数据

export function getDiscList() {
    const url = '/api/getDiscList'
  
    const data = Object.assign({}, commonParams, {
      platform: 'yqq',
      hostUin: 0,
      sin: 0,
      ein: 29,
      sortId: 5,
      needNewCode: 0,
      categoryId: 10000000,
      rnd: Math.random(),
      format: 'json'
    })
  
    return axios.get(url, {
      params: data
    }).then((res) => {
      return Promise.resolve(res.data)
    })
  }