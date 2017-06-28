function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').getElementsByClassName('target')[0]
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('ul.ranked-list li')

  for(let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
  }
}

function deepestChild() {
  var node = document.getElementById("grand-node")

  while(node.children.length > 0) {
    node = node.children[0]
  }
  return node
}
