// KLASA KANBAN CARD
function Card(id, name) {
    var colorExample = ['#55efc4', '#ff7675', '#00b894', '#00cec9', '#0984e3', '#6c5ce7'  ];
    var choice = Math.floor(Math.random() * colorExample.length);
    var colorRandom = colorExample[choice];


  	var self = this;

  	this.id = id;
  	this.name = name || 'No name given';
  	this.element = generateTemplate('card-template', { description: this.name, color: colorRandom}, 'li');
  	this.element.querySelector('.card').addEventListener('click', function (event) {
    	event.stopPropagation();

    	if (event.target.classList.contains('btn-delete')) {
      		self.removeCard();
    	}
  	});
}
Card.prototype = {
  removeCard: function() {
    var self = this;

    fetch(baseUrl + '/card/' + self.id, { method: 'DELETE', headers: myHeaders })
      .then(function(resp) {
        return resp.json();
      })
      .then(function(resp) {
        self.element.parentNode.removeChild(self.element);
      })
  }
}

/*
var btnCard = document.getElementById('btn-card');
btnCard.addEventListener('click', function(){
var colorExample = ['#16a085', '#3498db', '#8e44ad'];
  var choice = [Math.floor(Math.random() * colorExample.length)];
  var colorRandom = colorExample[choice];
  
  console.log(colorRandom);
  var changeColor = document.querySelector('.card-description');
  changeColor[changeColor.length - 1].style.background = colorRandom;
});
*/