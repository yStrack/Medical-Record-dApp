pragma solidity ^0.5.11;
import "./Hospital.sol";

pragma experimental ABIEncoderV2;

contract PatientRecord is Hospital{
    // hospital record of a patient
    struct Record{
        HospInfo responsibleHospital; // hospital that made/updated the record
        string treatments; // previus patient treatments
        string medicationHistory;
        string allergies;
        uint256 date; // register date;
    }

    // doctor report for a hospital visit
    struct Report{
        HospInfo responsibleHospital; // name, CNPJ and address
        string doctorName; // name of the doctor
        string description; // doctor observations
        string exams; // requested exams
        string medicines; // medicines
        uint height; // patient height
        uint weight; // patient weight
        uint bodyTemperature;
        string bloodPressuare;
        uint256 date; // register date
    }

    // records[patientID] = [record1,record2,...]
    mapping(string => Report[]) reports; // medical report for each hospital visit
    mapping(string => Record) patientRecord;
    // // allowerd[patiendID] = [hospital1,hospital2,...]
    // mapping(string => HospInfo) allowedHospitals; // hospitals that can access patient info
    address Owner; // business owner

    constructor() public{
        Owner = msg.sender;
    }

    function setReport(string memory patientID, string memory doctorName,
    string memory description, string memory exams, string memory medicines, uint height,
    uint weight, uint bodyTemperature, string memory bloodPreassure, uint256 date)
    public isRegistered(msg.sender){
        string memory hName;
        string memory hCNPJ;
        (hName,hCNPJ) = Hospital.getHospital(msg.sender);
        HospInfo memory h = HospInfo(hName, hCNPJ, msg.sender);
        reports[patientID].push(Report(h,doctorName,description,exams,medicines, height, weight,bodyTemperature,bloodPreassure,date));
    }

    function getReports(string memory patientID) public view isRegistered(msg.sender) returns(Report[] memory){
        Report[] memory r = new Report[](reports[patientID].length);
        for (uint i = 0; i < r.length; i++){
            r[i] = reports[patientID][i];
        }
        return r;
    }

    function setRecord(string memory patientID, string memory treatments, string memory medicationHistory, string memory allergies, uint256 date)
    public isRegistered(msg.sender){
        string memory hName;
        string memory hCNPJ;
        (hName,hCNPJ) = Hospital.getHospital(msg.sender);
        HospInfo memory h = HospInfo(hName, hCNPJ, msg.sender);
        patientRecord[patientID] = Record(h,treatments,medicationHistory,allergies,date);
    }

    function getRecord(string memory patientID) public view isRegistered(msg.sender) returns(Record memory){
        return patientRecord[patientID];
    }

    function newOwner(address owner) public{
        require(msg.sender == Owner, "Only owner has permission to set a new owner");
        Owner = owner;
    }
}