const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider(
    `https://sepolia.infura.io/v3/b9b977435f6045dca83a8df41dea0711`
    );

const account1 = '0xbF7110b27c9EDAEeD0549900566E4547c8A49549'; // Your account address 1
const account2 = '0x6Da859A575718cE793e345D072f850a70b835c4b'; // Your account address 2

const privateKey1 = 'dc4303f65c63d4fea508c0e8847c7158b277b47fec1e6b2a018ce019a55c5b75'; // Private key of account 1
const wallet = new ethers.Wallet(privateKey1, provider);

const main = async () => {
    const senderBalanceBefore = await provider.getBalance(account1);
    const recieverBalanceBefore = await provider.getBalance(account2);

    console.log(`\nSender balance after: ${ethers.utils.formatEther(senderBalanceBefore)}`)
    console.log(`reciever balance after: ${ethers.utils.formatEther(recieverBalanceBefore)}\n`)
    

    const tx = await wallet.sendTransaction({
        to: account2,
        value: ethers.utils.parseEther("0.02")
    })

    await tx.wait()
    console.log(tx)

    const senderBalanceAfter = await provider.getBalance(account1);
    const recieverBalanceAfter = await provider.getBalance(account2);

    console.log(`\nSender balance after: ${ethers.utils.formatEther(senderBalanceAfter)}`)
    console.log(`reciever balance after: ${ethers.utils.formatEther(recieverBalanceAfter)}\n`)
}

main()