export default {
  address: "0xfda07c185858a581c6b530e3dfe1fe7c2415a8cf",
  ABI: [
    {
      constant: false,
      inputs: [
        {
          internalType: "string",
          name: "patientID",
          type: "string"
        },
        {
          internalType: "string",
          name: "hospitalName",
          type: "string"
        },
        {
          internalType: "string",
          name: "record",
          type: "string"
        },
        {
          internalType: "string",
          name: "exams",
          type: "string"
        },
        {
          internalType: "string",
          name: "medicines",
          type: "string"
        }
      ],
      name: "setRecord",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: true,
      inputs: [
        {
          internalType: "uint256",
          name: "id",
          type: "uint256"
        },
        {
          internalType: "string",
          name: "patientID",
          type: "string"
        }
      ],
      name: "getRecord",
      outputs: [
        {
          components: [
            {
              internalType: "string",
              name: "hospitalName",
              type: "string"
            },
            {
              internalType: "address",
              name: "hospitalAdd",
              type: "address"
            },
            {
              internalType: "string",
              name: "record",
              type: "string"
            },
            {
              internalType: "string",
              name: "exams",
              type: "string"
            },
            {
              internalType: "string",
              name: "medicines",
              type: "string"
            }
          ],
          internalType: "struct PatientRecord.Record[]",
          name: "",
          type: "tuple[]"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    }
  ]
};

// const nodeConnect = () => {
//   const contract = null;
//   // Network connection
//   if (window.ethereum) {
//     window.ethereum.autoRefreshOnNetworkChange = false;

//     window.web3 = new Web3(window.ethereum);
//     try {
//       // Request account access if needed
//       // Accounts now exposed
//       window.ethereum.enable().then(
//         window.web3.eth.getCoinbase(function(a, coinbase) {
//           window.coinbase = coinbase;
//           console.log("window.coinbase:", window.coinbase);
//         })
//       );
//       contract = new window.web3.eth.Contract(contractABI, contractAddress);
//       console.log(121, contract);
//     } catch (error) {
//       // User denied account access...
//     }
//     return contract;
//   } // Legacy dapp browsers...
//   else if (window.web3) {
//     window.web3 = new Web3(window.web3.currentProvider);
//     // Acccounts always exposed
//     window.web3.eth.getAccounts(acc => {
//       console.log(acc);
//     });
//   }
//   // Non-dapp browsers...
//   else {
//     console.log(
//       "Non-Ethereum browser detected. You should consider trying MetaMask!"
//     );
//   }
//   return contract;
// };

// export default nodeConnect;
