function createCols(numberOfCols, view) {
    const cols = []

    for (let i = 0; i < numberOfCols; i++) {
        const col = document.createElement("div")
        col.classList.add("col")
        cols.push({
            "value": 0,
            "element": col
        })

        view.appendChild(col)
    }

    return cols
}

function renderCols(cols, values) {
    for (let i = 0; i < cols.length; i++) {
        cols[i].value = values[i]
        cols[i].element.style.height = values[i] * 5 + "px"
    }
}

function generateRandomValues(numberOfValues) {
    const values = []
    for (let i = 1; i <= numberOfValues; i++) {
        values.push(i)
    }

    for (let j = 0; j < values.length; j++) {
        const randomIndex = Math.floor(Math.random() * j)
        const aux = values[j]
        values[j] = values[randomIndex]
        values[randomIndex] = aux
    }

    return values

}

function main() {
    const numberOfValues = 50

    const view = document.getElementById("view")

    const cols = createCols(numberOfValues, view)

    const randomValues = generateRandomValues(numberOfValues)

    renderCols(cols, randomValues)

    selectionSort(cols)
}

document.addEventListener("load", main())