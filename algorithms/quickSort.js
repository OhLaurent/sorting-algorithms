function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

function quickSort(cols, time) {
    const sorted = cols.map(col => col.value)

    async function sortIteration(arr) {
        if (arr.length <= 1) return arr

        cols.forEach((col, index) => {
            col.element.style.backgroundColor = "green"
        })

        const lastIndex = arr.length - 1

        const pivot = arr[lastIndex]

        const smaller = []
        const bigger = []

        const startIndex = sorted.indexOf(arr[0])
        const endIndex = startIndex + arr.length - 1

        for (let i = 0; i < lastIndex; i++) {
            if (arr[i] <= pivot) {
                smaller.push(arr[i])
                continue
            }

            bigger.push(arr[i])
        }

        const result = []

        if (smaller.length) {
            const sortedSmaller = await sortIteration(smaller)
            sortedSmaller.forEach(value => {
                result.push(value)
            });
        }

        result.push(pivot)

        if (bigger.length) {
            const sortedBigger = await sortIteration(bigger)
            sortedBigger.forEach(value => {
                result.push(value)
            });
        }

        for (let i = startIndex, j = 0; i <= endIndex; i++, j++) {
            sorted[i] = result[j];
        }

        renderCols(cols, sorted)
        console.log(sorted)

        await sleep(time)


        return result
    }

    sortIteration(sorted)
}