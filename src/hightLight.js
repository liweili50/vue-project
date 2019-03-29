// 注册一个全局自定义指令 `v-focus`

var MyPlugin = {};

function colorword(node, keywords) {
  let nodeLength = node.childNodes.length;
  for (var i = 0; i < nodeLength; i++) {
    var childNode = node.childNodes[i];

    if (childNode.nodeType === 3) {
      //childNode is #text
      for (let i = 0; i < keywords.length; i++) {
        let item = keywords[i];
        var re = new RegExp(item.keyword, "i");
        if (childNode.data.search(re) === -1) continue;
        re = new RegExp("(" + item.keyword + ")", "gi");
        node.innerHTML = node.innerHTML.replace(
          re,
          '<span style="background-color:' +
            item.backgroundColor +
            ';">' +
            item.keyword +
            "</span>"
        );
      }
    } else if (childNode.nodeType === 1) {
      //childNode is element
      colorword(childNode, keywords);
    }
  }
}

function highlight(node, keywords) {
  if (keywords.length === 0 || !node || !node.nodeType || node.nodeType !== 1) {
    return;
  }
  colorword(node, keywords);
}
MyPlugin.install = function(Vue, options) {
  Vue.directive("hightlight", function(el, binding) {
    highlight(el, binding.value);
  });
};

export default MyPlugin;
