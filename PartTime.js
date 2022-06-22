
//UC1
const IS_ABSENT=0
let empcheck=Math.floor(Math.random() * 10) % 2
if (empcheck==IS_ABSENT)
{
    console.log("Employee is absent")
}
else{
    console.log("Employee is Present")
}

//UC2

 const IS_PARTTIME=1
const IS_FULLTIME = 2
const  PARTTIME_HOURS=4
const FULLTIME_HOURS=8
const WAGE_PER_HOURS=28

let empHrs=0
let empCheck=Math.floor(Math.random() * 10) % 3

    switch (empCheck)
    {
        case IS_PARTTIME:
            empHrs=PARTTIME_HOURS
            break;
        case IS_FULLTIME:
            empHrs = FULLTIME_HOURS
            break;
        default:
            empHrs=0
            break;
    }
    let empWage= empHrs * WAGE_PER_HOURS;
    console.log(empWage);

