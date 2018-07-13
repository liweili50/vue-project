var Mock = require('mockjs')
Mock.mock(/\/login/, 'post', {
  'code': 0,
  'token': 'admin'
})

Mock.mock(/\/getUserinfo/, 'get', function (config) {
  return {
    'user': {
      'name': 'Jonas',
      'phone': '17612151860'
    },
    'rolesList': ['admin'],
    'code': 0
  }
})
export default Mock
