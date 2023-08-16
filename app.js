var items = {
    book1:["This was our pact",7,49],
    book2:["The famous five",4,59],
    book3:["Matlida",6,80],
    book4:["Harry Potter",10,0],
    book5:["For Young Readers",7,29],
    book6:["Wimpy Kid - DIY",4,99],
    game1:["Dart Board",17,49],
    game2:["Connect 4",19,99],
    game3:["Jenga",20,99],
    game4:["Monopoly",19,49],
    craft1:["Bookmarks",12,49],
    craft2:["Birthday card",19,99],
    craft3:["Stuffed toys",15,99],
    craft4:["Dream catcher drawing",18,49]
}

var cart = []
var totalItem = new Object
var dollar = 0
var cent = 0

document.querySelectorAll(".button").forEach((item)=>{
    item.addEventListener("click",(e)=>{
        if (!totalItem.hasOwnProperty(items[e.target.parentNode.id][0])){
            totalItem[items[e.target.parentNode.id][0]] = 1
        }else{
            totalItem[items[e.target.parentNode.id][0]] += 1
        }
        if (!cart.includes(items[e.target.parentNode.id][0])){
            cart.push(items[e.target.parentNode.id][0])
        }
        dollar += items[e.target.parentNode.id][1]
        cent += items[e.target.parentNode.id][2]
        if (cent>=100){
            var round = Math.floor(cent/100)
            dollar += round
            cent = cent%100
        }
    })})

document.querySelector("#cart").addEventListener("click",()=>{
    for (let i = 0; i<cart.length; i++){
        console.log("Item name: "+cart[i]+" - Quantity: "+totalItem[cart[i]])
    }
    console.log("The total amount is "+dollar+"$ and "+cent+"cents")
})