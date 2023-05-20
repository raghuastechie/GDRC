function dbConnect(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('dbGotConnected..');
            let msg  = {message: 'dbConnected'};
            resolve(msg)
        }, 4000);
    })
};
function resultFetch(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('resultFetched..');
            let msg = {message: 'restulFetched'};
            resolve(msg);
        }, 1000);
    })
};

async function doRun(){
    let first = await dbConnect();
    console.log(first);
    let second = await resultFetch();
    console.log(second);
}
doRun();