
const p1 = new Promise((resolve) => {
    setTimeout(()=>{
        console.log('first promise'); 
        resolve(1);
    }, 2000);
})

const p2 = new Promise((resolve , reject) => {
    setTimeout(()=>{
        console.log('second promise'); 
        reject('shuvo');
    }, 2000);
})

Promise.race([p1,p2]).then((result)=>{
    console.log(result);
}).catch(err => console.log(err));