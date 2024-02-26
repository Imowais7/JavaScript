const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="Sammay"
tinderUser.isLoggedIn=false
// console.log(tinderUser)



const regularUser={
    email:"owaisansari9860@gmail.com",
    fullname:{
        userfullname:{
            firstname:"owais",
            lastname: "ansari"
        }
    }

}
// console.log(regularUser.fullname.userfullname.lastname)
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

const obj3=Object.assign({}, obj1, obj2)
// console.log(obj3)

const user=[
    {
        id:1,
        email:"owaisansari@u8toiwr"
    },
    {
        id:1,
        email:"owaisansari@u8toiwr"
    },
    {
        id:1,
        email:"owaisansari@u8toiwr"
    },
    {
        id:1,
        email:"owaisansari@u8toiwr"
    },
]
console.log(user[1].email)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))