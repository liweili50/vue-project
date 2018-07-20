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
    'code': 0,
    'menuList': [{
      "id": 1,
      "path": "/one",
      "meta": {
        "title": "目录一"
      },
      "component": "index",
      "children": [{
        "path": "video",
        "meta": {
          "title": "视频页面",
          "name": "2",
          "role": ["admin"]
        },
        "component": "views/video/"
      }, {
        "path": "echart",
        "meta": {
          "title": "图表页面",
          "name": "3",
          "role": ["admin"]
        },
        "component": "views/echart/"
      }]
    }, {
      "id": 2,
      "path": "/two",
      "meta": {
        "title": "目录二"
      },
      "component": "index",
      "children": [{
        "path": "table",
        "meta": {
          "title": "表格页面",
          "name": "7",
          "role": ["admin"]
        },
        "component": "views/table/"
      }, {
        "path": "richText",
        "meta": {
          "title": "富文本页面",
          "name": "8",
          "role": ["admin"]
        },
        "component": "views/richText/"
      }]
    }]
  }
})
export default Mock
