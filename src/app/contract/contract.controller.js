
(function () {
    angular.module('app')
        .controller('contractController', function ($scope,$location,$rootScope,$state) {
		$scope.title = 'contract'
            var ng = this;
            if ($location.search().applicationNo) {
                // ng.applicationnum = $location.search().applicationNo;
                $rootScope.applicationnum = $location.search().applicationNo;
                sessionStorage.applicationnum=$location.search().applicationNo;
            }
            ng.path = function () {
                $state.go("contract_list");
            };
            ng.contractconfirm=function(n){
                ng.confirm=n;
            }
        });
})();
