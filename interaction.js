//0x6cd32b69ebbd603882ed1a7fe1db7cc95c3ad342
const { ethers } = require("ethers");
const provider = new ethers.providers.JsonRpcProvider(
    `https://sepolia.infura.io/v3/b9b977435f6045dca83a8df41dea0711`
    );

const walletAddress = "0x417997417dd95f45bb4986abff5dfae5b5b0a34a";
const walletAbi = [
	{
		"inputs": [],
		"name": "sendEthContract",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "sendEthUser",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_num",
				"type": "uint256"
			}
		],
		"name": "setValue",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "accountBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "contractBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getValue",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

const contractIntreaction = async () => {
    const walletContract = new ethers.Contract(
      walletAddress,
      walletAbi,
      provider
    );

     const contractName = await walletContract.name();
     console.log("Contract Name:", contractName);

     const num = await walletContract.getValue();
     console.log("Number Value:", String(num));

     const cntrctbalance= await walletContract.accountBalance(
        "0xbF7110b27c9EDAEeD0549900566E4547c8A49549"
        );
     console.log("Contract balance is : ",ethers.utils.formatEther(cntrctbalance));


};

contractIntreaction();