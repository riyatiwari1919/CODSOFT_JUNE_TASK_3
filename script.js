var totalButtons = document.querySelectorAll(".btn").length;

for (var i=0; i<totalButtons; i++){
    document.querySelectorAll(".btn")[i].addEventListener("click", function(){
        
        if(this.innerHTML != "CE" && this.innerHTML != "=" && this.innerHTML != "AC"){
            btnValue = this.innerHTML;
            var inputInitialValue = document.querySelector("#input").value;
            document.querySelector("#input").value = inputInitialValue + btnValue;
        }
        else if(this.innerHTML == "CE"){
            var inputValue = document.querySelector("#input").value;
            inputValue = inputValue.slice(0,inputValue.length-1);
            document.querySelector("#input").value = inputValue;
        }
        else if(this.innerHTML == "="){
            var expression = document.querySelector("#input").value;
            expression = expression.replace("x", "*");
            console.log("Enetred expression is : " + expression);
            try{
                var result = eval(expression);
                console.log("Result is : " + result);
                document.querySelector("#input").value = result;
            }
            catch{
                alert("Enter a valid operation!");
                document.querySelector("#input").value = " ";
            }       
        }
        else{
            document.querySelector("#input").value = " ";
        }
    })
}

