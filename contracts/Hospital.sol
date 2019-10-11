pragma solidity ^0.5.11;

contract Hospital{
    struct HospInfo{
        string name;
        string cnpj;
        address hospAdd;
    }

    address contractOwner;
    mapping(address => HospInfo) registeredHosp;
    address[] hospitals; // array of registered hospitals address

    constructor() public{
        contractOwner = msg.sender;
    }

    event removed(address hospital);
    event ownerChanged(address oldOwner, address newOwner);

    modifier isOwner(address sender){
        require(sender == contractOwner, "Only the contract onwer can register new hospitals");
        _;
    }

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

    function registerHospital(string memory name, string memory cnpj, address hospAdd) public isOwner(msg.sender) notRegistered(hospAdd){
        registeredHosp[hospAdd].name = name;
        registeredHosp[hospAdd].cnpj = cnpj;
        registeredHosp[hospAdd].hospAdd = hospAdd;
        hospitals.push(hospAdd);
    }

    function getHospital(address hospAdd) public view isOwner(msg.sender) isRegistered(hospAdd)
    returns (string memory _name, string memory _cnpj, address _address){
        _name = registeredHosp[hospAdd].name;
        _cnpj = registeredHosp[hospAdd].cnpj;
        _address = registeredHosp[hospAdd].hospAdd;
    }

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

    function listHospitals() public view returns(address[] memory){
        return hospitals;
    }

    function changeOwner(address newOwner) public isOwner(msg.sender){
        address oldOwner = contractOwner;
        contractOwner = newOwner;
        emit ownerChanged(oldOwner, newOwner);
    }
}