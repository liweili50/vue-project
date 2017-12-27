var Mock = require('mockjs')
Mock.mock('/login/login', 'get', {
  'name': '[@name](/user/name)()',
  'age|1-100': 100,
  'color': '[@color](/user/color)'
})
export default Mock
