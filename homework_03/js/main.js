function Company({name, owner, maxCompanySize}) {
    this.name = name;
    this.owner = owner;
    this.maxCount = maxCompanySize;
    this.creationTime = new Date();

    let _employeeList = [];
    let _logs = `${this.name} was created in ${this.creationTime} \n`;

    this.addNewEmployee = function(employee) {
        if (!(employee instanceof Employee)) {
            console.error("Please try to add Employee instance\n");
            return;
        };
        if(_employeeList.length >= this.maxCount) {
            this.removeEmployee(_cheapestWorker());  
        };
        employee.hire(this);
        _employeeList.push(employee);
        let startDate = new Date();
        _logs += `${employee.name} starts working at ${this.name} in ${startDate}\n`;
    };
    function _cheapestWorker() {
        let lowestSalary = _employeeList[0].salary;
        let id;
        for(let i = 0; i < _employeeList.length; i++) {
            if(lowestSalary > _employeeList[i].salary) {
                lowestSalary = _employeeList[i].salary;
                id = i;
            }
        }
        return id;
    }
    this.removeEmployee = function(id) {
        _employeeList[id].fire();
        _logs += `${_employeeList[id].name} ends working at ${this.name} in ${_employeeList[id].fireDate} \n`;
        _employeeList.splice(id, 1);
    };
    this.getAverageSalary = function() {
        let totalSalary = 0;
		for(let i = 0; i < _employeeList.length; i++){
			totalSalary += _employeeList[i].salary;
		}
		return totalSalary / _employeeList.length;
    };
    this.getEmployees = function() {
        return _employeeList;
    };
    this.getFormattedListOfEmployees = function() {
        let formattedList = "";
		for(let i=0; i<_employeeList.length; i++){
			formattedList += `${_employeeList[i].name} - works in ${this.name} ${_employeeList[i].timeInCompany} seconds \n`;
		}
		return formattedList;
    };
    this.getAverageAge = function() {
        let Ages = 0;
		for(let i=0; i < _employeeList.length; i++){
			Ages += _employeeList[i].age;
		}
		return Ages / _employeeList.length;
    };
    this.getHistory = function() {
        return _logs;
    };

  }

  function Employee({name, primarySkill, age, salary}) {
    this.name = name;
    this.primarySkill = primarySkill;
    this.age = age;
    this.salary = salary;
    this.companyName = '';
    this.timeInCompany = new Date();
    
    let _logs = '';

    this.getSalary = function() {
        return this.salary;
    };
    this.setSalary = function(amount) {
        if(isFinite(amount) && amount > this.salary) {           
            _logs += `change salary from ${this.salary} to ${amount} \n`;
            this.salary = amount;
        } else {
            _logs += `try to change salary from ${this.salary} to ${amount} \n`;
        }
        
    };
    this.getWorkTimeInSeconds = function() {
        let a = this.hiredTime;
        let b = this.firedTime;
        
        return `${this.name} has been working for ${(b - a) / 1000} sec \n`;
    };
    this.hire = function(company) {
        this.companyName = company;
        this.startedWorking = new Date();
        this.hiredTime = this.startedWorking.getTime();

       _logs += `${this.name} is hired to ${this.companyName.name} in ${this.startedWorking} \n`;
    };
    this.fire = function() {
        this.fireDate = new Date();
        this.firedTime = this.fireDate.getTime();
        _logs += `${this.name} is fired from ${this.companyName.name} in ${this.fireDate}\n`;
        this.companyName = "";  
           
    };
    this.getHistory = function() {
        return _logs;
    };

  }

// Test

let artem = new Employee({name: "Artem", age: 15, salary: 1000, primarySkill: "UX"});
let vova = new Employee({name: "Vova", age: 16, salary: 2000, primarySkill: "BE"});
let vasyl = new Employee({name: "Vasyl", age: 25, salary: 1000, primarySkill: "FE"});
let ivan = new Employee({name: "Ivan", age: 35, salary: 5000, primarySkill: "FE"});
let orest = new Employee({name: "Orest", age: 29, salary: 300, primarySkill: "AT"});
let anton = new Employee({name: "Anton", age: 19, salary: 500, primarySkill: "Manager"});

let epam = new Company({name: "Epam", owner: "Arkadii", maxCompanySize: 5});

epam.addNewEmployee(artem);
epam.addNewEmployee(vova);
epam.addNewEmployee(vasyl);
epam.addNewEmployee(ivan);
epam.addNewEmployee(orest);
epam.addNewEmployee(anton);

console.log(epam.getHistory());

epam.removeEmployee(2);

console.log(vasyl.getHistory());
console.log(vasyl.getWorkTimeInSeconds());

console.log(epam.getAverageSalary());
console.log(epam.getAverageAge());  

epam.addNewEmployee(5,6,9,5);

setTimeout(() => {
    epam.removeEmployee(0);
    console.log(artem.getWorkTimeInSeconds()); 
 }, 5000);

 setTimeout(() => {
    epam.removeEmployee(2);
    console.log(anton.getWorkTimeInSeconds()); 
 }, 6000);


vova.setSalary(900);
vova.setSalary(2200);
console.log(vova.getHistory());

console.log(epam.getFormattedListOfEmployees());
