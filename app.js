//Budget controller
budgetController = (function(){

})();


//UI Controller
var UIController = (function(){

})();

//APP
var controller = (function(budgetCtrl, UICtrl){
  var ctrlAddItem = function(){
    console.log("Test");
  }
  document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

  document.addEventListener('keypress', function(event){
    if(event.keyCode === 13 || event.which === 13){
      ctrlAddItem();
    }
  });
})(budgetController, UIController);
