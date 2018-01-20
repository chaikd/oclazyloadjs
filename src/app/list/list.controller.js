(function(){
	angular.module('app')
	.controller('listController',function($scope,$state){
		$scope.title = 'listlistlist'
		console.log(1111)
		$scope.jump = function(){
			console.log(333)
			$state.go('show')
		}
	})
})();