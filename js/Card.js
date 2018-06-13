// KLASA KANBAN CARD
function Card(description) {
  	var self = this;

  	this.id = randomString();
  	this.description = description;
  	this.element = generateTemplate('card-template', { description: this.description }, 'li');
  	this.element.querySelector('.card').addEventListener('click', function (event) {
    	event.stopPropagation();

    	if (event.target.classList.contains('btn-delete')) {
      		self.removeCard();
    	}
  	});
}
Card.prototype = {
	removeCard: function() {
		this.element.parentNode.removeChild(this.element);
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