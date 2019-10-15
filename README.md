# Secure Medical Records
This is a project for a Blockchain class at PUC-RIO.

It is my first time coding a full stack website using Node.js and React.js. There is a big room form improvement when it comes to the code and how things are done.

# Installation and usage
After unziping the downloaded file you should see the following:
.  
-- backend  
-- contracts  
-- frontend  
-- .gitingore  
-- Users.txt  
-- README.md  

The ethereum smart contract was deployed using Ganachi test network, in order to make it work properly you must change the **address** key on ``` ./frontend/src/services/contracts/HospitalContract.js```

To make the backend work you must create a ```.env``` file on ```./backend/``` setting **DB_USER** and **DB_PSW** with your own user and password credentials for MongoDB.

To run the servers simply follow the steps on project root:
```
cd backend  
yarn  
yarn dev  
cd ..  
cd frontend  
yarn  
yarn start  
cd ..  
```

Now the backend is running on http://localhost:3333 and frontend on http://localhost:3000
By accessing http://localhost:3000/ you will be using the dApp as a patient sees it.
By accessing http://localhost:3000/enterprise you will be using the dApp as a hostpital sees it.

The ```Users.txt``` contain exemples of patient, hospitals and contract owner used for tests

# Concept
The patient first registers with the Hospital in person by providing personal details (name, ID, age, gender).
Then when the patient goes to the doctor for the required treatment, the doctor can access and register healthcare information of the patient. The information access and register are only possible if the patient gives the ID and set permission to the Hospital using the dApp.

- Only the registered Hospitals can register new patients.
- Only doctors can register healthcare information about the patient.
- The patient name, id, gender and age are not stored on the Blockchain, this means that
theses infos are stored on a normal Data Base and only the permissioned Hospitals can access it.
- The healthcare infos are stored on the Blockchain, only patient and registered hospitals 
are the authorized entities for accessing the patients healthcare information and with the patients permission.

# Project architecture
### Blockchain (Smart Contract):
- Include all kinds of medical records such as doctors prescriptions, medical history, laboratory reports.
- In this usecase, only patient and registered hospital are the authorized entities for 
accessing the patients healthcare information and with the patients permission.

### Backend:
- Node.js
- MongoDB: Stores sensitive data from patients (email,password,name,cpf,age,gender)

### Frontend:
- React.js
- Web3.js: Interacts with ethereum smart contract