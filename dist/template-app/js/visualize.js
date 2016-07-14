var fs = require("fs");
var readline = require("readline");
var path = require('path');

function validateResult(resultLine) {
    // the first attribute is the true category, the second attribute is the identified category, if they match, the result is correct.
    resultLine = resultLine.split(" ");
    return resultLine[0] == resultLine[1]


}

function d3Visualize() {
    // get dialog
    const ipc = require('electron').ipcRenderer

    const selectDirBtn = document.getElementById('select-directory')

    selectDirBtn.addEventListener('click', function (event) {
      ipc.send('open-file-dialog')
    })

    ipc.on('selected-directory', function (event, filepath) {
      // document.getElementById('selected-file').innerHTML = `You selected: ${path}`
      document.getElementById('selected-file').innerHTML = `You selected: ${filepath}`
    // 创建可读流,设置编码为 utf8。
    console.log(filepath);
    resultFileName = path.join(filepath[0], 'result-noise.txt');
    console.log(resultFileName);
    var rl = readline.createInterface({
      input: fs.createReadStream(resultFileName)
    });

    var correct = 0;
    var incorrect = 0;

    rl.on('line', (line) => {
        console.log('Line from file:', line);
        if (validateResult(line)) {
            correct++;
        } else {
            incorrect++;
        }
    });

    rl.on('close', () => {

    console.log("correct:", correct, "\tincorrect:", incorrect);

    console.log("Success rate: ", correct/(correct + incorrect));
    });


    })

}

d3Visualize();
