/*let form = document.getElementById('form')
let button = document.getElementById('buttons')
let mobile = document.getElementById('mobile')
let password = document.getElementById('password')
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let name = mobile.value
    let passwor = password.value
    console.log(name,passwor)
    //
    //await fetch("http://localhost:3002/")
    //json = await resp.json()
    //console.log(json)
    //async function fun(){
        const resp = await fetch('http://localhost:3002/',{
        method:"POST",
        body:JSON.stringify({username:name,userpass:passwor})
        })
        let json = await resp.json()
        console.log(json)
    }
    fun()
})*/
alert('welcome')
