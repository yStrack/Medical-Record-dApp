export default {
  address: "0x09bA1c4a4f8c5082DDC9323c389497892F68701b",
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
      constant: false,
      inputs: [
        {
          internalType: "string",
          name: "patientID",
          type: "string"
        },
        {
          internalType: "string",
          name: "doctorName",
          type: "string"
        },
        {
          internalType: "string",
          name: "description",
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
        },
        {
          internalType: "uint256",
          name: "height",
          type: "uint256"
        },
        {
          internalType: "uint256",
          name: "weight",
          type: "uint256"
        },
        {
          internalType: "uint256",
          name: "bodyTemperature",
          type: "uint256"
        },
        {
          internalType: "string",
          name: "bloodPreassure",
          type: "string"
        },
        {
          internalType: "uint256",
          name: "date",
          type: "uint256"
        }
      ],
      name: "setReport",
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
      inputs: [
        {
          internalType: "string",
          name: "patientID",
          type: "string"
        }
      ],
      name: "getReports",
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
              name: "doctorName",
              type: "string"
            },
            {
              internalType: "string",
              name: "description",
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
            },
            {
              internalType: "uint256",
              name: "height",
              type: "uint256"
            },
            {
              internalType: "uint256",
              name: "weight",
              type: "uint256"
            },
            {
              internalType: "uint256",
              name: "bodyTemperature",
              type: "uint256"
            },
            {
              internalType: "string",
              name: "bloodPressuare",
              type: "string"
            },
            {
              internalType: "uint256",
              name: "date",
              type: "uint256"
            }
          ],
          internalType: "struct HospitalRecord.Report[]",
          name: "",
          type: "tuple[]"
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
