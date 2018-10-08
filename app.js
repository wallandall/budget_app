//Budget controller
budgetController = (function(){

})();


//UI Controller
var UIController = (function(){
  var DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputButton: '.add__btn'

  };

  return{
    getInput: function(){
      return{
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value
      };
    },
    getDOMstrings: function(){
      return DOMstrings;
    }
  };
})();

//APP
var controller = (function(budgetCtrl, UICtrl){
  var DOM = UICtrl.getDOMstrings();
  var ctrlAddItem = function(){
    var input = UICtrl.getInput();
    console.log(input);
  }
  document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);

  document.addEventListener('keypress', function(event){
    if(event.keyCode === 13 || event.which === 13){
      ctrlAddItem();
    }
  });
})(budgetController, UIController);
