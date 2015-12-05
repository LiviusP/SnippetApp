
 
describe('ListCtrl', function(){
    var scope;//we'll use this scope in our tests
 
    //mock Application to allow us to inject our own dependencies
    beforeEach(angular.mock.module('snippetApp'));
    //mock the controller for the same reason and include $rootScope and $controller
    beforeEach(angular.mock.inject(function($rootScope, $controller){
        //create an empty scope
        scope = $rootScope.$new();
        //declare the controller and inject our empty scope
        $controller('ListCtrl', {
			$scope: scope,
			snippetFactory : function(){return {
				getSnippets: function () {
      
				return  [{author : 'author'}];
	  
			}	
			}
			}});
    }));
	 // tests start here
    it('should have variable text = "Hello World!"', function(){
        expect(snippetFactory).toBe('Hello World!');
    });
});


/*
describe('Controller: ListCtrl', function () {

  // load the controller's module
  beforeEach(module('snippetApp'));

  var ListCtrl,
    scope , factory;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListCtrl = $controller('ListCtrl', {
      $scope: scope,
      // place here mocked dependencies
	  snippetFactory : {
		  
		  getSnippets : function(){
			  
			   return [{author : 'Nobody' , description : 'Description'  , code : 'some code'}];  
		  }
	  }
    });
  }));

  it('should get snippets list', function () {
    expect(ListCtrl.snippets.length).toBe(1);
  });
});
*/
