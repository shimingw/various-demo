setTimeout(() => {
    new Promise((res)=>{
        console.log(1);
        res()
    }).then(()=>{
        console.log(2)
    })
}, 2000);
setTimeout(() => {
    console.log(3);
}, 2000);