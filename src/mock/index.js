var Mock = require('mockjs')
Mock.mock(/\/login/, 'post', {
  'token': 'admin',
  'age|1-100': 100
})
export default Mock
