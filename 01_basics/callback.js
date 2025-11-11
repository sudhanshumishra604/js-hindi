function getdata(dataid,getnextdata){
    setTimeout(() => {
        console.log("data is fetched for id:",dataid);
        if(getnextdata){
            getnextdata();
        }
    },3000);
}


// CALLBACK HELL

getdata(1,() =>{
    console.log("1st call completed");
    getdata(2,() =>{
        console.log("2nd call completed");
        getdata(3,() =>{
            console.log("3rd call completed");
            getdata(4,() =>{
                console.log("4th call completed");
            })
        })
    })
})