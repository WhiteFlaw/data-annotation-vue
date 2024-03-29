import request from './request'

export function GET(url, params = {}) {
  return request({
    url,
    params,
    method: 'get'
  })
}

export function POST(url, data = {}, params = {}) {
  return request({
    url,
    data,
    params,
    method: 'post'
  })
}

export function PUT(url, data = {}, params = {}) {
  return request({
    url,
    data,
    params,
    method: 'put'
  })
}

export function DELETE(url, data = {}, params = {}) {
  return request({
    url,
    data,
    params,
    method: 'delete'
  })
}
