// Рассчитать дату окончания кредита, который имеет известную длительность (в календарных днях) и начинается сегодня. Если окажется, что дата окончания приходится на нерабочий день, кредит "продлевается" до следующего рабочего дня и датой его окончания станет ближайший рабочий день.
// Для простоты задачи забудем о производственном календаре и будем считать, что с понедельника по пятницу всегда рабочие дни, а в субботу и воскресенье - всегда выходные.
// Задача - реализовать функцию, возвращающую дату окончания кредита в формате ДД.ММ.ГГГГ

function getLoanEndDate(duration) {
    let today = new Date(),
        targetDay = today.setDate(today.getDate() + duration),
        dayOfTheWeek = new Date(targetDay).getDay()

    if (dayOfTheWeek === 6) targetDay = today.setDate(today.getDate() + 2)
    if (dayOfTheWeek === 0) targetDay = today.setDate(today.getDate() + 1)

    let targetDate = new Date(targetDay)

    return `${String(targetDate.getDate()).padStart(2, "0")}.${String(targetDate.getMonth() + 1).padStart(2, "0")}.${String(targetDate.getFullYear()).padStart(2, "0")}`
}


console.log(getLoanEndDate(1) === '06.05.2021');
console.log(getLoanEndDate(2) === '07.05.2021');
console.log(getLoanEndDate(3) === '10.05.2021');
console.log(getLoanEndDate(3) === '08.05.2021');
console.log(getLoanEndDate(4) === '10.05.2021');
console.log(getLoanEndDate(5) === '10.05.2021');
console.log(getLoanEndDate(6) === '11.05.2021');