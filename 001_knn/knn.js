
//Start off with what passes the first test.
function KNN(kSize){
	this.kSize = kSize;
	this.points = [];
}

KNN.prototype.train = function(trainingDataArray) {
	this.points = this.points.concat(trainingDataArray);
};

KNN.prototype.predictSingle = function(vector){
	var distancesArray = this._distances(vector, this.points);
	var sorted = this._sorted(distancesArray);
	return this._majority(this.kSize, sorted);
};

KNN.prototype.predict = function(vectorArray){
	var result = [];
	for (var i = 0; i<vectorArray.length; i++){
		result.push(this.predictSingle(vectorArray[i]))
	}
	return result;
};

KNN.prototype._distance = function(firstArray, secondArray) {
	var firstHalf = 0;
	for (var i = 0; i<firstArray.length; i++){
		firstHalf += Math.pow((firstArray[i]-secondArray[i]), 2)
	}
	return Math.sqrt(firstHalf);
};

KNN.prototype._distances = function(vector, trainingDataArray){
	var result = [];
	var self = this;
	trainingDataArray.forEach(function(dataPoint){
		result.push([self._distance(vector, dataPoint[0]), dataPoint[1]]);
	});
	return result;
}

KNN.prototype._sorted = function(distancesArray){
	return distancesArray.sort(function(a,b){
		return a[0] - b[0];
	}).map(function(elem){
		return elem[1];
	})
};

KNN.prototype._majority = function(k, array){
	var mode = function mode(arr) {
    var numMapping = {};
    var greatestFreq = 0;
    var mode;
    arr.forEach(function findMode(number) {
        numMapping[number] = (numMapping[number] || 0) + 1;

        if (greatestFreq < numMapping[number]) {
            greatestFreq = numMapping[number];
            mode = number;
        }
    });
    return +mode;
	}
	return mode(array.slice(0, k));
};

KNN.prototype.score = function(differentTestingData) {
	var testingVectors = differentTestingData.map(function(e){return e[0]})
	var testResults = this.predict(testingVectors);
	var resultSum = 0;
	for (var i = 0; i<testResults.length; i++){
		if (testResults[i] == differentTestingData[i][1]){
			resultSum++;
		}
	}
	return resultSum/(testResults.length);
};




module.exports = KNN