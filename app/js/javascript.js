


var Calculator = function () {
    
    /**
     * metodo descripcion
     */
    this.calculateOperations = function () {
        arguments

        if(arguments.length==0)
        {
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
     * @param numbers
     * @param pos
     * @returns {*}
     */



     this.getSum = function(numbers,pos1){

         if(pos1 === undefined )
        {
         pos1= numbers.length-1;
        }

        if (pos1 === 0) {
            return numbers[pos1];
        }
        else {   
            return numbers[pos1] + this.getSum(numbers, pos1-1);
        }
      };


    this.getMax = function (numbers, pos,max) {
        if(pos === undefined )
        {
            pos= numbers.length - 1;
            max = numbers[pos];
        }
        if(max === undefined ||numbers[pos] > max )
        {
            max = numbers[pos];
        }
        if (pos == 0) {
            return max;
        }

        else
            {
                return this.getMax(numbers,pos-1,max)
            }
    };


    this.getMin = function (numbers, pos,min) {
        if(pos === undefined )
        {
            pos= numbers.length - 1;
            min = numbers[pos];
        }
        if(min === undefined ||numbers[pos] < min )
        {
            min = numbers[pos];
        }
        else

        if (pos == 0) {
            return min;
        }

        else
            {
                return this.getMin(numbers,pos-1,min)
            }
    };


    this.getaverage = function (numbers, pos,total) {

        if(pos === undefined )
        {
         pos= numbers.length - 1;
         total= numbers.length;
        }
      
        if (pos === 0) {
              return  numbers[pos]/total;
        }else {
          return numbers[pos] + this.getaverage(numbers, pos-1, total);
          }


        };
    

   


};



var calculator = new Calculator();

calculator.calculateOperations(11, 10, 3);

 calculator.getSum(1,2,3);
//calculator.getSum(1,2,3);









var getOddNumber = function (number) {
     var numbers = new Array();
    if(number%2==0)
    {
        for (var i=1; i <(number*2); i++) {
            if(i%2==0)
            {numbers.push(i);}
            else
            { continue;}
        }   
    }
    else
    {
         for (var i=1; i <(number*2); i++) {
            if(i%2!=0)
            {numbers.push(i);}
            else
            { continue;}
        }         
    }
    return numbers;
};
console.log("numero son1 : ", getOddNumber(3))


