function selectionSort(cols, time, colors) {
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

        renderCols(cols, sorted)

        step++
        setTimeout(sortIteration, time, colors)
    }

    sortIteration()
}