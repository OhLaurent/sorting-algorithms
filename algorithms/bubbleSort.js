function bubbleSort(cols, time) {
    const sorted = cols.map(col => col.value)
    let end = sorted.length - 1;

    console.log(sorted, end)

    function sortIteration() {
        for (let i = 0; i < end; i++) {
            if (sorted[i] > sorted[i + 1]) {
                const aux = sorted[i]
                sorted[i] = sorted[i + 1]
                sorted[i + 1] = aux
            }
        }

        renderCols(cols, sorted)

        end--
        setTimeout(sortIteration, time)
    }

    sortIteration()
}