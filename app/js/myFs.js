

	

var myFs = function(){
	//Constructor
};

	
	myFs.prototype.readFileSync = function(fileName){
    var content = fs.readFileSync(fileName).toString();
    return content;
},

	myFs.prototype.readFile=function(fileName){	
	fs.readFile(fileName,function(err, data){
    if (err) throw 'Error while reading the file';
    
	
	var content = data.toString();
	var numLines = content.split('\n').length;
	
	console.log('CONTENT for file', fileName, 'has: ', numLines, 'Lines');
 });
}
module.exports = myFs;

