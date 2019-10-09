const fs = require("fs");
const readData = fs.createReadStream(process.argv[3],"utf8");
let chunkNumber = 1;
let word = process.argv[2];
 
let counter=0;

readData.on("data", chunk =>{
    console.log(`Reading chunk  ${chunkNumber} `);
    chunkNumber++;
    // let searchWord= chunk.includes(word)
    // if (searchWord === true) counter++;
    let arr = chunk.toLowerCase().split(word);
    counter += arr.length - 1;
});

readData.on("end", chunk => {
    
    console.log("END OF DATA");
    console.log(`Number of Chunks : ${chunkNumber-1}`)
    console.log(`Found ${word} ${counter} times`)
});