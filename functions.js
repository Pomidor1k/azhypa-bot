async function getCurrentTime() {
    const currentDate = new Date();

    // Получаем компоненты времени
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const seconds = String(currentDate.getSeconds()).padStart(2, '0');

    // Получаем компоненты даты
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Месяцы начинаются с 0
    const year = String(currentDate.getFullYear()).slice(-2); // Получаем последние две цифры года

    // Формируем строку
    const timeString = `${hours}:${minutes}:${seconds} ${day}.${month}.${year}`;

    return timeString;
}



module.exports = {
    getCurrentTime
}