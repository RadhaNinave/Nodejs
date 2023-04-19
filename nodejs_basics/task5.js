async function myPromise()
{
    console.log('a')
    console.log('b')
    let firstPromise = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('c')
        }, 1000);
    })
    let printC=await firstPromise;
    console.log(printC);
    let SecondPromise = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('d')
        }, 0);
    })
    let printD=await SecondPromise;
    console.log(printD);

    console.log('e')
    
}
myPromise();