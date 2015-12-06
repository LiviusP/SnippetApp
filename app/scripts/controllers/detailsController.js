'use strict';


/* DetailsCtrl - retrives from stateParams the id of snippet and 
*  makes a call to the snippetFactory to retrive the sniippet 
*  having that id . 
*  It works this way to provide a specific URL for each snippet that can be 
*   bookmarked or given away . 
*/


angular.module('snippetApp' )
   .controller('DetailsCtrl', function(snippetFactory,$stateParams,$scope){
	  
	 
	 $scope.id = $stateParams.id;
	 
	 snippetFactory.findSnippet($stateParams.id).then(function(data){
		 
		 
		 $scope.snippet = data;
	 });
	  
	  
	  
  });