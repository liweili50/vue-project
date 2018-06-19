var Mock = require('mockjs')
Mock.mock(/\/login/, 'post', {
  'token': 'admin'
})

Mock.mock(/\/getUserinfo/, 'get', function (config) {
  console.log(config)
  if (config.url === '/getUserinfo') {
    return {
      'user': {
        'name': 'liwei',
        'phone': '17612151860'
      },
      'role': ['admin']
    }
  }
})
export default Mock
