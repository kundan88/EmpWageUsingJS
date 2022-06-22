const IS_PARTTIME=1
const IS_FULLTIME = 2
const  PARTTIME_HOURS=4
const FULLTIME_HOURS=8
const WAGE_PER_HOURS=20

function getWorkingHours(empCheck){
    

    switch (empCheck)
    {
        case IS_PARTTIME:
            return PARTTIME_HOURS
        
        case IS_FULLTIME:
            return FULLTIME_HOURS
            
        default:
            return 0
        
    }
}
     let empCheck=Math.floor(Math.random() * 10) % 3
    let empHrs= getWorkingHours(empCheck)
    let empWage=empHrs * WAGE_PER_HOURS;
    console.log("empwage:"+empWage);

