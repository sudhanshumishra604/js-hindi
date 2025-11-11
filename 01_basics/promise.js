function getdata(dataID){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            console.log("DATA FETCHED FOR ID:",dataID);
           // resolve("SUCCESS");
            reject("ERROR OCCURED");
        },4000);
    });
}

let promise = getdata(123);

//promise.then((value) =>{
 //   console.log("PROMISE RESOLVED WITH VALUE:",value);
//});

promise.catch((err) =>{
    console.log("PROMISE REJECTED WITH ERROR:",err);
});
