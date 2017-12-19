let util = {

}
util.title = function (title) {
  title = title ? title + ' - Home' : 'vue project'
  window.document.title = title
}

export default util
