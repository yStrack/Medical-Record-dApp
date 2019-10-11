pragma solidity ^0.5.11;
import "./Hospital.sol";

pragma experimental ABIEncoderV2;

contract PatientRecord is Hospital{
    struct Record{
        HospInfo responsibleHospital; // name, CNPJ and address
        string doctorName; // name of the doctor
        string description; // doctor observations
        string exams; // requested exams
        string medicines; // medicines
        uint height; // patient height
        uint weight; // patient weight
        uint256 date; // register date
        string bloodPressuare;
        string allergies;
    }

    // records[patientID] = [record1,record2,...]
    mapping(string => Record[]) records;
    address contractOwner; // business owner

    constructor() public{
        contractOwner = msg.sender;
    }

    function setRecord(string memory patientID, address hospAdd,string memory doctorName,
    string memory description, string memory exams, string memory medicines, uint height,
    uint weight, uint256 date, string memory bloodPreassure, string memory allergies)
    public{
        string memory hName;
        string memory hCNPJ;
        (hName,hCNPJ,hospAdd) = Hospital.getHospital(hospAdd);
        HospInfo memory h = HospInfo(hName, hCNPJ, hospAdd);
        records[patientID].push(Record(h,doctorName,description,exams,medicines, height, weight,date,bloodPreassure,allergies));
    }
    function getRecord(string memory patientID) public view returns(Record[] memory){
        Record[] memory r = new Record[](records[patientID].length);
        for (uint i = 0; i < r.length; i++){
            r[i] = records[patientID][i];
        }
        return r;
    }
}