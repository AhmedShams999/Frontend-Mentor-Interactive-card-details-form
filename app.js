
const cardNumInput = document.getElementById("card-number");
const cardYearInput = document.querySelector(".date-years");
const cardMonthInput = document.getElementById("date-month");
const cardNameInput = document.getElementById("card-name");
const cardCvcInput = document.querySelector(".cvc");
const cvcNum = document.getElementById("cvc-num");
const codeTextEl = document.getElementById("code");
const nameDateNumEl = document.querySelector(".name-dateNum");
const confirmBtn = document.querySelector(".confirm-btn");
const containerEl = document.querySelectorAll(".container");
const allEl = document.querySelector(".all");
const vaildEl = document.querySelector(".vaild");


confirmBtn.addEventListener("click",()=>{
  validation();

})

cardNumInput.addEventListener("keyup",()=>{

  if(cardNumInput.value.trim() === ""){
    codeTextEl.innerHTML = "0000 0000 0000 0000";
  }else{
    codeTextEl.innerHTML = cardNumInput.value.trim();
  }
})
/*--------------------------------------*/
cardNameInput.addEventListener('keyup',()=>{

  if(cardNameInput.value === ""){
    nameDateNumEl.children[0].innerHTML = "JANE APPLESEED ";
  }else{
    nameDateNumEl.children[0].textContent = cardNameInput.value;
  }
})
/*--------------------------------------*/
cardMonthInput.addEventListener("keyup",()=>{

  if(cardMonthInput.value === ""){
    nameDateNumEl.children[1].children[0].innerHTML = "00";
  }else{
    nameDateNumEl.children[1].children[0].textContent = cardMonthInput.value;
  }
})
/*--------------------------------------*/
cardYearInput.addEventListener('keyup',()=>{
  if(cardYearInput.value === ""){
    nameDateNumEl.children[1].children[2].innerHTML = "00";
  }else{
    nameDateNumEl.children[1].children[2].textContent = cardYearInput.value;
  }
})
/*--------------------------------------*/
cardCvcInput.addEventListener('keyup',()=>{
  if(cardCvcInput.value === ""){
    cvcNum.innerHTML = "000";
  }else{
    cvcNum.textContent = cardCvcInput.value;
  }
})

/*--------------------------------------*/
const errorMsg = document.createElement('p');
const errorMsg1 = document.createElement('p');
const errorMsg2 = document.createElement('p');
const errorMsg3 = document.createElement('p');
function validation(){
  let vaild = false;
  let vaild2 = false;
  let vaild3 = false;
  let vaild4 = false;

  if(isNaN(cardNumInput.value.replace(" ","")) || cardNumInput.value.replace(" ","") === ""){
    cardNumInput.classList.add('invalide-value');
    errorMsg.classList.add('error');
    containerEl[1].appendChild(errorMsg);

    if(cardNumInput.value === ""){
      errorMsg.textContent = "Can't be blank";
    }else{
      errorMsg.textContent = "Wrong format,numbers only";
    }

  }else{
    errorMsg.remove();
    cardNumInput.classList.remove('invalide-value');
    vaild = true;
  }
/*--------------------------------------*/
  if(isNaN(cardYearInput.value) || cardYearInput.value === ""){
    cardYearInput.classList.add('invalide-value');
    errorMsg1.classList.add('error');
    containerEl[2].children[0].appendChild(errorMsg1);

    if(cardYearInput.value === ""){
      errorMsg1.textContent = "Can't be blank";
    }else{
      errorMsg1.textContent = "Wrong format,numbers only";
    }

  }else{
    errorMsg1.remove();
    cardYearInput.classList.remove('invalide-value');
    vaild2 = true;
  }
/*--------------------------------------*/
  if(isNaN(cardMonthInput.value) || cardMonthInput.value === ""){
    cardMonthInput.classList.add('invalide-value');
    errorMsg1.classList.add('error');
    containerEl[2].children[0].appendChild(errorMsg1);

    if(cardMonthInput.value === ""){
      errorMsg1.textContent = "Can't be blank";
    }else{
      errorMsg1.textContent = "Wrong format,numbers only";
    }

  }else{
    errorMsg1.remove();
    cardMonthInput.classList.remove('invalide-value');
    vaild3 = true;
  }
/*--------------------------------------*/
    if(isNaN(cardCvcInput.value) || cardCvcInput.value === ""){
      cardCvcInput.classList.add('invalide-value');
      errorMsg2.classList.add('error');
      containerEl[2].children[1].appendChild(errorMsg2);

    if(cardCvcInput.value === ""){
      errorMsg2.textContent = "Can't be blank";
    }else{
      errorMsg2.textContent = "Wrong format,numbers only";
    }

  }else{
    errorMsg2.remove();
    cardCvcInput.classList.remove('invalide-value');
    vaild4 = true;
  }
 
  if(cardNameInput.value === ""){
    cardNameInput.classList.add('invalide-value');
    errorMsg3.classList.add('error');
    errorMsg3.textContent = "Can't be blank";
    containerEl[0].appendChild(errorMsg3);
  }else{
    errorMsg3.remove();
    cardNameInput.classList.remove('invalide-value');
  }
  if((vaild === true) && (vaild2 === true) && (vaild3 === true) && (vaild4 === true) && (cardNameInput.value !== "")){
    allEl.style.display = "none";
    vaildEl.style = " display: flex;";
    vaildEl.children[3].addEventListener('click',()=>{
      location.reload();
    })
  }

   
  }
