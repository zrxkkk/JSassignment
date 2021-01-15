var app = angular.module('app',[]);
app.controller('item', ['$scope', function($scope){

    $scope.items = [
        {itemQuantity:"1", itemName:"apple"},
        {itemQuantity:"2", itemName:"banana"},
        {itemQuantity:"3", itemName:"orange"},
        {itemQuantity:"4", itemName:"chicken"},
        {itemQuantity:"5", itemName:"beef"}
    ]

    $scope.alreadyItems = []

    $scope.bought = function(item){
        var index = $scope.items.indexOf(item);
        $scope.items.splice(index, 1);
        $scope.alreadyItems.push({itemQuantity:item.itemQuantity, itemName:item.itemName})
    }
  
}]);