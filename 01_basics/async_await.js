function datas(dataid){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            console.log("data is fetched for id:",dataid);
            resolve("SUCCESS");
        },4000);
    });
}

async function getdata(){
   // console.log("FETCHING DATA...");
    await datas(123);
    await datas(456);
    await datas(789);
}