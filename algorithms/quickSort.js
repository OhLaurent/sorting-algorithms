function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

function quickSort(cols, time) {
    const sorted = cols.map(col => col.value)

    async function sortIteration(arr, startIndex, endIndex) {
        if (arr.length <= 1) return arr

        const pivot = arr[arr.length - 1]
        arr.pop()
        const leftArr = []
        const rightArr = []

        arr.forEach((value, index) => {
            if (value < pivot) {
                leftArr.push(value)
                return
            }
            rightArr.push(value)
        })

        console.log(arr)

        const sortedLeftArr = await sortIteration(leftArr, startIndex, startIndex + leftArr.length - 1)
        const sortedRightArr = await sortIteration(rightArr, startIndex + leftArr.length, endIndex)

        const result = sortedLeftArr.concat(pivot, sortedRightArr)

        result.forEach((value, index) => {
            const aux = sorted[startIndex + index]
            const auxIndex = sorted.indexOf(value)
            sorted[startIndex + index] = value
            sorted[auxIndex] = aux
            cols[startIndex + index].element.style.backgroundColor = "red"
            renderCols(cols, sorted)
        })

        await sleep(time)

        return result
    }

    sortIteration(sorted, 0, sorted.length - 1)
}