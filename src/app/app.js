// window.onload = function(){
// 	angular.bootstrap(document, ['app'])
// }
(function(){
	var app = angular.module('app',['ui.router','oc.lazyLoad']);
	app.config(function($controllerProvider,$compileProvider,$filterProvider,$provide){		
		app.register = {
			//得到$controllerProvider的引用
			controller : $controllerProvider.register,
			//同样的，这里也可以保存directive／filter／service的引用
			directive: $compileProvider.directive,
			filter: $filterProvider.register,
			service: $provide.service
		};
	})
	.config(function($stateProvider, $urlRouterProvider){
		// $urlRouterProvider.otherwise('list');
		$stateProvider
		.state('list',{
			url:'/list',
			title:'list页面',
			controller:'listController',
			controllerAs:'list',
			templateUrl:'app/list/list.html'
			resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad){
                    return $ocLazyLoad.load(['app/list/list.controller.js'])
                }]                        
            } 
		})
		.state('show',{
			url:'/show',
			title:'show页面',
			controller:'showController',
			controllerAs:'show',
			templateUrl:'app/show/show.html',
			resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad){
                    return $ocLazyLoad.load(['app/show/show.controller.js',
                    	'app/show/show.css'
                    	])
                }]                        
            } 
		})
		.state('contract',{
			url:'/contract',
			title:'contract页面',
			controller:'contractController',
			controllerAs:'contract',
			templateUrl:'app/contract/contract.html',
			resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad){
                    return $ocLazyLoad.load(['app/contract/contract.controller.js'
                    	])
                }]                        
            } 
		})
		.state('contract.account_change',{
			url:'/account_change',
			title:'account_change页面',
			controller:'account_changeController',
			controllerAs:'account_change',
			templateUrl:'app/account_change/account_change.html',
			resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad){
                    return $ocLazyLoad.load(['app/account_change/account_change.controller.js',
                    	'app/account_change/account_change.css'
                    	])
                }]                        
            } 
		})
	})
})();