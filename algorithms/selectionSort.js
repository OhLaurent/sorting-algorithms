function selectionSort(cols) {
    const sorted = cols.map(col => col.value)
    let step = 0;

    function sortIteration() {

        if (step >= sorted.length) return

        let smallest = sorted[step]
        let smallestIndex = step

        for (let i = step; i < sorted.length; i++) {
            if (sorted[i] < smallest) {
                smallest = sorted[i]
                smallestIndex = i
            }
        }

        const aux = sorted[step]
        sorted[step] = sorted[smallestIndex]
        sorted[smallestIndex] = aux

        cols[step].element.style.backgroundColor = "red"

        renderCols(cols, sorted)

        step++
        setTimeout(sortIteration, 100)
    }

    sortIteration()
}