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
