function getFirstSelector(selector) {

  return document.querySelector(selector);

}

function nestedTarget() {

<<<<<<< HEAD
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
=======
  return document.querySelector(#app.unranked-list);
>>>>>>> 0187a7cd933b7c4f362dd0df63cc09cf71291e5e

}
