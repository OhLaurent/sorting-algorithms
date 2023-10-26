function bubbleSort(cols, time, colors) {
    const sorted = cols.map(col => col.value)
    let end = sorted.length - 1;

    function sortIteration() {
        if (end <= 1) return
        for (let i = 0; i < end; i++) {
            if (sorted[i] > sorted[i + 1]) {
                const aux = sorted[i]
                sorted[i] = sorted[i + 1]
                sorted[i + 1] = aux
            }
        }

        renderCols(cols, sorted, colors)

        end--
        setTimeout(sortIteration, time)
    }

    sortIteration()
}