function print (x) {
    console.log(x);
}

fetch("http://api.open-notify.org/astros.json")
.then((res)=>{return res.json()})
.then(function (data) {
    console.log(data)
    console.log(`Holy cow! There are ${data["number"]} humans in space.`);
    console.log(`${data["message"]}`)
},
    
    
    )
