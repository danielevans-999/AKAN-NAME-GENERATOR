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
    for (var i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
          var gen = gender[i].value;
        } else {
          if (gender[0].checked == false && gender[1].checked == false) {
            document.getElementById("gendererror").textContent = "select gender";
           
          }
        }
      }
      var myUserDetails = {
        myDay: day.value,
        myMonth: month.value,
        myYear: year.value,
        myGender: gen
      };
      return myUserDetails;
    
  }

  function dan() {
    var x = formValdation();
    var dd = parseInt(x.myDay);
    var mm = parseInt(x.myMonth);
    var yy = parseInt(x.myYear.slice(2, 4));
    var cc = parseInt(x.myYear.slice(0, 2));
    var nender = x.myGender;
  