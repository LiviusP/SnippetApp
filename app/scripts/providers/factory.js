angular.module('snippetApp' )

.factory('snippetFactory', function ($firebaseArray , $q) {
	
	var ref = new Firebase("https://snippetassignment.firebaseio.com/snippets");

	
  return {
    getSnippets: function () {
      
	  
      
      return  $firebaseArray(ref);
	  
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
			deferred.resolve(snippet)
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
	
  }
});