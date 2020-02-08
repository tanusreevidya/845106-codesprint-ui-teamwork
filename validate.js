var giftsArray=[];

function giftCardOrders(){
    
    var gifts={
        bfirstname:document.getElementById("bfirstname").value +""+ document.getElementById("blastname").value,
        shippingadd:document.getElementById("shippingadd").value,
        city:document.getElementById("city").value,
        amount:document.getElementById("amount").value,
        phone:document.getElementById("t11").value+""+document.getElementById("1").value+""+document.getElementById("2").value+""+document.getElementById("3").value+""+document.getElementById("4").value+""+document.getElementById("5").value+""+document.getElementById("6").value+""+document.getElementById("7").value+""+document.getElementById("8").value+""+document.getElementById("9").value+""+document.getElementById("10").value
    };

    if(gifts.bfirstname !== "" && gifts.shippingadd !== "" &&  gifts.city!== "" && gifts.amount !== "" && gifts.phone !== ""){
        giftsArray = JSON.parse(localStorage.getItem("gifts")) || [];
        giftsArray.push(gifts);
        localStorage.setItem("gifts",JSON.stringify(giftsArray));

        window.open('vielist.html');

    }

}

function validName(event){
    var name = event.charCode;
    if ((name>64 && name <91 ) || (name>96 && name<123)){
     }
    
    else{
        alert("enter valid name");
        event.preventDefault();
    }
    }
    
    function phoneNumberFirst(event)
    {
      var phoneno = event.charCode;
   
    if(phoneno>48 && phoneno<=57){
      }
      else{
          alert("enter valid number");
          event.preventDefault;
      }
    }
    
    
    
    function phoneNumber(event)
    {
      var phoneno = event.charCode;
    //   var validNumber = /^\d[0-9]{1}$/; 
    //   if(phoneno.value.match(validNumber)){
    if(phoneno>=48 && phoneno<=57){
      }
      else{
          alert("enter valid number");
          event.preventDefault;
      }
    }
    
    function validPin(event)
    {
      var pin = event.charCode;
    
    if(pin>=48 && pin<=57){
      }
      else{
          alert("enter valid pin number");
          event.preventDefault;
      }
    }
