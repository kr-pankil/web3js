var Accounts = require('web3-eth-accounts')
require('dotenv').config()
var accounts = new Accounts("wss://polygon-mumbai.g.alchemy.com/v2/VjecCwN3_u_IP09Rgm5Ta_nDDdmSAOmM")

//create Account
// console.log("Account create", accounts.create())

let pk = process.env.pk
console.log("🚀 ~ file: accounts.js:9 ~ pk:", pk)
console.log("privateKeyToAccount", accounts.privateKeyToAccount(pk))


let tx = {
    to : "0x0F2eC1C2fc9A4D35510c47899466A69Ce309f076",
    value: '1000000000',
    gas: 2000000
}

accounts.signTransaction(tx, pk).then(signTX => {
    console.log("signTX:", signTX)
})

console.log("recoverTx: ", accounts.recoverTransaction("0xf86d8201158459682f0f831e8480940f2ec1c2fc9a4d35510c47899466a69ce309f076843b9aca008083027126a0d3e502c7e7e79b8fd0a905cc0272eced29652d1f8fc45412eb6b0232106f72baa028db05aa090199e1f8d58c91affa6ef3361330e4c106e26fa87bb1896d7af13b"))

console.log("new Account: ", accounts.create())

console.log("hashMessage", accounts.hashMessage("Hello World!"))
