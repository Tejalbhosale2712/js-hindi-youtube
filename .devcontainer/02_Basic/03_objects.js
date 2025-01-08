const JsUser={}
object literals
const mySym=Symbol("key1")
const JsUser={
    name:"Hitesh",
    "full name":"Hitesh chaodhary",
    age:18
    [mySym]:"myKey1",
    location:"Jaipur",
    email:"hitsh@gmail.com"
    isLoggedIn:false
    LastLoginDay:["Monday","Saturday"]
}
console.log(JsUser.email)
console.log(JsUser.["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])