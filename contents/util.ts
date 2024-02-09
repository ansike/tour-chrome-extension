export function generateDates(startDate, numOfDays) {
    if (!startDate) {
        return []
    }
    // 存储结果
    const dates = [];
    // 将 startDate 转为 Date 对象
    const date = new Date(startDate);
    // 循环 numDays，生成日期
    for (let i = 0; i < numOfDays; i++) {
        // 将当前日期添加到结果数组
        dates.push(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);

        // 将日期增加一天
        date.setDate(date.getDate() + 1);
    }

    return dates;
}

// console.log(generateDates('2022-2-10', 5));  // 输出：[ '2022-2-10', '2022-2-11', '2022-2-12', '2022-2-13', '2022-2-14' ]

