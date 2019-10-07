const web3 = require("web3");

const contractABI = [
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
];

const contractAddress = "0xfda07c185858a581c6b530e3dfe1fe7c2415a8cf";
if (typeof web3 !== "undefined") {
  // Mist, Metamask
  web3js = new web3(web3.currentProvider);
  console.log(web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  web3js = new web3(new web3.providers.HttpProvider("http://localhost:3333"));
}
// web3js.eth.getBalance(web3js.eth.accounts[0], function(error, result) {
//   if (error) {
//     console.error(error);
//   } else {
//     document.getElementById("myBalance").innerText = web3js.fromWei(
//       result.toNumber()
//     );
//   }
// });
// web3js.eth.getAccounts(console.log);

/*
web3js = new web3(
  new web3.providers.HttpProvider(
    `ropsten.infura.io/v3/b6e273fcbc1c43d7a2d74779c9dde44c`
  )
);

const PatientRecord = new web3js.eth.Contract(contractABI, contractAddress);
*/
