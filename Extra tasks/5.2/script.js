const myList = [
  {
    value: 'Пункт 1.',
    children: null,
  },
  {
    value: 'Пункт 2.',
    children: [
      {
        value: 'Подпункт 2.1.',
        children: null,
      },
      {
        value: 'Подпункт 2.2.',
        children: [
          {
            value: 'Подпункт 2.2.1.',
            children: null,
          },
          {
            value: 'Подпункт 2.2.2.',
            children: null,
          },
        ],
      },
      {
        value: 'Подпункт 2.3.',
        children: null,
      },
    ],
  },
  {
    value: 'Пункт 3.',
    children: null,
  },
];

const buildList = ({ children, value }) => {
  if (children) {
    return `<li>${value}
              <ul style="font-size: 0.9em">${children.map(buildList).join('')}</ul> 
            </li>`;
  }
  return `<li>${value}</li>`;
};

function createList(title, list) {
  let result = '';
  try {
    if (typeof title !== 'string') {
      throw new Error('Title is not a String');
    }
    if (!Array.isArray(list)) {
      throw new Error('List is not a array');
    }

    result += `<h2>${title}</h2>`;

    if (list.length) {
      result += '<ul style="font-size: 20px">';
      list.forEach((elem) => {
        result += buildList(elem);
      });
      result += '</ul>';
    } else {
      throw new Error('You list is empty');
    }
    document.body.innerHTML = result;
  } catch (error) {
    console.log(error.message);
  }
}

createList('My list', myList);
