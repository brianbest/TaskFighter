'user strict';

app.controller('AuthController', function($scope,$location, Auth,toaster){

	if(Auth.user.provider) {
    $location.path('/');
  }

	$scope.register = function(user){
		Auth.register(user).then(function(){
			toaster.pop('success','Register successfully!');
			console.log("");
			$location.path('/');
		},function(err){
			toaster.pop('error','Oops, something went wrong!');
			
		});
	};

	$scope.login = function(user){
		Auth.login(user).then(function(){
			toaster.pop('success','Login success!');
			$location.path('/');
		},function(err){
			toaster.pop('error','Oops, something went wrong!');
			
		});
	};

	$scope.changePassword = function(user){
		Auth.changePassword(user).then(function(){
			$scope.user.email = '';
			$scope.user.oldPass = '';
			$scope.user.newPass = '';

			toaster.pop('success','Password changed successfully!');
			
			
		},function(err){
			toaster.pop('error','Oops, something went wrong!');
			
		});
	}

});