'use strict';


/*  This is the controller for listing the snippets in the list state.
*   It should retrive the list of snippets from factory and provide the view
*   with a function to remove a snippet .
*
*/

angular.module('snippetApp' )
  .controller('ListCtrl', function (snippetFactory , $scope) {
	  
	 
	  
     snippetFactory.getSnippets().then(function(data){
		 
		 $scope.snippets = data;
		 
	 });
		
	$scope.removeSnippet = function(snippet){
		
		snippetFactory.removeSnippet(snippet);
		
	};
		
  });