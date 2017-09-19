function getFirstSelector(selector) {

  return document.querySelector(selector);

}

function nestedTarget() {

  return document.querySelector('#nested .target');

}

function increaseRankBy(n) {

  const ranks = document.querySelectorAll('body main ul');

  for (let i = 0; i < ranks.length; i++) {
    ranks[i].innerHTML = (i + 1).toString();
  }

}

function deepestChild() {

  return document.getElementById('grand-node').querySelector('div div div div div')

}
