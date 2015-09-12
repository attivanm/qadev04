




var myFs = require('./MyFs.js'); 

	var task=new myFs();
	console.log('Content for file sum.js is: ', task.readFile('sum.js'));
	console.log('Content for file sum.js is: ',task.readFileSync('sum.js'));



