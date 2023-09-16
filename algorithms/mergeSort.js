function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

function mergeSort(cols, time) {
    const sorted = cols.map(col => col.value);

    async function sortIteration(arr) {
        cols.forEach((col, index) => {
            col.element.style.backgroundColor = "green"
        })

        if (arr.length <= 1) return arr;

        const leftArr = [];
        const rightArr = [];

        const middleIndex = Math.floor((arr.length - 1) / 2);

        arr.forEach((value, index) => {
            if (index <= middleIndex) {
                leftArr.push(value);
                return;
            }
            rightArr.push(value);
        });

        const sortedLeftArr = await sortIteration(leftArr);
        const sortedRightArr = await sortIteration(rightArr);

        const startIndex = sorted.indexOf(sortedLeftArr[0]);
        const endIndex = sorted.indexOf(sortedRightArr[sortedRightArr.length - 1]);

        const result = [];

        while (sortedLeftArr.length || sortedRightArr.length) {
            if (!sortedRightArr.length || sortedLeftArr[0] < sortedRightArr[0]) {
                result.push(sortedLeftArr[0]);
                sortedLeftArr.shift();
                continue;
            }
            result.push(sortedRightArr[0]);
            sortedRightArr.shift();
        }

        for (let i = startIndex, j = 0; i <= endIndex; i++, j++) {
            sorted[i] = result[j];
            cols[i].element.style.backgroundColor = "red"
        }

        renderCols(cols, sorted);

        await sleep(time);

        return result;
    }

    sortIteration(sorted);
}