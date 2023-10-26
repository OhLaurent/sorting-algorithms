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

function renderCols(cols, values, colors) {
    for (let i = 0; i < cols.length; i++) {
        cols[i].value = values[i]
        cols[i].element.style.height = values[i] * 5 + "px"
        cols[i].element.style.backgroundColor = colors[values[i] - 1]
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

function generateGradientColors(numberOfValues) {
    const colors = []
    for (let i = 0; i < numberOfValues; i++) {
        colors.push(`hsl(${i * 360 / numberOfValues}, 100%, 50%)`)
    }

    return colors
}

function rendomize(numberOfValues, cols, gradient) {
    const randomValues = generateRandomValues(numberOfValues)
    renderCols(cols, randomValues, gradient)
}

function main() {
    const numberOfValues = 50
    const time = 50

    const algorithms = {
        "selection-sort": selectionSort,
        "bubble-sort": bubbleSort,
        "merge-sort": mergeSort,
        "quick-sort": quickSort,
    }

    const view = document.getElementById("view")

    const cols = createCols(numberOfValues, view)

    const gradient = generateGradientColors(numberOfValues)

    rendomize(numberOfValues, cols, gradient)

    document.getElementById('randomize').addEventListener('click', (e) => {
        rendomize(numberOfValues, cols, gradient)
    })

    document.getElementById('algorithm').addEventListener('change', (e) => {
        rendomize(numberOfValues, cols, gradient)
    })

    document.getElementById('sort').addEventListener('click', (e) => {
        const algorithm = document.getElementById('algorithm').value
        algorithms[algorithm](cols, time, gradient)
    })

}

document.addEventListener("load", main())