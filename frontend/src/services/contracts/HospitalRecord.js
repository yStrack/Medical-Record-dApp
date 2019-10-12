export default {
  address: "0x25Df05014f65eaA01E0aede994b3Ed753FEe2C01",
  ABI: [
    {
      constant: false,
      inputs: [
        {
          internalType: "address",
          name: "newOwner",
          type: "address"
        }
      ],
      name: "changeOwner",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        {
          internalType: "string",
          name: "name",
          type: "string"
        },
        {
          internalType: "string",
          name: "cnpj",
          type: "string"
        },
        {
          internalType: "address",
          name: "hospAdd",
          type: "address"
        }
      ],
      name: "registerHospital",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        {
          internalType: "address",
          name: "hospAdd",
          type: "address"
        }
      ],
      name: "removeHospital",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
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
          name: "treatments",
          type: "string"
        },
        {
          internalType: "string",
          name: "medicationHistory",
          type: "string"
        },
        {
          internalType: "string",
          name: "allergies",
          type: "string"
        },
        {
          internalType: "uint256",
          name: "date",
          type: "uint256"
        }
      ],
      name: "setRecord",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "constructor"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "hospital",
          type: "address"
        }
      ],
      name: "removed",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "oldOwner",
          type: "address"
        },
        {
          indexed: false,
          internalType: "address",
          name: "newOwner",
          type: "address"
        }
      ],
      name: "ownerChanged",
      type: "event"
    },
    {
      constant: true,
      inputs: [
        {
          internalType: "address",
          name: "hospAdd",
          type: "address"
        }
      ],
      name: "getHospital",
      outputs: [
        {
          internalType: "string",
          name: "_name",
          type: "string"
        },
        {
          internalType: "string",
          name: "_cnpj",
          type: "string"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [
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
              components: [
                {
                  internalType: "string",
                  name: "name",
                  type: "string"
                },
                {
                  internalType: "string",
                  name: "cnpj",
                  type: "string"
                },
                {
                  internalType: "address",
                  name: "hospAdd",
                  type: "address"
                }
              ],
              internalType: "struct HospitalRecord.HospInfo",
              name: "responsibleHospital",
              type: "tuple"
            },
            {
              internalType: "string",
              name: "treatments",
              type: "string"
            },
            {
              internalType: "string",
              name: "medicationHistory",
              type: "string"
            },
            {
              internalType: "string",
              name: "allergies",
              type: "string"
            },
            {
              internalType: "uint256",
              name: "date",
              type: "uint256"
            }
          ],
          internalType: "struct HospitalRecord.Record",
          name: "",
          type: "tuple"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "listHospitals",
      outputs: [
        {
          internalType: "address[]",
          name: "",
          type: "address[]"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    }
  ]
};
