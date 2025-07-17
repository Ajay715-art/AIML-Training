/*function getdata(data,nextdata){
    setTimeout(() => {
        console.log(data);
        if(nextdata){
            nextdata();
        }
}, 5000);
}
getdata(1,() => {
    console.log("fetching data 1");
    getdata(2,() => {
        console.log("fetching data 2");      
    });
});*/

/*let p= new Promise((resolve,reject) => {
    console.log("Hello");
});*/

/*let p= new Promise((resolve,reject) => {
    reject("code is not getting executed");
    });
    console.log(p);*/

/*let p= new promise((resolve,reject) => {
    let d=8;
    if(d===5){
        resolve("success");
    }
    else{
        reject("not siccessful");
    }
});*/

/*let o=new Promise((resolve,reject) =>{
let g=10;
if(g===10){
    resolve("success");
}
else{
    reject("not sucess");    }});


let p= new Promise((resolve,reject) =>{
let f=true;
if(f===true){
    resolve("done");
}
else{
    reject("undone");
}
});
console.log(p);
p
.then((data)=>{
console.log("successful");
})
.catch((error)=>{
console.log("error");
})*/

/*let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        let t = true;
        if (t) {
            resolve("success");
        }
        else {
            reject("unsuccessful");
        }
    }, 5000);
})
console.log(p);
p
    .then((data) => {
        console.log("promise resolved with data:", data);
        console.log(p);
    })
    .catch((error) => {
        console.log("promise rejected with error:", error);
    });*/

/*function f() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let t = true;
            if (t) {
                resolve("success");
            }
            else {
                reject("unseccessful");
            }
        }, 5000);
    })
}
f()
    .then((data) => {
        console.log("promise resolved with data:", data);
    })
    .catch((error) => {
        console.log("promise rejected with error:", error);
    });*/

/*function async() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let t = true;
            if (t) {
                resolve("success");
            }
            else {
                reject("unseccessful");
            }
        }, 5000);
    })
}
async()
    .then((data) => {
        console.log("promise resolved with data:", data);
    })
    .catch((error) => {
        console.log("promise rejected with error:", error);
    });
function asyncFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let t = false;
            if (t) {
                resolve("asyncFunc1 success");
            } else {
                reject("asyncFunc1 unsuccessful");
            }
        }, 3000);
    });
}
asyncFunc1()
    .then((data) => {
        console.log("asyncFunc1 resolved with data:", data);
    })
    .catch((error) => {
        console.log("asyncFunc1 rejected with error:", error);
    });*/

/*function getdata(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetching data for id:", dataId);
      if (dataId <= 103) resolve("success");
      else {
        reject("unsuccessful");
      }
    }, 2000);
  });
}
getdata(101)
  .then((res) => {
    return getdata(102);
  })
  .then((res) => {
    return getdata(103);
  })
  .then((res) => {
    return getdata(104);
  })
  .then((res) => {
    console.log("All data fetched successfully");
  })
  .catch((error) => {
    console.log("Error fetching data:", error);
  });*/


  async function a(){
    console.log("Hello");
  }
  let p=a();
  console.log(p); 