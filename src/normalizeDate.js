export const normalizeDate = (timestamp) => {
  const fullDate = new Date(timestamp);
  const monthNames = [
    'Января', 'Февраля', 'Марта', 'Апреля',
    'Мая', 'Июня', 'Июля', 'Августа', 'Сентября',
    'Октября', 'Ноября', 'Декабря'
  ];

  const rawHours = fullDate.getHours();
  const rawMinutes = fullDate.getMinutes();
  const hours = String(rawHours).length > 1 ? rawHours : `0${rawHours}`;
  const minutes = String(rawMinutes).length > 1 ? rawMinutes : `0${rawMinutes}`
  
  return {
    hours,
    minutes,
    day: fullDate.getDate(),
    year: fullDate.getFullYear(),
    month: monthNames[fullDate.getMonth()],
  }
};