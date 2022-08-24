const { readFile, writeFile } = require('fs');

console.log('Start');

readFile('./4-Content/5-firstFile.txt', 'utf8', (err, result) => {

    if(err){
        console.log(err)
        return
    }

    const firstFile = result

    readFile('./4-Content/5-secondFile.txt', 'utf8', (err, result) => {
        if(err){
            console.log(err)
            return
        }
    
        const secondFile = result

        writeFile(
            './4-Content/5-write-async.txt',
            `Conversation of two file: \n${firstFile} \n${secondFile}`,
            (err, result) => {
                if (err) {
                    console.log(err)
                    return
                  }
                  console.log('done with this task')
            }    
        )
    })
});
console.log('starting next task')