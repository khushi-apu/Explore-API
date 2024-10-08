const user = {id:1, name:'Gorib Amir', job:'actor'}
 const stringified=JSON.stringify(user)
// console.log(user) 
//  console.log(stringified);

 const shop=
{
    owner:'Alia',
    address:
    {
        street:'everyone are same',
        city:'ranbir',
        countery:'bd'
    },
    products: ['laptop', 'mic' , 'monitor'],
    revenue:45200,
    isOpen: true,
    isNew: false
}

console.log(shop)
const shopJSON = JSON.stringify(shop)
console.log(shopJSON)
const shopObj=JSON.parse(shopJSON)
console.log(shopObj)