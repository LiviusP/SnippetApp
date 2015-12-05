angular.module('snippetApp' )
   .controller('DetailsCtrl', function(snippetFactory,$stateParams,$scope){
	  
	 
	 $scope.id = $stateParams.id;
	 
	 snippetFactory.findSnippet($stateParams.id).then(function(data){
		 
		 
		 $scope.snippet = data;
	 });
	  
	  
	  
  })