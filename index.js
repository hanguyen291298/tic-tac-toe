const gameBoard = (()=>{
    
    const board = document.querySelector(".board")
    
    const create_grid = function(size){
        board.style.gridTemplateColumns = `repeat(${size}, 100px)`
        board.style.gridTemplateRows = `repeat(${size}, 100px)`
        for (let i = 0; i < size ** 2; i++){
            let cell = document.createElement("div")
            cell.classList.add("cell")
            board.appendChild(cell)                     
        }      
    }

    const return_content_board = ()=>{
        let boardgame = []
        const grid_cells = document.querySelectorAll(".cell")
        grid_cells.forEach((element)=>{
            boardgame.push(element.textContent)
        })
        return boardgame
    }

    const restart = function(){
        const restart_btn = document.querySelector(".restart")
        restart_btn.addEventListener("click", ()=>{
            board.textContent = "";
            console.log('true')
            gameBoard.create_grid(3)
        })
    }
    return {create_grid, restart, return_content_board}

})()
    
gameBoard.create_grid(3)
gameBoard.restart()

player = (mark, name)=>{
    return {name, mark}
}

player1 = player("X", "ha")

console.log(player1.name)



const displayController = (() => {
    const board = document.querySelector(".board");
    
    let winner = null
    const random_cell = (player) => {
        let random_position = "";
        const cells_inside_board = board.querySelectorAll(".cell");
        do {
            random_position = Math.floor(Math.random() * 9);
        } while (cells_inside_board[random_position].textContent !== "");

        cells_inside_board[random_position].textContent = player;
    };

    const check_winner = () => {
        const winning_combinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], //rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], //columns
            [0, 4, 8], [2, 4, 6] //diagonals
        ];
        const cells_inside_board = board.querySelectorAll(".cell");
        winning_combinations.forEach(element => {
        
            if (
                cells_inside_board[element[0]].textContent === cells_inside_board[element[1]].textContent &&
                cells_inside_board[element[0]].textContent === cells_inside_board[element[2]].textContent &&
                cells_inside_board[element[0]].textContent !== ""
            ) {
                winner = cells_inside_board[element[0]].textContent;
                console.log(`The winner is ${winner}`);
            
            }
        });

    };

    const display = (you, other_player) => {
        if (you.mark === "X") {
            other_player = "O";
        } else {
            other_player = "X";
        }

        document.addEventListener("click", (event) => {
            let clicked_position = event.target;
            if (clicked_position.classList.contains("cell") && clicked_position.textContent === "") {
                clicked_position.innerHTML = you.mark;

                check_winner();
                if (!winner) {
                    
                    setTimeout(()=>{
                        random_cell(other_player)
                        check_winner()
                    }, 500)
                    
                } else {                   
                    winner = null
                    
                }
            }
        });
    };

    return { display, check_winner };
})();


displayController.display(player1)
