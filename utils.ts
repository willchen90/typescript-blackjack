export default class Utils {
	static multipop = function (array: any[], numberOfTimes: number) {
		let results = [];
		for (var i = 0; i < numberOfTimes; i++) {
			results.push(array.pop());
		}
		return results;
	}
}