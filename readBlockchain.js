const { ethers } = require("ethers");
const provider = new ethers.providers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/b9b977435f6045dca83a8df41dea0711`
);

const querryBlockchain = async () => {
    //getting blocknumber
     const block = await provider.getBlockNumber();
     console.log("Current Block Number:", block);

     //getting balance of a particular account
     const balance=await provider.getBalance("0x466893e0caD8Db28109DEF6C5901468e12AeE988");
     const ethrbalance=ethers.utils.formatEther(balance);
    // var balance2=balance/BigInt(1e18);
     console.log("the balance in ether is = ",ethrbalance);
}
querryBlockchain();

