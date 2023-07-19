const fs = require('fs');

fs.readFile('./txt/input.in', {encoding:'utf-8',flag:'a+'}, (err, data) => {
    if (err) {
        console.log(err);
        return;
    } else {
        const sep = /[\r\n\s]+/;
        const v = data.split(sep).map((part) => part.trim());
        console.log(v);
    }
});

let content = "akdjsfkfa askdjf a\n asdkj fa adkjsf\n lkja  adksfjkldas ";
fs.writeFile('./txt/output.out', content, 'utf-8', (err) => { /* in the utf-8 section I can use  {encoding:'utf-8',flag:'a+'} */
    if (err) {
        console.error(err);
        return;
    }
    console.log('Written successfully!');
});
