function getDay(date) {
  let day = date.getDay();
  if (day === 0) day = 7;
  return day - 1;
}

function createCalendar(elem, year, month) {
  const element = elem;
  const currentMonth = month - 1;
  const currentDate = new Date(year, currentMonth);
  let table = `<table class="table">
                    <thead class="table__header">
                        <tr class="table__row">
                            <th class="table__cell table__cell_header">пн</th>
                            <th class="table__cell table__cell_header">вт</th>
                            <th class="table__cell table__cell_header">ср</th>
                            <th class="table__cell table__cell_header">чт</th>
                            <th class="table__cell table__cell_header">пт</th>
                            <th class="table__cell table__cell_header">сб</th>
                            <th class="table__cell table__cell_header">вс</th>
                        </tr>
                    </thead>
                    <tbody class="table__body">
                        <tr class="table__row">`;

  for (let i = 0; i < getDay(currentDate); i += 1) {
    table += '<td class="table__cell"></td>';
  }

  while (currentDate.getMonth() === currentMonth) {
    table += `<td class="table__cell table__cell_body">${currentDate.getDate()}</td>`;

    if (getDay(currentDate) % 7 === 6) {
      table += '</tr><tr class="table__row">';
    }

    currentDate.setDate(currentDate.getDate() + 1);
  }

  if (getDay(currentDate)) {
    let i = getDay(currentDate);
    for (; i < 7; i += 1) {
      table += '<td class="table__cell"></td>';
    }
  }

  table += '</tbody></tr></table>';

  element.innerHTML = table;
}

createCalendar(calendar, 2022, 2);

