var Mock = require('mockjs')
Mock.mock(/\/login/, 'post', {
  'token': 'admin',
  'age|1-100': 100
})

Mock.mock(/\/getUserinfo/, 'get', {
  'user': {
    'name': 'liwei',
    'phone': '17612151860'
  },
  'role': ['admin']
})
export default Mock
