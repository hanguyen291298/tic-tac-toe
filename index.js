
const gameBoard = (()=>{
    let boardgame = ['', '', '', '', '', '', '', '', '']
    const size = document.querySelector(".board")

    const create_grid = function(){
        for (let i = 0; i < boardgame.length; i++){
            let cell = document.createElement("div")
            cell.classList.add("cell")
            size.appendChild(cell)            
        }
    }

    const restart = function(){
        const restart_btn = document.querySelector(".restart")
        restart_btn.addEventListener("click", ()=>{
            size.textContent = "";
            gameBoard.create_grid()
        })
    }
    return {create_grid, restart}
})()
    
gameBoard.create_grid()
gameBoard.restart()



const displayController = (()=>{
    const size = document.querySelector(".board")
    let currentPlayer_1 = "";
    let currentPlayer_2 = "";
    const mark_sign = ()=>{
        document.addEventListener("click", (event)=>{
            const mark = event.target.getAttribute("mark")
           if( mark === "X" ){
                
                currentPlayer_1 = "X";
                currentPlayer_2 = "O";
           }
           else if (mark === "O"){
                currentPlayer_1 = "O";
                currentPlayer_2 = "X";
           }
        })
    }


    const show_mark = ()=>{
       
        document.addEventListener("click", (event)=>{
            let square = event.target
            let random_positon = Math.floor(Math.random() * 3)
            const square_childs = size.querySelectorAll(".cell")
            console.log(square_childs.length)
            if(square.classList.contains("cell") && square.textContent === ""){
                square.innerHTML = currentPlayer_1
                
            }
        })
    }
    return {mark_sign, show_mark}   
})()

displayController.mark_sign()
displayController.show_mark()



const player = ()=>{

}