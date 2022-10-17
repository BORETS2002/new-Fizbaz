var elInput = document.querySelector(".input")
var elBtn = document.querySelector(".botn")
var elfiz = document.querySelector(".fiz")
var elbuzz = document.querySelector(".buzz")
var elFizBuz = document.querySelector(".FizzBuzz")
var non = document.querySelector(".non")
 


fizAR = []
buzAR = []
fizbuzAR = []



elBtn.addEventListener("click", function (evt) {
  evt.preventDefault()
  elInputVal = elInput.value;

  if (elInputVal % 3 == 0 && elInputVal % 5 == 0  ){
    non.textContent = ""

    fizAR.push(elInputVal)
    buzAR.push(elInputVal)
    fizbuzAR.push(elInputVal)
    elfiz.textContent = fizAR;
    elbuzz.textContent = buzAR;
    elFizBuz.textContent = fizbuzAR;
  }
  else if (elInputVal % 3 == 0){
    non.textContent = ""

    fizAR.push(elInputVal)
    elfiz.textContent = fizAR;
  }

  else if (elInputVal % 5 == 0){
    buzAR.push(elInputVal)
    non.textContent = ""
    elbuzz.textContent = buzAR;
  }
  else if (elInputVal % 3 != 0 && elInputVal % 5 != 0  ){
    non.textContent = "banan"
  }
  elInput.value = ""
})
non.textContent = ""



 