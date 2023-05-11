//Multi Sender Contract
const contract = {
    address: '0x0A784A1e87bb94b36F88392d75b97F4D6Bdaa28E',
    abi: [
            {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "address payable[]",
          "name": "addrs",
          "type": "address[]"
        },
        {
          "internalType": "uint256[]",
          "name": "amounts",
          "type": "uint256[]"
        },
        {
          "internalType": "address",
          "name": "_token",
          "type": "address"
        }
      ],
      "name": "multiSender",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }

    ]
}

export default contract;
