const size = document.querySelector(".square-size")
for (let i = 0; i < 3; i++){
    let row = document.createElement("div")
    row.classList.add(`row-${i}`)
    for (let j = 0; j < 3; j++){
        const square = document.createElement("div")
        square.classList.add("square")
        row.appendChild(square)
    }
    size.appendChild(row)
    
}