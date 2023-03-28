var Contract = require('web3-eth-contract')
var assetABI = require("./abi/demoABI.json")
Contract.setProvider("wss://polygon-mumbai.g.alchemy.com/v2/VjecCwN3_u_IP09Rgm5Ta_nDDdmSAOmM")

var contract = new Contract(assetABI, "0x8F422A5007E7eD5A1CcA0FaE431cA6339780607b")
console.log("🚀 ~ file: contract.js:6 ~ contract:", contract)


contract.defaultAccount = "0x8F422A5007E7eD5A1CcA0FaE431cA6339780607b"
console.log("🚀 ~ file: contract.js:11 ~ contract.defaultAccount:", contract.defaultAccount)

contract.methods.getGameID().call().then(gameID => {
    console.log("gameID: ", gameID)
})

let contractClone = contract.clone()
console.log("contractClone: ", contractClone)

contractClone.methods.getGameID().estimateGas({
    from: '0x4cb2B9c5828Ddd4C4ADb6B87af62d33F9d8c28D9'
}).then(gas => console.log("estimateGas:", gas))
.catch(console.log)

console.log("encodeABI: ",contractClone.methods.getGameID().encodeABI())
