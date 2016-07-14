var fs = require("fs");
var readline = require("readline");

function validateResult(resultLine) {
    // the first attribute is the true category, the second attribute is the identified category, if they match, the result is correct.
    resultLine = resultLine.split(" ");
    return resultLine[0] == resultLine[1]


}

function d3Visualize(resultFileName) {
    // 创建可读流,设置编码为 utf8。
    var rl = readline.createInterface({
      input: fs.createReadStream(resultFileName).setEncoding('UTF8');
    });

    var correct = 0;
    var incorrect = 0;

    rl.on('line', (line) => {
        console.log('Line from file:', line);
        validateResult(line);
    }

    console.log("程序执行完毕");

}

module.exports = d3Visualize;
