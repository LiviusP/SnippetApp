angular.module('snippetApp' )
  .controller('AddCtrl' ,function(snippetFactory , $scope , $state){
	  
    $scope.snippet = {};	
	
	  
	$scope.addNewSnippet = function()
	{
		
		snippetFactory.addSnippet($scope.snippet);
		$state.go('list');
		
	}	
	  
	  
  })