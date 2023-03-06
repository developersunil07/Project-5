$("button").click(function(){
    $("ul").slideToggle();
 })

 
// Animate number counter

const counterNum = document.querySelectorAll(".counter-numbers");

const speed = 15;

counterNum.forEach((curElem) => {

    const updateNumber = ()  => {
        const targetNumber = parseInt(curElem .dataset.number);
        // console.log(targetNumber);
        const initialNum = parseInt(curElem.innerText);
        // console.log(intialNum);

        const incrementNumber = Math.trunc(targetNumber / speed);
        // console.log(incrementNumber);

        if(initialNum < targetNumber){
           curElem.innerText = initialNum + incrementNumber

           setTimeout(updateNumber, 300);
        }


    };
      
    updateNumber();
});

