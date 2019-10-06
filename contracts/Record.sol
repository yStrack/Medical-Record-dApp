pragma solidity ^0.5.11;
pragma experimental ABIEncoderV2;

contract PatientRecord{
    struct Record{
        string hospitalName;
        address hospitalAdd;
        string record; // doctor observations
        string exams; // requested exams
        string medicines; // medicines used by the patient
    }
    // records[patientID] = [record1,record2,...]
    mapping(string => Record[]) records;
    address contractOwner; // business owner
    function setRecord(string memory patientID, string memory hospitalName, string memory record, string memory exams, string memory medicines)
    public{
        records[patientID].push(Record(hospitalName,msg.sender,record,exams,medicines));
    }
    function getRecord(string memory patientID) public view returns(Record[] memory){
        Record[] memory r = new Record[](records[patientID].length);
        for (uint i = 0; i < r.length; i++){
            r[i] = records[patientID][i];
        }
        return r;
    }
}