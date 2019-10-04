pragma solidity ^0.5.11;

contract PatientRecord{
    // Patient gender
    /**TODO enum gender faz com que o tem que passar uint como parametro e n string genero */
    enum Gender{
        Male,
        Female,
        Other
    }
    Gender public g;

    // Patient infos
    struct Patient{
        string name;
        string id; // cpf, social security number, etc..
        uint age;
        Gender gender;
        address patiendAdd; // patient address
    }

    // Storage
    // records[recordID][patientAdress] == Patient
    mapping (uint256 => mapping (address => Patient)) records; // stores patients records
    // nameID[patientAdress][Patient.name] == recordID
    mapping (address => mapping (string => uint)) nameID; // stores recordID by name
    uint recordCount = 0;
    // uint ID; // record ID
    // Patient private patient;
    address public contractOwner; // Business Owner address

    // Modifiers
    modifier notEmpty(string memory name, uint age, Gender gender) {
        bytes memory tempString = bytes(name);
        require(tempString.length != 0, "Name is empty.");
        require(age > 0, "Invalid age.");
        require(gender == this.g(), "Invalid gender.");
        _;
    }

    // Can only access record data if name is given by patient
    // ALTERAR!!
    modifier checkID(uint recordID, address patientAdd, string memory id){
        require(keccak256(abi.encode(records[recordID][patientAdd].id)) == keccak256(abi.encode(id)), "Wrong patient ID");
        _;
    }
    // ALTERAR!!
    modifier recordExist(uint recordID, address patientAdd){
        require(recordCount > 0,"Record is empty");
        require(recordCount > recordID && recordID > 0,"Record does not exists");
        _;
    }

    // Only required params
    function setPatient(string memory name, uint age, Gender gender) public notEmpty(name,age,gender){
        records[recordCount][msg.sender].name = name;
        records[recordCount][msg.sender].age = age;
        records[recordCount][msg.sender].gender = gender;
    }

    // Get patient info
    /** TODO: remove recordID param and think about a better way to find record
    */
    function getPatient(/*uint recordID,*/ address recordOwner) public view returns (string memory name, uint age, Gender gender){
        name = records[recordCount][recordOwner].name;
        age = records[recordCount][recordOwner].age;
        gender = records[recordCount][recordOwner].gender;
    }

}