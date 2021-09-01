function validate() {
     //alert("Hee");
    let userName = document.getElementById("user_Name").value;
  
    let password = document.getElementById("password").value;
    let repassword = document.getElementById("repassword").value;
  
    if (userName == "") {
      document.getElementById("space_one").innerHTML = "*Please Enter User Name";
      return false;
    }
    if (password == "" || password.length < 5) {
      document.getElementById("space_two").innerHTML =
        "Password min 5 Characters";
      return false;
    }
    
    if (password != repassword) {
      document.getElementById("space_three").innerHTML = "*Password doesnt match";
      return false;
    }
  }