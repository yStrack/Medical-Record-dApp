pragma solidity ^0.5.11;
pragma experimental ABIEncoderV2;

contract HospitalRecord{
    struct HospInfo{
        string name;
        string cnpj;
        address hospAdd;
    }

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

    // reports[patientID] = [record1,record2,...]
    mapping(string => Report[]) reports; // medical report for each hospital visit
    // patientRecord[patientID] = Record
    mapping(string => Record) patientRecord;

    address contractOwner;
    mapping(address => HospInfo) registeredHosp;
    address[] hospitals; // array of registered hospitals address

    constructor() public{
        contractOwner = msg.sender;
    }
    // emited when a hospital is removed
    event removed(address hospital);
    // emited when business owner change
    event ownerChanged(address oldOwner, address newOwner);

    // Only allow the owner to do something
    modifier isOwner(address sender){
        require(sender == contractOwner, "Only the contract onwer can register new hospitals");
        _;
    }

    // Check if the hospital is not registered yet
    modifier notRegistered(address hospital){
        bool flag = false;
        for (uint i = 0 ; i < hospitals.length ; i++){
            if(hospitals[i] == hospital){
                flag = true;
                break;
            }
        }
        require(flag == false, "Hospital already registered");
        _;
    }

    // Check if the hospital is already registered
    modifier isRegistered(address hospital){
        bool flag = false;
        for (uint i = 0 ; i < hospitals.length ; i++){
            if(hospitals[i] == hospital){
                flag = true;
                break;
            }
        }
        require(flag == true, "Hospital not registered");
        _;
    }

    // Register a new hospital to the network
    function registerHospital(string memory name, string memory cnpj, address hospAdd) public isOwner(msg.sender) notRegistered(hospAdd){
        registeredHosp[hospAdd].name = name;
        registeredHosp[hospAdd].cnpj = cnpj;
        registeredHosp[hospAdd].hospAdd = hospAdd;
        hospitals.push(hospAdd);
    }

    // Get hospital infos based on their PK
    function returnHospital(address hospAdd) private view isRegistered(hospAdd)
    returns (HospInfo memory h){
        h = registeredHosp[hospAdd];
    }

    // Get hospital infos based on their PK
    function getHospital(address hospAdd) public view isRegistered(hospAdd)
    returns (string memory _name, string memory _cnpj){
        _name = registeredHosp[hospAdd].name;
        _cnpj = registeredHosp[hospAdd].cnpj;
    }

    // Remove a hospital from the network
    function removeHospital(address hospAdd) public isOwner(msg.sender){
        // find the hospital to be deleted and do it
        // move the last element to the deleted position so it does not leave a gap
        for (uint i = 0; i < hospitals.length; i++){
            if (hospitals[i] == hospAdd){
                hospitals[i] = hospitals[hospitals.length-1];
                delete hospitals[hospitals.length-1];
                hospitals.length--;
                break;
            }
        }
        delete registeredHosp[hospAdd];
        emit removed(hospAdd);
    }

    // Lists all the participant hospitals
    function listHospitals() public view returns(address[] memory){
        return hospitals;
    }

    // Creates a new record for a patient
    function setRecord(string memory patientID, string memory treatments, string memory medicationHistory, string memory allergies, uint256 date)
    public isRegistered(msg.sender){
        HospInfo memory h = returnHospital(msg.sender);
        patientRecord[patientID] = Record(h,treatments,medicationHistory,allergies,date);
    }

    // Get the record infos
    function getRecord(string memory patientID) public view isRegistered(msg.sender) returns(Record memory){
        return patientRecord[patientID];
    }

    // Change business owner
    function changeOwner(address newOwner) public isOwner(msg.sender){
        address oldOwner = contractOwner;
        contractOwner = newOwner;
        emit ownerChanged(oldOwner, newOwner);
    }

    function setReport(string memory patientID, string memory doctorName,
    string memory description, string memory exams, string memory medicines, uint height,
    uint weight, uint bodyTemperature, string memory bloodPreassure, uint256 date)
    public isRegistered(msg.sender){
        HospInfo memory h = returnHospital(msg.sender);
        reports[patientID].push(Report(h,doctorName,description,exams,medicines, height, weight,bodyTemperature,bloodPreassure,date));
    }

    function getReports(string memory patientID) public view isRegistered(msg.sender) returns(Report[] memory){
        Report[] memory r = new Report[](reports[patientID].length);
        for (uint i = 0; i < r.length; i++){
            r[i] = reports[patientID][i];
        }
        return r;
    }
}