
/*Class Calculator
* */

var Calculator = function () {

    /**
     *Constructor of the class Calculator
     */
    this.calculateOperations = function () {
        arguments

        if (arguments.length == 0) {
            throw   "cannot do the evaluation without params";
        }
        // var number= arguments;
        console.log('the max argument is', this.getMax(arguments));
        console.log('the min argument is', this.getMin(arguments));
        console.log('the sum is', this.getSum(arguments));
        console.log('the average is ', this.getaverage(arguments));

        // console.log(number,arguments);
    };
    /**
     *
     * @param Public method add
     * @param  an array of numbers
     * @returns return the sum of the numbers
     */
    this.getSum = function () {
        if (typeof(arguments[0]) == 'object') {
            return adition(arguments[0]);
        }
        return adition(arguments);
    }
    /**
     *
     * @param Private method add
     * @param  an array of numbers
     * @returns return the sum of the numbers
     */
     var adition = function (numbers, pos1) {

        if (pos1 === undefined) {
            pos1 = numbers.length - 1;
        }

        if (pos1 === 0) {
            return numbers[pos1];
        }
        else {
            return numbers[pos1] + adition(numbers, pos1 - 1);
        }
    };
    /**
     *
     * @param Public method getMax
     * @param  an array of numbers
     * @returns Return the max number of the array
     */
    this.getMax = function () {
        if (typeof(arguments[0]) == 'object') {
            return getMax1(arguments[0]);
        }
        return getMax1(arguments);
    }
    /**
     *
     * @param Private method getMax
     * @param  an array of numbers
     * @returns Return the max number of the array
     */
    var getMax1 = function (numbers, pos, max) {
        if (pos === undefined) {
            pos = numbers.length - 1;
            max = numbers[pos];
        }
        if (max === undefined || numbers[pos] > max) {
            max = numbers[pos];
        }
        if (pos == 0) {
            return max;
        }
        else {
            return getMax1(numbers, pos - 1, max)
        }
    };

    /**
     *
     * @param Private method getMin
     * @param  an array of numbers
     * @returns Return the min number of the array
     */
    this.getMin = function () {
        if (typeof(arguments[0]) == 'object') {
            return min(arguments[0]);
        }
        return min(arguments);
    }
    /**
     *
     * @param Private method getMax
     * @param  an array of numbers
     * @returns Return the max number of the array
     */
    var min = function (numbers, pos, minor) {
        if(pos === undefined){
            pos = numbers.length - 1;
        }
        if (minor === undefined || numbers[pos] < minor) {
            minor = numbers[pos];
        }
        if (pos == 0) {
            return minor;
        }
        else {
            return min(numbers, pos-1, minor);
        }
    };
    /**
     *
     * @param Public method getaverage
     * @param  an array of numbers
     * @returns Return the average number of the array
     */
    this.getaverage = function () {
        if (typeof(arguments[0]) == 'object') {
            return average(arguments[0]);
        }
        return average(arguments);
    }
    /**
     *
     * @param Private method getMax
     * @param  an array of numbers
     * @returns Return the average number of the array
     */
    var average = function (numbers, pos) {

        if (pos === undefined) {
            pos = numbers.length - 1;
        }
        if (pos === 0) {
            return numbers[pos] / numbers.length;
        }
        else {
            return numbers[pos] + average(numbers, pos - 1) / numbers.length;
        }
    };
};

/**
 * initialize the class Calculator
 */
var calculator = new Calculator();
calculator.calculateOperations(11, 10, 3);
calculator.getSum(1,2,3);
//calculator.getSum(1,2,3);



/**
 *
 * @param Private method getOddNumber
 * @param  an number that show the number depending on whether the entered number is even or odd
 * @returns Return  numbers in an array
 */

var getOddNumber = function (number) {
    var numbers = new Array();
    if (number % 2 == 0) {
        for (var i = 1; i <= (number * 2); i++) {
            if (i % 2 == 0) {
                numbers.push(i);
            }
            else {
                continue;
            }
        }
    }
    else {
        for (var i = 1; i < (number * 2); i++) {
            if (i % 2 != 0) {
                numbers.push(i);
            }
            else {
                continue;
            }
        }
    }
    return numbers;
};
console.log("the numbers are : ", getOddNumber(6))


