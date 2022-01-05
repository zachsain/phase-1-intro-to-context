// Your code here

/* 

The payroll system populates a record from an Array
has a function called createEmployeeRecord:
         
*/

function createEmployeeRecord(arrayOfInfo){

    

    

    const employeeObj = { 
        firstName : arrayOfInfo[0],
        familyName : arrayOfInfo[1],
        title: arrayOfInfo[2],
        payPerHour : arrayOfInfo[3],
        timeInEvents : [],
        timeOutEvents : []
    }

    return employeeObj;

}

function createEmployeeRecords(arrayOfArrays){

   return arrayOfArrays.map(rec => createEmployeeRecord(rec))
};


function createTimeInEvent(record, dateStamp) {

    const dateStampArray = dateStamp.split(' ')
    

    const newObj = {
        type : "TimeIn",
        hour : parseInt(dateStampArray[1]),
        date : dateStampArray[0]
    }

    // console.log(dateStamp, record)

    record.timeInEvents.push(newObj)

    return record 
}

function createTimeOutEvent(record, dateStamp) {

    // console.log(dateStamp)

    const dateStampArray = dateStamp.split(' ')
    

    const newObj = {
        type : "TimeOut",
        hour : parseInt(dateStampArray[1]),
        date : dateStampArray[0]
    }

    // console.log(dateStamp, record)

    record.timeOutEvents.push(newObj)

    return record 
   
    
}

function hoursWorkedOnDate(record, dateStamp) {

    if(dateStamp === record.timeInEvents[0].date) {

    let hoursWork = record.timeOutEvents[0].hour - record.timeInEvents[0].hour

    

    return hoursWork / 100
    }


}


function wagesEarnedOnDate(record, dateStamp) {

    let wage = hoursWorkedOnDate(record, dateStamp) * record.payPerHour

    // console.log(dateStamp)

    return wage

}

// wagesEarnedOnDate(obj, date)

function allWagesFor(record) {

    let dateInfo = record.timeInEvents.map(timeIn => timeIn.date)

    let allOfTheWages = dateInfo.reduce((acc, date) => {
       return acc + wagesEarnedOnDate(record, date)
    }, 0)

    
    // dateInfo.reduce()

    // return hoursWorkedOnDate(record, dateInfo)

    console.log(allOfTheWages)
    // console.log(allOfTheWages)

    // if (record.timeInEvents[0].date === record.timeOutEvents[0].date) {
    //     return wagesEarnedOnDate(record, record.timeInEvents[0].date)
    // } 

}



// let obj = {
//   firstName: 'Thor',
//   familyName: 'Odinsson',
//   title: 'Electrical Engineer',
//   payPerHour: 45,
//   timeInEvents: [
//     { type: 'TimeIn', hour: 800, date: '2018-01-01' },
//     { type: 'TimeIn', hour: 800, date: '2018-01-02' },
//     { type: 'TimeIn', hour: 800, date: '2018-01-03' }
//   ],
//   timeOutEvents: [
//     { type: 'TimeOut', hour: 1600, date: '2018-01-01' },
//     { type: 'TimeOut', hour: 1800, date: '2018-01-02' }
//   ]
// }

// console.log(allWagesFor(obj))

// let date = '2015-02-28 1700'

// console.log(hoursWorkedOnDate(obj, date));