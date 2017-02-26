new Promise(function (resolve, reject) {
    let bb = true;
    if (bb) {
        resolve(bb);
    } else {
        reject(bb)
    }
}).then(function (b) {
    console.log(b)
}).catch(function (b) {
    console.log(b)
});