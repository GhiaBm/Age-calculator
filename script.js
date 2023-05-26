const months = [31,28,31,30,31,30,31,31,30,31,30,31]; /*present initailly as well*/
function ageCalculate(){ /*new function */
        let today = new Date(); /*variable called today assigned with the value of the function new Date() a built in function that returns a date object with the current date and time*/
        let inputDate = new Date(document.getElementById("date-input").value);
        /*new variable called inputDate that not only gives us results of new Date but also sets or returns the value of the value attribute of a text field which is found in html, so in other words this variable is equal to the value the user adds*/ 
       
        let AgeMonth,AgeDate,AgeYear;
        
        let birthDetails = {
            date:inputDate.getDate(),/*inputDate from above, getDate:returns the day of the month (1 to 31) of a date*/
            month:inputDate.getMonth()+1,/*getMonth() returns the month (0 to 11) of a date.*/
           /*we add plus one since jan is considered  by default 0, so we changed the index by automatically adding 1 to each index */
            year:inputDate.getFullYear()/*getFullYear() returns the full year (4 digits) of a date*/
        } /*new variable with 3 new values, date, month, and year*/
       
       /*getting current date */
        let currentYear = today.getFullYear(); 
        let currentMonth = today.getMonth()+1;
        let currentDate = today.getDate();


/*incase the inputted value is bigger than current date, in years, months, date..*/
        if(
            birthDetails.year > currentYear ||
            ( birthDetails.month > currentMonth && birthDetails.year  == currentYear) || 
            (birthDetails.date > currentDate && birthDetails.month == currentMonth && birthDetails.year  == currentYear)
        ){/* ||  (logical OR) and (&& logical conjunction)an operator will be true if and only if all the operands are true */
            alert("Not Born Yet");
            displayResult("-","-","-");
            return;
        }

/*AgeYear = today's year - birth year*/
        AgeYear = currentYear - birthDetails.year;

        if(currentMonth >= birthDetails.month){/*to avoid getting a negative value*/
            AgeMonth = currentMonth - birthDetails.month;
        }
        else{
            /*ageyear = 5*/
            AgeYear--;/*ageyear = 5*/
            AgeMonth = 12 + currentMonth - birthDetails.month;/*ageyear = 4*/
        }


        if(currentDate >= birthDetails.date){
            AgeDate = currentDate - birthDetails.date;
        }
        else{
            AgeMonth--;
            let days = months[currentMonth - 2];
            AgeDate = days + currentDate - birthDetails.date;
            if(AgeMonth < 0){
                AgeMonth = 11;
                AgeYear--;
            }
        }


        /*displaying the results */
     displayResult(AgeDate,AgeMonth,AgeYear);
    }
    function displayResult(bDate,bMonth,bYear){/*bDate parameter*/
        document.getElementById("years").innerHTML = bYear;
        document.getElementById("months").innerHTML = bMonth;
        document.getElementById("days").innerHTML = bDate;
    }

    function marginall(){
        var group4 = document.getElementById("group4");
        group4.style.marginLeft = "20px";
        group4.style.color = "#68a67d";
        var group1 = document.getElementById("group1");
        group1.style.margin = "-20px";
        group1.style.color = "#F18F01";
        var group2 = document.getElementById("group2");
        group2.style.marginLeft = "10px";
        group2.style.color = "#5c2b07";
        var group3 = document.getElementById("group3");
        group3.style.margin = "-10px";
        group3.style.color = "#5f5f5f";
        var group5 = document.getElementById("group5");
        group5.style.marginLeft = "0px";
        group5.style.color = "#5f5f5f";
        var group6 = document.getElementById("group6");
        group6.style.margin = "30px";
        group6.style.color = "#68a67d";
        var group7 = document.getElementById("group7");
        group7.style.marginLeft = "-30px";
        group7.style.color = "#F18F01";
    }