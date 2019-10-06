pragma solidity ^0.5.11;

contract Record{
    struct Record{
        string patientID;
        string hospitalName;
        address hospitalAdd;
        string record; // doctor observations
        string[] exams; // requested exams
        string[] medicines; // medicines used by the patient
    }

    // records[recordCount][patientID]
    //mapping(uint => mapping(string => Record)) records;
    // records[patientID] = [record1,record2,...]
    mapping(string => Record[]) records;
    address contractOwner; // business owner
    uint recordCount;
}