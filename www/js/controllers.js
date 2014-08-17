angular.module('starter.controllers', [])

.controller('InputCtrl', function($scope, ReadData) {
	$scope.speed = 500;
	$scope.readStart = function(text, speed){
		ReadData.text = text+' ';
		ReadData.speed = speed;
	}
})

.controller('ReadCtrl', function($scope, $interval, ReadData) {
	$scope.words = [];
	var nextWordInt = 0;
	var parseText = function(){
		var word = '';
		for(var i=0; i < ReadData.text.length; i++){
			if(ReadData.text.charAt(i) === ' '){
				$scope.words.push(word);
				word = '';
			}
			else{
				word = word.concat(ReadData.text.charAt(i));
			}
		}
		console.log($scope.words);
	}
	var changeWord = function(){
		if(nextWordInt >= $scope.words.length){
			$interval.cancel(promise);
			$scope.currentWord = '';
		}
		$scope.currentWord = $scope.words[nextWordInt];
		nextWordInt++;
	}
	$scope.$on('$destroy', function(){
		$interval.cancel(promise);
	});
	parseText();
	var promise = $interval(changeWord, (3600 / ReadData.speed)*10);
});
