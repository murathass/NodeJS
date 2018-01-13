const fs = require('fs');
const os = require('os');
const test = require('./test.js');
const _ = require('lodash');

fs.appendFile('test.txt','Merhabalar ...\n',function(error){
    if(error){
        console.log(error);
    }
});

var username = os.userInfo().username;

var sum = test.test2Function(2,3);

console.log(sum);
fs.appendFileSync('test.txt',username);

console.log(_.isString(_));

console.log(_.uniq(['test',1,'test1',2,'test',5,'ta',4]));

