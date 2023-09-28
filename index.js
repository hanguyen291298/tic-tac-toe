
const gameBoard = (()=>{
    
    const create_grid = function(s){
        const size = document.querySelector(".square-size")
        for (let i = 0; i < s; i++){
            let row = document.createElement("div")
            row.classList.add(`row-${i}`)
            for (let j = 0; j < s; j++){
                const square = document.createElement("div")
                square.classList.add("square")
                row.appendChild(square)
            }
            size.appendChild(row)
            
        }
    }
    return {create_grid}
})()
    
gameBoard.create_grid(3)

const displayController = (()=>{
    let currentPlayer = "";  
    const mark_sign = ()=>{
        document.addEventListener("click", (event)=>{
            const mark = event.target.getAttribute("mark")
           if( mark === "X" || mark === "O"){
                currentPlayer = mark
           }
        })
    }

    const show_mark = ()=>{
        document.addEventListener("click", (event)=>{
            let square = event.target
            console.log(square)
            if(square.classList.contains("square") && square.textContent === ""){
                
                square.innerHTML = currentPlayer
                
            }
        })
    }
    return {mark_sign, show_mark}   
})()

displayController.show_mark()
