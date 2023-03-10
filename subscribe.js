const  Web3 = require("web3")

var web3 = new Web3()
console.log("🚀 ~ file: subscribe.js:4 ~ web3", web3)

let subscription = web3.eth.subscribe('pendingTransactions',function(error, result){
    if (!error)
        console.log(result);
})
.on("data", function(transaction){
    console.log(transaction);
});
subscription.unsubscribe(function(error, success){
    if(success)
        console.log('Successfully unsubscribed!');
});