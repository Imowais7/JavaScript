const mySymbol=Symbol("key1")
const JsUser={
    name:"Owais",
    [mySymbol]:"mykey1",
    age: 20,
    location:"pune",
    email:"owaisansari9860@gmail.com",
    isLoggedIn:false

}
console.log(JsUser["email"])
console.log(JsUser[mySymbol])
 
JsUser.email="owaisansari9860@gmail.com"
// Object.freeze(JsUser)
JsUser.greeting=function(){
    console.log ("hello Js user ")
}
console.log(JsUser.greeting())

JsUser.greeting2=function(){
    console.log (`helo js user ${this.name}`)
}
console.log(JsUser.greeting2())


