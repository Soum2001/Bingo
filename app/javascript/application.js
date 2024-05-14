// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

    var table = document.querySelector("#tblbingo");
    var letter = document.querySelector(".letter");

    let array = Array.apply(null, {length: 26}).map(Number.call, Number);
    array.shift(); 
shuffle(array);
const winningpostition = [
    [0,  1,  2,  3, 4],
    [5,  6,  7,  8, 9],
    [10, 11, 12, 13,14],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24],
    [0,5,10,15,20],
    [1,6,11,16,21],
    [2,7,12,17,22],
    [3,8,13,18,23],
    [4,9,14,19,24],
    [1, 7, 13, 19, 25],
    [5,9,13,17,21]
]

    function shuffle(array) {
        let currentIndex = array.length;
      
        // While there remain elements to shuffle...
        while (currentIndex != 0) {
      
          // Pick a remaining element...
          let randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
        return array;
      }
      let iterator = 0;
      for(var i=0; i< 5; i++)
        {
            let tr = document.createElement("tr");
            table.appendChild(tr);
            for (var j=0; j<5 ;j++)
                {
                    let td  = document.createElement("td")
                    td.id = array[iterator].toString()
                    // td.style.Height = 20%
                    // td.style.width = 20%
                    td.classList.add("main-table-cell")

                    let div = document.createElement("div")
                    div.classList.add("cell-format")
                    div.textContent = array[iterator].toString()
                    td.appendChild(div);
                    tr.appendChild(td);
                    iterator++;
                    
                }
        }

        let cell = document.getElementsByClassName("main-table-cell");
        let winningIterator = 0;
        
        Array.from(cell).forEach(element => {
            element.addEventListener("click", () => {
               element.classList.add("strickout");

            if(matchwin())
                {
                    
                    // letter[winningIterator].classList.add(".show-bingo");
                    winningIterator++;
                    // console.log()
                    // console.log("winningIterator"+winningIterator)
                     if(winningIterator === 5){
                        alert("B I N G O")
                     }
                }
            });
        });
function matchwin() {
    const cell = document.querySelectorAll(".main-table-cell");

    return winningpostition.some(combination => {
        let ite = 0;
        for (let i = 0; i < combination.length; i++) {
           
            const index = combination[i];
            if (cell[index].classList.contains("strickout")) {
                ite++;
            }
        }
   
        if(ite === 5)
        {
            console.log(combination);
            let indexToRemove = winningpostition.indexOf(combination);
            winningpostition.splice(indexToRemove, 1);
            return true;
        }
        return false; // Return true if all cells in combination are strickout
    });
}






    

