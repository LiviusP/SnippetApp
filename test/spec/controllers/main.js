'use strict';

 describe('Controller: DetailsCtrl', function () {

module(function($provide){
  $provide.factory('snippetFactory', ['$q', function($q)
  {function findSnippet(data){
      if(passPromise){
        return $q.when();
      } else {
        return $q.reject();
      }
    }
    return{
      findSnippet: findSnippet
    };
  }]);
});

beforeEach(inject(function($rootScope, $controller, snippetFactory){
  var scope=$rootScope.$new();
  var mockSnippetFactory=snippetFactory;
  spyOn(mockSnippetFactory,'findSnippet').andCallThrough();
  var detailsController = $controller('DetailsCtrl', {
    $scope: scope, 
    snippetFactory: mockSnippetFactory
  });
}));

 it('should get snippets list', function () {
    expect(detailsController.snippet).toBe(1);
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
