const  Web3 = require("web3")
require('dotenv').config()

//methods to connect with RPC provider
// var web3 = new Web3(new Web3.providers.HttpProvider('https://polygon-rpc.com/')) //http provider
//or
var web3 = new Web3(new Web3.providers.WebsocketProvider('wss://polygon-mumbai.g.alchemy.com/v2/-pJy-eYDO2lBfB4ljuFthHu5CQDujQJU')) //ws provider
// console.log("🚀 ~ file: index.js:7 ~ web3:", web3)
// or
// var web3 = new Web3('wss://polygon-mumbai.g.alchemy.com/v2/VjecCwN3_u_IP09Rgm5Ta_nDDdmSAOmM') //http or ws provider

//change provider
// web3.setProvider('wss://polygon-mumbai.g.alchemy.com/v2/VjecCwN3_u_IP09Rgm5Ta_nDDdmSAOmM')

let tx = {
    from: "0x4cb2B9c5828Ddd4C4ADb6B87af62d33F9d8c28D9",
    to: "0x0F2eC1C2fc9A4D35510c47899466A69Ce309f076",
    value: '1000000000000000',
    'gas': 30000
}

web3.eth.accounts.signTransaction(tx, process.env.pk).then(signedTx => {
    console.log("receipt of tx", signedTx)
    web3.eth.sendSignedTransaction(signedTx.rawTransaction)
    .then(receipt => {
        console.log(receipt)
    })
})
.catch(e => {
    console.log("error", e)
})