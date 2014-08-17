angular.module('starter.controllers', [])

.controller('InputCtrl', function($scope, ReadData) {
	$scope.speed = 500;
	$scope.readStart = function(text, speed){
		ReadData.text = text+' ';
		ReadData.speed = speed;
	}
})

.controller('ReadCtrl', function($scope, ReadData) {
	$scope.words = [];
	var parseText = function(){
		var currentWord = '';
		for(var i=0; i < ReadData.text.length; i++){
			if(ReadData.text.charAt(i) === ' '){
				$scope.words.push(currentWord);
				currentWord = '';
			}
			else{
				currentWord = currentWord.concat(ReadData.text.charAt(i));
			}
		}
		console.log($scope.words);
	}
	parseText();
});
