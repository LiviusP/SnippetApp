angular.module('snippetApp' )
  .controller('ListCtrl', function (snippetFactory , $scope) {
	  
    $scope.snippets = snippetFactory.getSnippets();
	
	$scope.removeSnippet = function(snippet){
		
		snippetFactory.removeSnippet(snippet);
		
	}
		
  })