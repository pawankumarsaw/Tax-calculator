    let grosserror=document.querySelector(".grosserror")
    let extraerror=document.querySelector(".extraerror");
    let totalerror=document.querySelector(".totalerror");
    let ageSelect=document.querySelector(".age-group");
    let closebtn=document.querySelector(".close");
    let btn=document.querySelector(".btn");
    
    let age;
    ageSelect.addEventListener("click",(evnt)=>{
        let option=evnt.target
        age= parseInt(option.value);
        
    })

    function clearerror(inputs,errors){
        errors.forEach((error)=>{
            error.style.display="none";
        })
        inputs.forEach((input) => {
            input.classList.remove("error");
        })
    }
    function calculateIncome(grossAnnual,extraIncome,totalDeduction){
        let gross=parseInt(grossAnnual.value);
        let extra=parseInt(extraIncome.value);
        let deduction=parseInt(totalDeduction.value);
        let total=gross+extra-deduction;
        let totalamnt;
        if(total<800000){
            totalamnt=total;
        }
        else{
            totalamnt=total-(total*age)/100;
        }


        let amount=document.querySelector(".amount");
    let resultDiv=document.querySelector(".result");

        amount.innerText=totalamnt;
        resultDiv.style.display="flex";

        closebtn.addEventListener("click",()=>{
            amount.innerText="";
            resultDiv.style.display="none";
            grossAnnual.value="";
            extraIncome.value="";
            totalDeduction.value="";
            
        })
       
    }
    function checkvalid(){
        let grossAnnual=document.querySelector(".gross-anual");
        let extraIncome=document.querySelector(".extra-income");
        let totalDeduction=document.querySelector(".total-deduction");
        let valid=true;

        clearerror([grossAnnual,extraIncome,totalDeduction],[grosserror,extraerror,totalerror]);

        if(grossAnnual.value.trim()==="" || isNaN(grossAnnual.value) || grossAnnual.value<=0){
            grossAnnual.classList.add("error");
            grosserror.style.display="inline";
            valid=false;       
        }
        if(extraIncome.value.trim()==="" || isNaN(extraIncome.value) || extraIncome.value<=0){
            extraIncome.classList.add("error");
            extraerror.style.display="inline";
            valid=false;
        }
        if(totalDeduction.value.trim()==="" || isNaN(totalDeduction.value) || totalDeduction.value<=0){
            totalDeduction.classList.add("error");
            totalerror.style.display="inline";
            valid=false;
        }
        if(valid){
            calculateIncome(grossAnnual,extraIncome,totalDeduction);
        }
    }

    btn.addEventListener("click",(evnt)=>{
        evnt.preventDefault();
        checkvalid();
    })





