const  Web3 = require("web3")

var web3 = new Web3("wss://polygon-mumbai.g.alchemy.com/v2/VjecCwN3_u_IP09Rgm5Ta_nDDdmSAOmM")
// console.log("🚀 ~ file: subscribe.js:4 ~ web3", web3)


//newBlockHeaders
//pendingTransactions
//syncing
//logs
let subscription = web3.eth.subscribe('syncing',function(error, result){
    if (error)
        console.log(error);
})
.on("data", function(transaction){
    console.log(transaction);
    // web3.eth.clearSubscriptions()
    // subscription.unsubscribe(function(error, success){
    //     if(success)
    //         console.log('Successfully unsubscribed!');
    // });
});

