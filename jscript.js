function verificationAge () {
    const today = new Date();
    today.setHours(0,0,0);
    
    let age = new Date ;
    age = document.getElementById("ageInput").value;
    let dateEntered = new Date(age).getTime();
    let differenceAge = new Date();
    differenceAge = today - dateEntered;
    differenceAge = (differenceAge/(31556952000));
    console.log("Today = " + differenceAge);
    console.log(differenceAge);
    if (differenceAge >=18) {
        alert("Bienvenue dans notre site");
    }
        else{
            alert ("Vous n'êtes pas autoriser...."); 
    }

    }  
    document.addEventListener('keypress', (event) => {
       
        var code = event.code;
        // Alert the key name and key code on keydown
        if (code === "Enter") {
            verificationAge();
            
        }
        
      }, false);
      

    //   document.addEventListener('keypress', (event) => {
    //     var name = event.key;
    //     var code = event.code;
    //     // Alert the key name and key code on keydown
    //     alert(`Key pressed ${name} \r\n Key code value: ${code}`);
    //   }, false);
      