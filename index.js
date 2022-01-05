// Your code here

/* 

The payroll system populates a record from an Array
has a function called createEmployeeRecord:
         
*/

function createEmployeeRecord(arrayOfInfo){

    let timeInEvents = []
    let timeOutEvents = []

    

    const employeeObj = { 
        'firstName' : arrayOfInfo[0],
        'familyName' : arrayOfInfo[1],
        'title' : arrayOfInfo[2],
        'payPerHour' : arrayOfInfo[3],
        'timeInEvents' : timeInEvents,
        'timeOutEvents' : timeOutEvents,
    }

    return employeeObj;

}

function createEmployeeRecords(arrayOfArrays){

   return arrayOfArrays.map(rec => createEmployeeRecord(rec))
};


function createTimeInEvent(record, dateStamp) {

    const currentDate = new Date();
    const timestamp = currentDate.getTime();

    console.log(timestamp)

}

createTimeInEvent();