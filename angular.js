<!DOCTYPE html>
<html>
<head>
<title>Example</title>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>
</head>
<body>
<div ng-app = "myapp" ng-controller = "ctrl">
<ul>
<li ng-repeat = "x in products">{{x}} <span ng-click = "remove($index)">x</span></li>
</ul>
<input ng-model = "addme">
<button ng-click = "addItem()">add</button>
 <p>{{errortext}}</p>
</div>
<script>
var app = angular.module('myapp' , []);
app.controller('ctrl' , function($scope){
	$scope.products = ['banana','orange','mango'];
	$scope.addme = function(){
		  $scope.errortext = "";
        if (!$scope.addMe) {return;}        
        if ($scope.products.indexOf($scope.addMe) == -1) {
            $scope.products.push($scope.addMe);
        } else {
            $scope.errortext = "The item is already in your shopping list.";
        }
	}
	$scope.remove = function(x){
		 $scope.errortext = "";    
        $scope.products.splice(x, 1);
		
	}
});
</script>
</body>
</html>