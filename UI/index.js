/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

const tweets = [
  {
    id: '1',
    text: 'Hi! #datamola #js',
    createdAt: new Date('2022-03-07T23:00:00'),
    author: 'Admin',
    comments: [
      {
        id: '1',
        text: 'Hi',
        createdAt: new Date('2022-03-09T23:00:00'),
        author: 'Username1',
      },
      {
        id: '2',
        text: 'Hi',
        createdAt: new Date('2022-03-09T23:00:00'),
        author: 'Username2',
      },
      {
        id: '3',
        text: 'Hi',
        createdAt: new Date('2022-03-09T23:00:00'),
        author: 'Username3',
      },
      {
        id: '4',
        text: 'Hi',
        createdAt: new Date('2022-03-09T23:00:00'),
        author: 'Username4',
      },
      {
        id: '5',
        text: 'Hi',
        createdAt: new Date('2022-03-09T23:00:00'),
        author: 'Username5',
      },
    ],
  },
  {
    id: '2',
    text: 'How are you? #js',
    createdAt: new Date('2022-03-02T23:00:00'),
    author: 'Username2',
    comments: [
      {
        id: '1',
        text: 'Good',
        createdAt: new Date('2022-03-09T23:00:00'),
        author: 'Username23',
      },
    ],
  },
  {
    id: '3',
    text: 'Lorem ipsum dolor sit #js amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non #datamola #js',
    createdAt: new Date('2022-03-03T23:00:00'),
    author: 'Username2',
    comments: [
      {
        id: '1',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae.',
        createdAt: new Date('2022-03-04T23:00:00'),
        author: 'User23',
      },
    ],
  },
  {
    id: '4',
    text: '#jsLorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae.',
    createdAt: new Date('2022-03-01T23:00:00'),
    author: 'Username2',
    comments: [],
  },
  {
    id: '5',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. #js Adipisci, hic. Iure #datamola tempora, veniam dolor suscipit non. #js',
    createdAt: new Date('2022-03-09T23:00:00'),
    author: 'Username2',
    comments: [],
  },
  {
    id: '6',
    text: 'Lorem ipsum dolor sit amet consectetur #datamola adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae. ',
    createdAt: new Date('2022-03-07T23:00:00'),
    author: 'Username2',
    comments: [],
  },
  {
    id: '7',
    text: 'Lorem ipsum dolor sit amet #jsLorem consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae.',
    createdAt: new Date('2022-03-09T23:00:00'),
    author: 'Username2',
    comments: [
      {
        id: '1',
        text: 'Lorem ipsum dolor sit #amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae.',
        createdAt: new Date('2022-03-09T23:00:00'),
        author: 'Username12',
      },
    ],
  },
  {
    id: '8',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae. ',
    createdAt: new Date('2022-03-09T23:00:00'),
    author: 'Username2',
    comments: [
      {
        id: '1',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae.',
        createdAt: new Date('2022-03-09T23:00:00'),
        author: 'Username2',
      },
      {
        id: '2',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae.',
        createdAt: new Date('2022-03-09T23:00:00'),
        author: 'Username34',
      },
      {
        id: '3',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae.',
        createdAt: new Date('2022-03-09T23:00:00'),
        author: 'Username21',
      },
    ],
  },
  {
    id: '9',
    text: 'Lorem ipsum dolor sit #datamola amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae. ',
    createdAt: new Date('2022-03-14T23:00:00'),
    author: 'Username2',
    comments: [],
  },
  {
    id: '10',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae. ',
    createdAt: new Date('2022-03-4T23:00:00'),
    author: 'Username2',
    comments: [
      {
        id: '1',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae.',
        createdAt: new Date('2022-02-09T23:00:00'),
        author: 'Username78',
        comments: [],
      },
    ],
  },
  {
    id: '11',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae. ',
    createdAt: new Date('2022-01-11T23:00:00'),
    author: 'Username4',
    comments: [],
  },
  {
    id: '12',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae. ',
    createdAt: new Date('2022-03-09T23:00:00'),
    author: 'Username35',
    comments: [
      {
        id: '1',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae.',
        createdAt: new Date('2022-03-09T23:00:00'),
        author: 'Username2',
      },
    ],
  },
  {
    id: '13',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae.',
    createdAt: new Date('2022-01-24T23:00:00'),
    author: 'Username4',
    comments: [
      {
        id: '1',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae.',
        createdAt: new Date('2022-03-09T23:00:00'),
        author: 'Username65',
      },
    ],
  },
  {
    id: '14',
    text: 'Lorem ipsum dolor sit amet #datamola #js consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae. ',
    createdAt: new Date('2022-02-19T23:00:00'),
    author: 'Username5',
    comments: [
      {
        id: '1',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae.',
        createdAt: new Date('2022-03-09T23:00:00'),
        author: 'Username32',
      },
    ],
  },
  {
    id: '15',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae. ',
    createdAt: new Date('2022-02-24T23:00:00'),
    author: 'Username3',
    comments: [],
  },
  {
    id: '16',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae.',
    createdAt: new Date('2022-03-01T23:00:00'),
    author: 'Username2',
    comments: [],
  },
  {
    id: '17',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae. ',
    createdAt: new Date('2022-01-17T23:00:00'),
    author: 'Username5',
    comments: [
      {
        id: '1',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae.',
        createdAt: new Date('2022-03-09T23:00:00'),
        author: 'Username5',
      },
      {
        id: '2',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae.',
        createdAt: new Date('2022-03-09T23:00:00'),
        author: 'Username69',
      },
    ],
  },
  {
    id: '18',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae. ',
    createdAt: new Date('2021-09-19T23:00:00'),
    author: 'Username5',
    comments: [
      {
        id: '1',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae.',
        createdAt: new Date('2022-03-09T23:00:00'),
        author: 'Username89',
      },
    ],
  },
  {
    id: '19',
    text: 'Lorem ipsum dolor sit #js amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae. ',
    createdAt: new Date('2021-02-25T23:00:00'),
    author: 'Username2',
    comments: [
      {
        id: '1',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae.',
        createdAt: new Date('2022-03-09T23:00:00'),
        author: 'Username5',
      },
    ],
  },
  {
    id: '20',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae. ',
    createdAt: new Date('2022-02-01T23:00:00'),
    author: 'Username4',
    comments: [],
  },
  {
    id: '21',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae. ',
    createdAt: new Date('2022-02-24T23:00:00'),
    author: 'Username3',
    comments: [],
  },
  {
    id: '22',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae. ',
    createdAt: new Date('2021-10-27T23:00:00'),
    author: 'Username4',
    comments: [
      {
        id: '1',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae.',
        createdAt: new Date('2022-03-09T23:00:00'),
        author: 'Username89',
      },
    ],
  },
  {
    id: '23',
    text: 'Lorem ipsum dolor sit #js amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae. ',
    createdAt: new Date('2022-02-17T23:00:00'),
    author: 'Username5',
    comments: [
      {
        id: '1',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae.',
        createdAt: new Date('2022-03-09T23:00:00'),
        author: 'Username53',
      },
    ],
  },
  {
    id: '24',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae. ',
    createdAt: new Date('2021-07-09T23:00:00'),
    author: 'Username3',
    comments: [
      {
        id: '1',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae.',
        createdAt: new Date('2022-03-09T23:00:00'),
        author: 'Username65',
      },
    ],
  },
  {
    id: '25',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae. ',
    createdAt: new Date('2019-03-09T23:00:00'),
    author: 'Username2',
    comments: [
      {
        id: '1',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae.',
        createdAt: new Date('2022-03-09T23:00:00'),
        author: 'Username12',
      },
    ],
  },
];

class Tweet {
  constructor(id = '', text = '', createdAt = new Date(), author = '', comments = new Map()) {
    this._id = id;
    this.text = text;
    this._createdAt = createdAt;
    this._author = author;
    this.comments = new Map();
    comments.forEach((comment) => {
      this.comments.set(comment.id, new Comment(comment.id, comment.text, comment.createdAt, comment.author));
    });
  }

  get id() {
    return this._id;
  }

  set id(value) {
    throw new Error(`You can't change this parametr, you value is ${this._id}`);
  }

  get createdAt() {
    return this._createdAt;
  }

  set createdAt(value) {
    throw new Error(`You can't change this parametr, you value is ${this._createdAt}`);
  }

  get author() {
    return this._author;
  }

  set author(value) {
    throw new Error(`You can't change this parametr, you value is ${this._author}`);
  }

  static validate(tweet) {
    const etalonTweet = new Tweet();
    try {
      Object.keys(etalonTweet).forEach((key) => {
        if (Object.prototype.hasOwnProperty.call(tweet, key)) {
          if (Object.prototype.toString.call(etalonTweet[key]) !== Object.prototype.toString.call(tweet[key])) {
            throw new Error(`You need change ${key} type in tweet with id ${tweet._id} to ${Object.prototype.toString.call(etalonTweet[key])}`);
          }
        } else {
          throw new Error(`Don't have ${key} property in you object`);
        }
      });

      Object.keys(tweet).forEach((key) => {
        if (!tweet[key].length && !(tweet[key] instanceof Date || tweet[key] instanceof Map || typeof tweet[key] === 'boolean')) {
          throw new Error(`You need fill ${key}`);
        }
        if (key === 'text' && tweet[key].length >= 280) {
          throw new Error(`Max value for ${key} is 280 characters, but at now ${tweet[key].length} characters`);
        }
      });
      return true;
    } catch (error) {
      console.log(error.message);
      return false;
    }
  }
}

class Comment {
  constructor(id = '', text = '', createdAt = new Date(), author = '') {
    this._id = id;
    this.text = text;
    this._createdAt = createdAt;
    this._author = author;
  }

  get id() {
    return this._id;
  }

  set id(value) {
    throw new Error(`You can't change this parametr, you value is ${this._id}`);
  }

  get createdAt() {
    return this._createdAt;
  }

  set createdAt(value) {
    throw new Error(`You can't change this parametr, you value is ${this._createdAt}`);
  }

  get author() {
    return this._author;
  }

  set author(value) {
    throw new Error(`You can't change this parametr, you value is ${this._author}`);
  }

  static validate(comment) {
    const etalonComment = new Comment();
    try {
      Object.keys(etalonComment).forEach((key) => {
        if (Object.prototype.hasOwnProperty.call(comment, key)) {
          if (Object.prototype.toString.call(etalonComment[key]) !== Object.prototype.toString.call(comment[key])) {
            throw new Error(`You need change ${key} type to ${Object.prototype.toString.call(etalonComment[key])}`);
          }
        } else {
          throw new Error(`Don't have ${key} property in you object`);
        }
      });

      Object.keys(comment).forEach((key) => {
        if (!comment[key].length && !(comment[key] instanceof Date || typeof comment[key] === 'boolean')) {
          throw new Error(`You need fill ${key}`);
        }
        if (key === 'text' && comment[key].length >= 280) {
          throw new Error(`Max value for ${key} is 280 characters, but at now ${comment[key].length} characters`);
        }
      });

      return true;
    } catch (error) {
      console.log(error.message);
      return false;
    }
  }
}

class TweetCollection {
  static _user = '';

  constructor(arrTweet) {
    this.tweets = new Map();
    arrTweet.forEach(({ id, text, createdAt, author, comments }) => {
      const tweet = new Tweet(id, text, createdAt, author, comments);
      try {
        if (Tweet.validate(tweet)) {
          if (this.tweets.has(id)) {
            throw new Error(`Id ${id} occupate, tweet not added`);
          }
          this.tweets.set(id, tweet);
        }
      } catch (error) {
        console.log(error.message);
      }
    });
  }

  addAll(arrTweet) {
    const notValidatedTweets = [];
    arrTweet.forEach((elem) => {
      const { id, text, createdAt, author, comments } = elem;
      const tweet = new Tweet(id, text, createdAt, author, comments);
      try {
        if (!Tweet.validate(tweet)) {
          notValidatedTweets.push(elem);
        } else {
          if (this.tweets.has(id)) {
            notValidatedTweets.push(elem);
            throw new Error(`Id ${id} occupate`);
          }
          this.tweets.set(id, tweet);
        }
      } catch (error) {
        console.log(error.message);
      }
    });
    return notValidatedTweets;
  }

  clear() {
    this.tweets.clear();
  }

  getPage(
    skip = 0,
    top = 10,
    filterConfig = {
      author: '',
      text: '',
      dateFrom: new Date(0),
      dateTo: new Date(),
      hashtags: [],
    },
  ) {
    const filteredTweets = () => {
      const { author = '', text = '', dateFrom = new Date(0), dateTo = new Date(), hashtags = [] } = filterConfig;
      return Array.from(this.tweets.values())
        .filter((tweet) => {
          if (author.trim().length) {
            return tweet.author.toLowerCase() === author.toLowerCase();
          }
          return tweet;
        })
        .filter((tweet) => {
          if (text.trim().length) {
            return tweet.text.toLowerCase().includes(text.toLowerCase());
          }
          return tweet;
        })
        .filter((tweet) => {
          const createdAt = new Date(tweet.createdAt).getTime();
          return createdAt >= new Date(dateFrom).getTime() && createdAt <= new Date(dateTo).getTime();
        })
        .filter((tweet) => {
          if (!hashtags.length) {
            return tweet;
          }
          const hasHashtag = hashtags.every((hashtag) => tweet.text.split(' ').includes(`#${hashtag}`));
          if (!hasHashtag) {
            return false;
          }
          return tweet;
        })
        .sort((a, b) => b.createdAt - a.createdAt);
    };
    try {
      if (!filteredTweets().length) {
        throw new Error('Not found');
      }
      if (skip >= filteredTweets().length) {
        throw new Error(`You want skip ${skip} but array has ${filteredTweets().length} length. Please, insert skip value less ${filteredTweets().length} `);
      }
      return filteredTweets().splice(skip, top);
    } catch (error) {
      console.log(error.message);
      return false;
    }
  }

  get(id) {
    try {
      if (arguments.length < 1) {
        throw new Error('You not insert 1 required parameter');
      } else if (arguments.length > 1) {
        throw new Error('Only 1 parametr');
      } else if (typeof id !== 'string') {
        throw new Error(`Invalid type, you insert ${typeof id}, but I wait string`);
      }
      const searchedTweet = this.tweets.get(id);

      if (searchedTweet) {
        return searchedTweet;
      }
      throw new Error(`Tweet with id ${id} not found`);
    } catch (error) {
      console.log(error.message);
      return false;
    }
  }

  add(text) {
    try {
      if (arguments.length < 1) {
        throw new Error('You not insert 1 required parameter');
      } else if (arguments.length > 1) {
        throw new Error('Only 1 parametr');
      } else if (typeof text !== 'string') {
        throw new Error(`Invalid type, you insert ${typeof text}, but I wait string`);
      }

      const generateId = String(new Date().getTime());
      const tweet = new Tweet(generateId, text, new Date(new Date().getTime()), TweetCollection.user);

      if (Tweet.validate(tweet)) {
        if (this.tweets.has(generateId)) {
          throw new Error(`Id ${generateId} occupate, tweet not added`);
        }
        this.tweets.set(tweet.id, tweet);
        return true;
      }
      return false;
    } catch (error) {
      console.log(error.message);
      return false;
    }
  }

  edit(id, text) {
    try {
      const tweet = this.get(id);
      if (tweet.author === TweetCollection.user) {
        const { createdAt, author, comments } = tweet;
        const editedTweet = new Tweet(id, text, createdAt, author, comments);
        if (Tweet.validate(editedTweet)) {
          this.tweets.set(id, editedTweet);
          return true;
        }
        return false;
      }
      throw new Error('You is not author this tweet');
    } catch (error) {
      console.log(error.message);
      return false;
    }
  }

  remove(id) {
    try {
      if (arguments.length < 1) {
        throw new Error('You not insert 1 required parameter');
      } else if (arguments.length > 1) {
        throw new Error('Only 1 parametr');
      } else if (typeof id !== 'string') {
        throw new Error(`Invalid type, you insert ${typeof id}, but I wait string`);
      }

      const searchedTweet = this.get(id);
      if (searchedTweet) {
        if (searchedTweet.author === TweetCollection.user) {
          this.tweets.delete(id);
          return true;
        }
        throw new Error('You is not author this tweet');
      }
      return false;
    } catch (error) {
      console.log(error.message);
      return false;
    }
  }

  addComment(id, text) {
    try {
      const generateId = String(new Date().getTime());
      const comment = new Comment(generateId, text, new Date(new Date().getTime()), TweetCollection.user);
      const searchedTweet = this.get(id);
      if (searchedTweet) {
        if (Comment.validate(comment)) {
          searchedTweet.comments.set(generateId, comment);
          return true;
        }
      }
      return false;
    } catch (error) {
      console.log(error.message);
      return false;
    }
  }

  static get tweets() {
    return this.tweets;
  }

  static get user() {
    return this._user;
  }

  static set user(name) {
    try {
      if (arguments.length < 1) {
        throw new Error('You not insert 1 required parameter');
      } else if (arguments.length > 1) {
        throw new Error('Only 1 parametr');
      } else if (typeof name !== 'string') {
        throw new Error(`Invalid type, you insert ${typeof name}, but I wait string`);
      }
      this._user = name;
    } catch (error) {
      console.log(error.message);
    }
  }
}

class HeaderView {
  constructor(containerId) {
    this.containerId = containerId;
  }

  display(user) {
    const authorization = document.querySelector(`#${this.containerId}`);
    authorization.innerHTML = ` <span class="header__username">${user}</span>
                                      <button class="button button_primary header__button" data-action="exit">Exit</button>`;
  }
}

class AuthorsView {
  constructor(containerId) {
    this.containerId = containerId;
  }

  display(authors) {
    const formInputDatalist = document.querySelector(`#${this.containerId}`);
    let res = '';
    authors.forEach((author) => {
      res += `<option class="form__input-option" value="${author}">${author}</option>`;
    });
    formInputDatalist.innerHTML = res;
  }
}

class TweetFeedView {
  constructor(containerId) {
    this.containerId = containerId;
  }

  display(tweetsArr) {
    const element = document.querySelector(`#${this.containerId}`);
    let result;
    if (tweetsArr) {
      result = "<ul class='tweets__list'>";
      tweetsArr.forEach((tweet) => {
        result += `<li class="tweet">
        <div class="tweet__header">
          <div class="tweet__container">
            <span class="tweet__username">${tweet.author}</span>
            <div class="tweet__date-container">
              <time class="tweet__date" datetime=${Utils.getDate(tweet.createdAt)}>${Utils.getDate(tweet.createdAt)}</time>
              <time class="tweet__time" datetime=${Utils.getDate(tweet.createdAt)}T${Utils.getTime(tweet.createdAt)}">${Utils.getTime(tweet.createdAt)}</time>
            </div>
            <div class="tweet__comment">
              <i class="icon icon__comment fa-regular fa-comment-dots"></i>
              <span class="tweet__comment-amount">${tweet.comments.size}</span>
            </div>
          </div>
          ${
            tweet.author === TweetCollection.user
              ? `<div class="tweet__icons-container">
          <i class="icon icon__edit fa-regular fa-pen-to-square"></i>
          <i class="icon icon__trash fa-solid fa-trash-can"></i>
        </div>`
              : ''
          }
        </div>
        <p class="tweet__text">${Utils.seachHashtag(tweet.text)}</p>
    </li>`;
      });

      if (tweetsArr.length % 10 === 0) {
        result += '<button id="load" class="button button_primary twitter__button">Load more</button>';
      }

      result += '</ul>';
      element.innerHTML = result;
      const loadMore = element.querySelector('#load');
      if (loadMore) {
        loadMore.addEventListener('click', controller.loadMore.bind(controller));
      }
    } else {
      element.innerHTML = `<div class="not-found">
                              <i class="icon icon_error fa-solid fa-triangle-exclamation fa-4x"></i>
                              <span class="not-found__text">Not found</span>
                           </div>`;
    }
  }
}

class FilterView {
  constructor(containerId) {
    this.containerId = containerId;
  }

  display(filter) {
    const element = document.querySelector(`#${this.containerId}`);
    const { author, text, dateFrom, dateTo } = filter;
    Array.from(element.elements).forEach((item) => {
      const formElem = item;
      switch (formElem.id) {
        case 'author':
          formElem.value = author;
          break;
        case 'text':
          formElem.value = text;
          break;
        case 'date_from':
          formElem.value = Utils.getDate(dateFrom);
          break;
        case 'date_to':
          formElem.value = Utils.getDate(dateTo);
          break;
        default:
          break;
      }
    });
  }
}

class HashtagsView {
  constructor(containerId) {
    this.containerId = containerId;
  }

  display(hashtags = []) {
    const element = document.querySelector(`#${this.containerId}`);
    if (hashtags.length) {
      element.innerHTML = '<span class="hashtag__title">You add:</span>';
      hashtags.forEach((hashtag) => {
        const hashtagElem = document.createElement('div');
        hashtagElem.classList.add('hashtag__container');
        hashtagElem.innerHTML = `<span class="hashtag__name">${hashtag}</span>
                                      <i class="icon icon_gray fa-solid fa-trash-can"></i>
                                      <span class="hashtag__separate">;</span>`;
        element.append(hashtagElem);

        const deleteHashtag = hashtagElem.querySelector('.fa-trash-can');
        deleteHashtag.addEventListener('click', (event) => {
          event.target.parentElement.remove();
          if (element.children.length === 1) {
            element.innerHTML = '';
          }
        });
      });
    }
  }
}

class TweetView {
  constructor(containerId) {
    this.containerId = containerId;
  }

  display(tweet) {
    const element = document.querySelector(`#${this.containerId}`);

    if (!tweet) {
      const result = `<section class="section error">
      <div class="error-container">
        <i class="icon icon_error fa-solid fa-triangle-exclamation fa-4x"></i>
        <span class="error__text">Page not found</span>
      </div>
      <a class="link" href="./index.html">
      <button class="button button_primary" type="button">Back to main</button>
    </a>
    </section>
    `;
      element.innerHTML = result;
    } else {
      const { text, createdAt, author, comments } = tweet;
      const commentsArray = Array.from(comments.values());
      let result = `<section class="section main__container">
                    <a class="link link_icon" href="./index.html">
                        <i class="icon icon_back fa-solid fa-circle-arrow-left fa-2x"></i>
                    </a>`;

      const tweetElem = `<div class="tweet">
                           <div class="tweet__header">
                             <div class="tweet__container">
                               <span class="tweet__username">${author}</span>
                               <div class="tweet__date-container">
                                 <time class="tweet__date" datetime=${Utils.getDate(createdAt)}>${Utils.getDate(createdAt)}</time>
                                 <time class="tweet__time" datetime=${Utils.getDate(createdAt)}T${Utils.getTime(createdAt)}>${Utils.getTime(createdAt)}</time>
                               </div>
                               <div class="tweet__comment">
                                 <i class="icon icon__comment fa-regular fa-comment-dots"></i>
                                 <span class="tweet__comment-amount">4</span>
                               </div>
                             </div>
                             <div class="tweet__icons-container">
                               <i class="icon icon__edit fa-regular fa-pen-to-square"></i>
                               <i class="icon icon__trash fa-solid fa-trash-can"></i>
                             </div>
                           </div>
                           <p class="tweet__text">${Utils.seachHashtag(text)}</p>
                         </div>`;

      result += tweetElem;

      let commentsElem = `<h3 class="main__container-title">Comments</h3>
                          ${commentsArray.length ? '<div class="comments"><ul class="comments__list">' : '<p class="no-comments">No comments yet</p>'}`;

      commentsArray.forEach((comment) => {
        commentsElem += `<li class="comment">
                          <div class="comment__header">
                            <div class="comment__container">
                              <span class="comment__username">${comment.author}</span>
                              <div class="comment__date-container">
                                <time class="tweet__date" datetime=${Utils.getDate(comment.createdAt)}>${Utils.getDate(comment.createdAt)}</time>
                                <time class="tweet__time" datetime=${Utils.getDate(comment.createdAt)}T${Utils.getTime(comment.createdAt)}>${Utils.getTime(comment.createdAt)}</time>
                              </div>
                            </div>
                          </div>
                          <p class="comment__text">${Utils.seachHashtag(comment.text)}</p>
                        </li>`;
      });

      commentsElem += '</ul></div>';

      result += commentsElem;

      result += `<form class="form-add comment__form-add">
                    <div class="form-add__header">
                      <div class="form-add__header-logo">un</div>
                      <textarea
                        class="form-add__placeholder"
                        name="tweet_text"
                        maxlength="280"
                        placeholder="Some text..."
                      ></textarea>
                    </div>
                    <div class="form-add__footer">
                      <p class="form-add__text">
                        <span class="form-add__сharacters-left">280</span>
                        сharacters left
                      </p>
                      <button class="button button_primary form-add__button" type="submit" disabled>
                        Comment
                      </button>
                    </div>
                  </form>
                </section>`;

      element.innerHTML = result;
    }
  }
}

class AutorizationView {
  constructor(containerId) {
    this.containerId = containerId;
  }

  display() {
    const element = document.querySelector(`#${this.containerId}`);
    element.classList.add('main_colomn');
    const result = `
    <section class="section authorization">
      <form class="form authorization__form">
        <h2 class="form__title">Authorization</h2>
        <div class="form__input-container">
          <input class="form__input" type="text" name="login" placeholder="Login" required />
          <small class="form__error-message">Error message</small>
        </div>
        <div class="form__input-container">
          <input class="form__input" type="text" name="password" placeholder="Password" required />
          <small class="form__error-message">Error message</small>
        </div>
        <div class="form__buttons">
          <button class="button button_secondary form__button" type="button" data-action="registration">Registration</button>
          <button class="button button_primary form__button" type="submit">Login</button>
        </div>
     </form>
    </section>
    <a class="link" href="./index.html">
      <button class="button button_primary" type="button">Back to main</button>
    </a>`;

    element.innerHTML = result;

    const registration = document.querySelector('[data-action="registration"]');
    registration.addEventListener('click', (e) => {
      controller.registrationView.display();
    });
  }
}

class RegistrationView {
  constructor(containerId) {
    this.containerId = containerId;
  }

  display() {
    const element = document.querySelector(`#${this.containerId}`);
    element.classList.add('main_colomn');
    const result = `
    <section class="section registration">
        <form class="form registration__form">
          <h2 class="form__title">Registration</h2>
          <div class="form__input-container">
            <input class="form__input" type="text" name="login" placeholder="Login" required />
            <small class="form__error-message">Error message</small>
          </div>
          <div class="form__input-container">
            <input class="form__input" type="text" name="password" placeholder="Password" required />
            <small class="form__error-message">Error message</small>
          </div>
          <div class="form__input-container">
            <input class="form__input" type="text" name="password-repeat" placeholder="Password repeat" required />
            <small class="form__error-message">Error message</small>
          </div>
          <div class="form__buttons">
              <button class="button button_secondary form__button" type="button" data-action="authorization">Authorization</button>
              <button class="button button_primary form__button" type="submit">Register</button>
          </div>
        </form>
      </section>
      <a class="link" href="./index.html">
        <button class="button button_primary" type="button">Back to main</button>
      </a>`;

    element.innerHTML = result;

    const authorization = document.querySelector('[data-action="authorization"]');
    authorization.addEventListener('click', (e) => {
      controller.autorizationView.display();
    });
  }
}

class ModalView {
  static display() {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `<div class="modal__container">
                          <h3 class="modal__title">Are you sure?</h3>
                          <div class="modal__buttons">
                              <button class="button button_secondary modal__button" type="button">No</button>
                              <button class="button button_primary modal__button" type="button">Yes</button>
                          </div>
                        </div>`;
    document.body.append(modal);
    return true;
  }

  static close() {
    const modal = document.querySelector('.modal');
    if (modal) {
      modal.remove();
      return true;
    }
    return false;
  }
}

class Utils {
  static seachHashtag(str) {
    const regularHastag = /#[0-9A-Za-zА-Яа-яё]+/g;
    const replacer = (str) => `<span class="tweet__text_hashag">${str}</span>`;
    return str.replace(regularHastag, replacer);
  }

  static getDate(date) {
    const time = [new Date(date).getFullYear(), new Date(date).getMonth() + 1, new Date(date).getDate()];
    if (time[0] < 10) {
      time[0] = `0${time[0]}`;
    }
    if (time[1] < 10) {
      time[1] = `0${time[1]}`;
    }
    if (time[2] < 10) {
      time[2] = `0${time[2]}`;
    }
    return time.join('-');
  }

  static getTime(date) {
    const time = [new Date(date).getHours(), new Date(date).getMinutes(), new Date(date).getSeconds()];
    if (time[0] < 10) {
      time[0] = `0${time[0]}`;
    }
    if (time[1] < 10) {
      time[1] = `0${time[1]}`;
    }
    if (time[2] < 10) {
      time[2] = `0${time[2]}`;
    }
    return time.join(':');
  }
}

class TweetsController {
  constructor() {
    this.myTweet = new TweetCollection(tweets);
    this.headerView = new HeaderView('authorization');
    this.authorsView = new AuthorsView('names');
    this.filterView = new FilterView('filterForm');
    this.hashtagsView = new HashtagsView('form__hashtag');
    this.tweetFeedView = new TweetFeedView('tweets');
    this.tweetView = new TweetView('main');
    this.autorizationView = new AutorizationView('main');
    this.registrationView = new RegistrationView('main');
    this.top = 10;
  }

  setAutors() {
    const arrTweet = Array.from(this.myTweet.tweets.values());
    const arrAuthors = new Set(arrTweet.map((tweet) => tweet.author));
    this.authorsView.display(arrAuthors);
    return true;
  }

  setCurrentUser(user) {
    if (typeof user === 'string' && user.trim()) {
      TweetCollection.user = user;
      this.headerView.display(user);
      this.getFeed();
      return true;
    }
    return false;
  }

  addTweet(text) {
    if (typeof text === 'string' && text.trim()) {
      this.myTweet.add(text);
      this.tweetFeedView.display(this.myTweet.getPage());
      this.setAutors();
      return true;
    }
    return false;
  }

  editTweet(id, text) {
    if (typeof id === 'string' && id.trim() && typeof text === 'string' && text.trim()) {
      this.myTweet.edit(id, text);
      this.tweetFeedView.display(this.myTweet.getPage());
      return true;
    }
    return false;
  }

  removeTweet(id) {
    if (typeof id === 'string' && id.trim()) {
      this.myTweet.remove(id);
      this.tweetFeedView.display(this.myTweet.getPage());
      this.setAutors();
      return true;
    }
    return false;
  }

  getFeed(
    skip = 0,
    top = 10,
    filterConfig = {
      author: '',
      text: '',
      dateFrom: new Date(0),
      dateTo: new Date(),
      hashtags: [],
    },
  ) {
    if (Number.isInteger(skip) && Number.isInteger(top)) {
      this.tweetFeedView.display(this.myTweet.getPage(skip, top, filterConfig));
      this.filterView.display(filterConfig);
      this.hashtagsView.display(filterConfig.hashtags);
      return true;
    }
    return false;
  }

  showTweet(id) {
    if (typeof id === 'string' && id.trim()) {
      this.tweetView.display(this.myTweet.get(id));
      return true;
    }
    return false;
  }

  addHashtag() {
    const inputHashtag = document.querySelector('#hashtag');
    if (inputHashtag.value.trim()) {
      const hashtags = [...document.querySelectorAll('.hashtag__name')].map((hashtag) => hashtag.innerText);
      hashtags.push(inputHashtag.value);
      this.hashtagsView.display(hashtags);
      inputHashtag.value = '';
    }
  }

  getFiters() {
    const hashtags = [...document.querySelectorAll('.hashtag__name')].map((hashtag) => hashtag.innerText);
    const formData = {
      author: filterForm.author.value,
      text: filterForm.text.value,
      hashtags,
    };
    if (filterForm.date_from.value) {
      formData.dateFrom = new Date(filterForm.date_from.value);
    } else {
      formData.dateFrom = new Date(0);
    }
    if (filterForm.date_to.value) {
      formData.dateTo = new Date(filterForm.date_to.value);
    } else {
      formData.dateTo = new Date();
    }
    return formData;
  }

  filterSubmit(event) {
    event.preventDefault();
    this.getFeed(0, 10, this.getFiters());
  }

  loadMore() {
    this.getFeed(0, (this.top += 10), this.getFiters());
  }
}

const controller = new TweetsController();

controller.setAutors();
controller.getFeed();

const filterForm = document.querySelector('#filterForm');
const addHashtag = document.querySelector('#addHashtag');
const authorization = document.querySelector('[data-action="authorization"]');

addHashtag.addEventListener('click', controller.addHashtag.bind(controller));
filterForm.addEventListener('submit', controller.filterSubmit.bind(controller));
filterForm.addEventListener('reset', () => controller.getFeed());
authorization.addEventListener('click', () => {
  controller.autorizationView.display();
});
