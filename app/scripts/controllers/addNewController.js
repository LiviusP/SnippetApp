'use strict';

/* AddCtrl - provides the view with a method to save a new snippet. 
*
*
*
*
*/
angular.module('snippetApp' )
  .controller('AddCtrl' ,function(snippetFactory , $scope , $state){
	  
    $scope.snippet = {};	
	
	  
	$scope.addNewSnippet = function()
	{
		
		snippetFactory.addSnippet($scope.snippet);
		$state.go('list');
		
	};	
	  
	  
  });