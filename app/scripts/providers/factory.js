'use strict';


/* snippetFactory - provides part of CRUD services (create , read , delete)    
*  The findSnippet method returns a promise because of async call to firebase . 
*
*
*
*
*/

angular.module('snippetApp' )

.factory('snippetFactory', function ($firebaseArray , $q) {
	
	
	var ref = new Firebase("https://snippetassignment.firebaseio.com/snippets");

	
  return {
    getSnippets: function () {
      
	  var deferred = $q.defer();
	  
      
      var snippets = $firebaseArray(ref);
	  
	  deferred.resolve(snippets);
	  
	  return deferred.promise;
    },
	addSnippet : function(snippet){
		
		
		
		var snippets = $firebaseArray(ref);
		
		snippets.$add(snippet);
		
	},
	findSnippet : function(id)
	{
		
		var deferred = $q.defer();
		
		var snippets = $firebaseArray(ref);
		var snippet;
		
		snippets.$loaded().then(function(){
			
			snippet = snippets.$getRecord(id);
			deferred.resolve(snippet);
		});
		
		
		
		return deferred.promise;

		
		
	},
	
	removeSnippet : function(snippet){
		
	     var snippets= $firebaseArray(ref);
         
		 snippets.$loaded().then(function(){
		 var snippetToRemove = snippets.$getRecord(snippet.$id);
		 snippets.$remove(snippetToRemove);
		 });
		 
	}
	
  };
});