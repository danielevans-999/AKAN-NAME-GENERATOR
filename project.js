var nameList=[
    {
        Sunday: "Kwasi",
        Monday: "Kwadwo",
        Tuesday: "Kwabena",
        Wednesday: "Kwaku",
        Thursday: "Yaw",
        Friday: "Kofi",
        Saturday: "Kwame"
      }, {
        Sunday: "Akosua",
        Monday: "Adwoa",
        Tuesday: "Abenaa",
        Wednesday: "Akua",
        Thursday: "Yaa",
        Friday: "Afua",
        Saturday: "Ama"
      }

];

function newFunction(){
    document.getElementById("form1").reset();
    document.getElementById("birtherror").textContent="";
    document.getElementById("gendererror").textContent="";
  }

  function formValdation() {
    var day = document.getElementById("day");
    var month = document.getElementById("month");
    var year = document.getElementById("year");
    var gender = document.getElementsByName("gender");
  
    if (day.value == "" || day.value <= 0 || day.value > 31||isNaN(day.value)) {
      document.getElementById("birtherror").textContent =
        "!please enter correct date";
        return false;
    } else {
      if (month.value == "" || month.value <= 0 || month.value > 12||isNaN(month.value)) {
        document.getElementById("birtherror").textContent =
          "please enter the correct month";
          return false;
      } else {
        if (year.value == "" || year.value <= 0 || year.value == null|| isNaN(year.value)) {
          document.getElementById("birtherror").textContent =
            "please enter the correct year";
            return false
        }
      }
    }
  