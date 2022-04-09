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
    createdAt: new Date('2022-03-04T23:00:00'),
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

const users = [
  { login: 'admin', password: '12345678' },
  { login: '1', password: '1' },
  { login: 'Username2', password: '12345678' },
  { login: 'Username3', password: '12345678' },
  { login: 'Username4', password: '12345678' },
  { login: 'Username5', password: '12345678' },
  { login: 'Username35', password: '12345678' },
];

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
            if (key !== '_createdAt') {
              throw new Error(`You need change ${key} type in tweet with id ${tweet._id} to ${Object.prototype.toString.call(etalonTweet[key])}`);
            }
          }
        } else {
          throw new Error(`Don't have ${key} property in you object`);
        }
      });

      Object.keys(tweet).forEach((key) => {
        if (!tweet[key].length && !(tweet[key] instanceof Date || tweet[key] instanceof Map || typeof tweet[key] === 'boolean')) {
          throw new Error(`You need fill ${key}`);
        }
        if (key === 'text' && tweet[key].length > 281) {
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
    this.arr = arrTweet;
    this.restore();
    this.arr.forEach((item) => {
      const tweet = new Tweet(item._id || item.id, item.text, item._createdAt || item.createdAt, item._author || item.author, item.comments);
      try {
        if (Tweet.validate(tweet)) {
          if (this.tweets.has(item._id || item.id)) {
            throw new Error(`Id ${item._id || item.id} occupate, tweet not added`);
          }
          this.tweets.set(item._id || item.id, tweet);
        }
      } catch (error) {
        console.log(error.message);
      }
    });
  }

  save() {
    const tw = JSON.parse(JSON.stringify([...this.tweets.values()]));
    const comments = JSON.parse(JSON.stringify([...this.tweets.values()].map((i) => [...i.comments.values()])));
    const result = tw.map((item, index) => {
      item.comments = comments[index];
      return item;
    });
    localStorage.setItem('tweets', JSON.stringify(result));
    this.restore();
  }

  restore() {
    this.arr = JSON.parse(localStorage.getItem('tweets'));
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
          this.save();
        }
      } catch (error) {
        console.log(error.message);
      }
    });
    return notValidatedTweets;
  }

  clear() {
    this.tweets.clear();
    this.save();
  }

  getPage(
    skip = 0,
    top = 10,
    filterConfig = {
      author: '',
      text: '',
      dateFrom: new Date(0).setHours(0, 0, 1),
      dateTo: new Date().setHours(23, 59, 59),
      hashtags: [],
    },
  ) {
    const filteredTweets = () => {
      const { author = '', text = '', dateFrom = new Date(0).setHours(0, 0, 1), dateTo = new Date().setHours(23, 59, 59), hashtags = [] } = filterConfig;

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
          const dateFromValue = new Date(dateFrom).setHours(0, 0, 1);
          const dateToValue = new Date(dateTo).setHours(23, 59, 59);
          return createdAt >= dateFromValue && createdAt <= dateToValue;
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
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
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
        this.save();
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
          this.save();
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
        if (searchedTweet.author.toLowerCase() === TweetCollection.user.toLowerCase()) {
          this.tweets.delete(id);
          this.save();
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
          this.save();
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

class UserCollection {
  constructor(data) {
    this.users = data;
    this.restore();
  }

  add(newUser) {
    this.users.push(newUser);
    this.save();
  }

  getUsers() {
    return this.users;
  }

  save() {
    localStorage.setItem('users', JSON.stringify(this.getUsers()));
  }

  restore() {
    this.users = JSON.parse(localStorage.getItem('users'));
  }
}

class HeaderView {
  constructor(containerId) {
    this.containerId = containerId;
  }

  display(user = TweetCollection.user) {
    const authorization = document.querySelector(`#${this.containerId}`);
    authorization.style.display = 'flex';
    const burger = document.querySelector('.burger');
    burger.classList.remove('hide');
    if (user) {
      authorization.innerHTML = ` <span class="header__username">${user}</span>
      <button class="button button_primary header__button" data-action="exit">Exit</button>`;
    } else {
      authorization.innerHTML = '<button class="button button_primary header__button" data-action="authorization">Sign In</button>';
    }

    const login = document.querySelector('[data-action="authorization"]');
    const exit = document.querySelector('[data-action="exit"]');

    if (login) {
      login.addEventListener('click', () => {
        controller.autorizationView.display();
      });
    }
    if (exit) {
      exit.addEventListener('click', () => {
        controller.setCurrentUser('');
      });
    }
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

class FilterView {
  constructor(containerId) {
    this.containerId = containerId;
  }

  display(
    filter = {
      author: '',
      text: '',
      dateFrom: new Date(0),
      dateTo: new Date(),
      hashtags: [],
    },
  ) {
    const element = document.querySelector(`#${this.containerId}`);
    const { author, text, dateFrom, dateTo } = filter;

    const result = `<aside id="filter" class="section filter">
                      <form id="filterForm" class="form filter__form">
                      <h3 class="form__title">Filter by:</h3>
                      <div class="form__input-container">
                       <label class="form__input-label" for="name">Name</label>
                       <input class="form__input" id="author" ${author ? `value=${author}` : ''} name="author"  type="text" list="names" placeholder="Name" />
                       <datalist class="form__input-datalist" id="names"> </datalist>
                      </div>
                     <div class="form__input-container">
                       <label class="form__input-label" for="text">Text</label>
                       <input class="form__input" id="text" ${text ? `value=${text}` : ''} type="text" name="text" placeholder="Text" />
                     </div>
                     <div class="form__input-container">
                       <label class="form__input-label" for="date_from">Date</label>
                       <input class="form__input" id="date_from" value=${Utils.getDate(dateFrom)} type="date"  name="date_from" placeholder="from" />
                       <input class="form__input" id="date_to" value=${Utils.getDate(dateTo)} type="date" name="date_to" placeholder="to" />
                     </div>
                     <div class="form__input-container">
                       <label class="form__input-label" for="hashtag">Hashtag</label>
                       <div class="form__input-container form__input-container_row">
                         <input class="form__input" id="hashtag" type="text" name="hashtag" placeholder="tag" />
                         <i id="addHashtag" class="icon fa-solid fa-plus"></i>
                       </div>
                       <div id ="form__hashtag" class="hashtag form__hashtag"></div>
                     </div>
                     <div class="form__buttons">
                       <button class="button button_secondary form__button" type="reset">Clear</button>
                       <button class="button button_primary form__button" type="submit">Apply</button>
                     </div>
                   </form>
                  </aside>`;
    element.innerHTML = result;

    controller.setAutors();
    const addHashtag = document.querySelector('#addHashtag');
    const filterForm = document.querySelector('#filterForm');
    addHashtag.addEventListener('click', controller.addHashtag.bind(controller));
    filterForm.addEventListener('submit', controller.filterSubmit.bind(controller));
    filterForm.addEventListener('reset', () => {
      controller.filterView.display();
      controller.twitterView.display(controller.myTweet.getPage());
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
    const burger = document.querySelector('.burger');
    burger.classList.add('hide');

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
      const { id, text, createdAt, author, comments } = tweet;

      const commentsArray = Array.from(comments.values()).sort((a, b) => b.createdAt - a.createdAt);
      let result = `<section class="section main__container" data-id=${id}>
                      <a class="link link_icon">
                          <i class="icon icon_back fa-solid fa-circle-arrow-left fa-2x" data-action="backToMain"></i>
                      </a>`;

      const tweetElem = `<div class="tweet" >
                           <div class="tweet__header">
                             <div class="tweet__container">
                               <span class="tweet__username">${author}</span>
                               <div class="tweet__date-container">
                                 <time class="tweet__date" datetime=${Utils.getDate(createdAt)}>${Utils.getDate(createdAt)}</time>
                                 <time class="tweet__time" datetime=${Utils.getDate(createdAt)}T${Utils.getTime(createdAt)}>${Utils.getTime(createdAt)}</time>
                               </div>
                               <div class="tweet__comment">
                                 <i class="icon icon__comment fa-regular fa-comment-dots"></i>
                                 <span class="tweet__comment-amount">${comments.size}</span>
                               </div>
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

      if (TweetCollection.user.length) {
        result += `<form class="form-add comment__form-add ">
        <div class="form-add__header">
          <div class="form-add__header-logo">${TweetCollection.user[0].toUpperCase()}</div>
          <textarea
            class="form-add__placeholder"
            name="text"
            maxlength="280"
            placeholder="Some text..."
          ></textarea>
        </div>
        <div class="form-add__footer">
          <p class="form-add__text">
            <span class="form-add__сharacters-left">280</span>
            сharacters left
          </p>
          <button class="button button_primary form-add__button" type="submit">Comment</button>
        </div>
      </form>`;
      }

      result += '</section>';

      element.innerHTML = result;

      const backToMain = document.querySelector('[data-action="backToMain"]');
      const commentAdd = document.querySelector('.comment__form-add');
      if (commentAdd) {
        commentAdd.addEventListener('submit', controller.addComment.bind(controller));
        const charactersLeft = commentAdd.querySelector('.form-add__сharacters-left');
        commentAdd.addEventListener('input', (e) => {
          charactersLeft.innerText = 280 - e.target.value.length;
        });
      }
      backToMain.addEventListener('click', (e) => {
        burger.classList.remove('hide');
        controller.filterView.display();
        controller.twitterView.display(controller.myTweet.getPage());
      });
    }
  }
}

class TwitterView {
  constructor(containerId) {
    this.containerId = containerId;
  }

  display(tweetsArr) {
    const element = document.querySelector(`#${this.containerId}`);
    element.classList.remove('main_colomn');
    const sectionTwitter = document.createElement('section');
    sectionTwitter.id = 'twitter';
    sectionTwitter.classList.add('section', 'twitter', 'main__twitter');
    element.append(sectionTwitter);
    let tweetsList;
    const addForm = `${
      TweetCollection.user.length
        ? `<form class="form-add twitter__form-add" data-action='add'>
      <div class="form-add__header">
        <div class="form-add__header-logo">${TweetCollection.user[0].toUpperCase()}</div>
        <textarea class="form-add__placeholder" name="text" maxlength="280" placeholder="Some text..."></textarea>
      </div>
      <div class="form-add__footer">
        <p class="form-add__text">
          <span class="form-add__сharacters-left">280</span>
          сharacters left
        </p>
        <button class="button button_primary form-add__button" type="submit" >Tweet</button>
      </div>
    </form>`
        : ''
    }
    `;
    if (tweetsArr) {
      tweetsList = `<div id='tweets' class='tweets'>
                      <ul id="tweets__list" class='tweets__list'>`;
      tweetsArr.forEach((tweet) => {
        tweetsList += `<li class="tweet" data-id=${tweet.id}>
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
            tweet.author.toLowerCase() === TweetCollection.user.toLowerCase()
              ? `<div class="tweet__icons-container">
          <i class="icon icon__edit fa-regular fa-pen-to-square" data-action="edit"></i>
          <i class="icon icon__trash fa-solid fa-trash-can" data-action="remove"></i>
        </div>`
              : ''
          }
        </div>
        <p class="tweet__text">${Utils.seachHashtag(tweet.text)}</p>
    </li>`;
      });

      tweetsList += `</ul>${tweetsArr.length % 10 === 0 ? '<button class="button button_primary twitter__button" data-action="loadMore" data-top="10">Load more</button>' : ''}</div>`;
      sectionTwitter.innerHTML = addForm + tweetsList;

      document.querySelector('.tweets__list').addEventListener('click', controller.tweetActions.bind(controller));
      if (document.querySelector('[data-action="loadMore"]')) {
        document.querySelector('[data-action="loadMore"]').addEventListener('click', controller.loadMore.bind(controller));
      }
    } else {
      sectionTwitter.innerHTML = `<div class="not-found">
                              <i class="icon icon_error fa-solid fa-triangle-exclamation fa-4x"></i>
                              <span class="not-found__text">Not found</span>
                           </div>`;
    }

    const formAdd = document.querySelector('[data-action="add"]');

    if (formAdd) {
      formAdd.addEventListener('submit', controller.addTweet.bind(controller));
      const charactersLeft = formAdd.querySelector('.form-add__сharacters-left');
      formAdd.addEventListener('input', (e) => {
        charactersLeft.innerText = 280 - e.target.value.length;
      });
    }
  }
}

class UpdateTweetsView {
  constructor(containerId) {
    this.containerId = containerId;
  }

  display(tweetsArr) {
    const element = document.querySelector(`#${this.containerId}`);
    let result = '';
    tweetsArr.forEach((tweet) => {
      result += `<li class="tweet" data-id=${tweet.id}>
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
          tweet.author.toLowerCase() === TweetCollection.user.toLowerCase()
            ? `<div class="tweet__icons-container">
        <i class="icon icon__edit fa-regular fa-pen-to-square" data-action="edit"></i>
        <i class="icon icon__trash fa-solid fa-trash-can" data-action="remove"></i>
      </div>`
            : ''
        }
      </div>
      <p class="tweet__text">${Utils.seachHashtag(tweet.text)}</p>
  </li>`;
    });
    element.innerHTML = result;
    /*  element.addEventListener('click', controller.tweetActions.bind(controller)); */
    if (!(tweetsArr.length % 10 === 0)) {
      document.querySelector('[data-action="loadMore"]').remove();
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
    const burger = document.querySelector('.burger');
    burger.classList.add('hide');
    const headerAuthorization = document.querySelector('.header__authorization');
    headerAuthorization.style.display = 'none';

    const result = `
    <section class="section authorization">
      <form class="form authorization__form">
        <h2 class="form__title">Authorization</h2>
        <div class="form__input-container">
          <input class="form__input" type="text" name="login" placeholder="Login" required />
          <small class="form__error-message form__error-message_login"></small>
        </div>
        <div class="form__input-container">
          <input class="form__input" type="password" name="password" placeholder="Password" required />
          <small class="form__error-message form__error-message_password"></small>
        </div>
        <div class="form__buttons">
          <button class="button button_secondary form__button" type="button" data-action="registration">Registration</button>
          <button class="button button_primary form__button" type="submit">Login</button>
        </div>
     </form>
    </section>
      <button class="button button_primary" type="button" data-action="backToMain">Back to main</button>
 `;

    element.innerHTML = result;

    const authorizationForm = document.querySelector('.authorization__form');
    const registration = authorizationForm.querySelector('[data-action="registration"]');
    const backToMain = document.querySelector('[data-action="backToMain"]');

    registration.addEventListener('click', () => controller.registrationView.display());
    backToMain.addEventListener('click', () => {
      controller.headerView.display();
      controller.filterView.display();
      controller.twitterView.display(controller.myTweet.getPage());
    });
    authorizationForm.addEventListener('submit', controller.authorization.bind(controller));
  }
}

class RegistrationView {
  constructor(containerId) {
    this.containerId = containerId;
  }

  display() {
    const element = document.querySelector(`#${this.containerId}`);
    element.classList.add('main_colomn');
    const burger = document.querySelector('.burger');
    burger.classList.add('hide');
    const headerAuthorization = document.querySelector('.header__authorization');
    headerAuthorization.style.display = 'none';
    const result = `
    <section class="section registration">
        <form class="form registration__form">
          <h2 class="form__title">Registration</h2>
          <div class="form__input-container">
            <input class="form__input" type="text" name="login" placeholder="Login" required />
            <small class="form__error-message form__error-message_login"></small>
          </div>
          <div class="form__input-container">
            <input class="form__input" type="password" name="password" placeholder="Password" required />
            <small class="form__error-message form__error-message_password"></small>
          </div>
          <div class="form__input-container">
            <input class="form__input" type="password" name="passwordRepeat" placeholder="Password repeat" required />
            <small class="form__error-message form__error-message_password-repeat"></small>
          </div>
          <div class="form__buttons">
              <button class="button button_secondary form__button" type="button" data-action="authorization">Authorization</button>
              <button class="button button_primary form__button" type="submit">Register</button>
          </div>
        </form>
      </section>
      <button class="button button_primary" type="button" data-action="backToMain">Back to main</button>`;

    element.innerHTML = result;

    const authorizationForm = document.querySelector('.registration__form');
    const authorization = element.querySelector('[data-action="authorization"]');
    const backToMain = document.querySelector('[data-action="backToMain"]');

    authorization.addEventListener('click', () => controller.autorizationView.display());
    backToMain.addEventListener('click', () => {
      controller.headerView.display();
      controller.filterView.display();
      controller.twitterView.display(controller.myTweet.getPage());
    });
    authorizationForm.addEventListener('submit', controller.registration.bind(controller));
  }
}

class ModalView {
  constructor(containerId) {
    this.containerId = containerId;
  }

  display(id) {
    const element = document.querySelector(`#${this.containerId}`);
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `<div class="modal__container">
                          <h3 class="modal__title">Are you sure?</h3>
                          <div class="modal__buttons">
                              <button class="button button_secondary modal__button" type="button" data-action="no">No</button>
                              <button class="button button_primary modal__button" type="button" data-id=${id} data-action="yes">Yes</button>
                          </div>
                        </div>`;
    element.append(modal);
    modal.addEventListener('click', controller.modalControler.bind(controller));
  }
}

class TweetsController {
  constructor() {
    this.myTweet = new TweetCollection(tweets);
    this.users = new UserCollection(users);
    this.headerView = new HeaderView('authorization');
    this.authorsView = new AuthorsView('names');
    this.filterView = new FilterView('main');
    this.hashtagsView = new HashtagsView('form__hashtag');
    this.tweetView = new TweetView('main');
    this.updateTweetsView = new UpdateTweetsView('tweets__list');
    this.twitterView = new TwitterView('main');
    this.autorizationView = new AutorizationView('main');
    this.registrationView = new RegistrationView('main');
    this.modalView = new ModalView('body');
  }

  loadMore(event) {
    const { dataset } = event.target;
    dataset.top = +dataset.top + 10;
    this.updateTweetsView.display(this.myTweet.getPage(0, dataset.top, this.getFiters()));
  }

  addComment(event) {
    event.preventDefault();
    const parentElem = event.path.find((elem) => elem.classList.contains('section'));
    const data = Object.fromEntries(new FormData(event.target));
    event.target.reset();
    this.myTweet.addComment(parentElem.dataset.id, data.text);
    this.tweetView.display(this.myTweet.get(parentElem.dataset.id));
  }

  modalControler(event) {
    const parentElem = event.path.find((elem) => elem.className === 'modal');
    if (event.target.dataset.action === 'no') {
      parentElem.remove();
    }

    if (event.target.dataset.action === 'yes') {
      this.removeTweet(event.target.dataset.id);
      parentElem.remove();
    }
  }

  setAutors() {
    const arrTweet = Array.from(this.myTweet.tweets.values());
    const arrAuthors = new Set(arrTweet.map((tweet) => tweet.author));
    this.authorsView.display(arrAuthors);
  }

  setCurrentUser(user) {
    TweetCollection.user = user;
    this.headerView.display(user);
    this.filterView.display();
    this.twitterView.display(this.myTweet.getPage());
    localStorage.setItem('currUser', JSON.stringify(TweetCollection.user));
  }

  addTweet(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    event.target.reset();
    this.myTweet.add(data.text);
    this.filterView.display();
    this.twitterView.display(this.myTweet.getPage());
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
      this.filterView.display(filterConfig);
      this.hashtagsView.display(filterConfig.hashtags);
      this.twitterView.display(this.myTweet.getPage(skip, top, filterConfig));
      return true;
    }
    return false;
  }

  tweetActions(event) {
    const clickedElem = event.path.find((elem) => elem.className === 'tweet');
    let clickedElemId;

    if (clickedElem) {
      clickedElemId = clickedElem.dataset.id;
      if (event.target.dataset.action === 'remove') {
        this.modalView.display(clickedElemId);
        return;
      }
      if (event.target.dataset.action === 'edit') {
        const formAdd = document.querySelector('.twitter__form-add');
        formAdd.remove();
        const formEdit = document.createElement('form');
        formEdit.classList.add('form-add', 'twitter__form-add');
        formEdit.setAttribute('data-action', 'edit');
        formEdit.innerHTML = `<div class="form-add__header">
          <div class="form-add__header-logo">${TweetCollection.user[0].toUpperCase()}</div>
          <textarea class="form-add__placeholder" name="text" maxlength="280" placeholder="Some text..."></textarea>
        </div>
        <div class="form-add__footer">
          <p class="form-add__text">
            <span class="form-add__сharacters-left">280</span>
            сharacters left
          </p>
          <button class="button button_primary form-add__button" type="submit" >Tweet</button>
        </div>`;
        document.querySelector('.main__twitter').prepend(formEdit);

        const formAddPlaceholder = document.querySelector('.form-add__placeholder');
        const charactersLeft = document.querySelector('.form-add__сharacters-left');
        formAddPlaceholder.value = this.myTweet.get(clickedElemId).text;
        charactersLeft.innerText = formAddPlaceholder.maxLength - formAddPlaceholder.value.length;
        formAddPlaceholder.addEventListener('input', (e) => {
          charactersLeft.innerText = formAddPlaceholder.maxLength - e.target.value.length;
        });
        formEdit.addEventListener('submit', (e) => {
          e.preventDefault();
          const data = Object.fromEntries(new FormData(formEdit));
          formEdit.reset();
          this.editTweet(clickedElemId, data.text);
        });
        return;
      }
      this.showTweet(clickedElemId);
    }
  }

  editTweet(id, text) {
    this.myTweet.edit(id, text);
    this.filterView.display();
    this.twitterView.display(this.myTweet.getPage());
  }

  removeTweet(id) {
    this.myTweet.remove(id);
    this.filterView.display();
    this.twitterView.display(this.myTweet.getPage());
  }

  showTweet(id) {
    this.tweetView.display(this.myTweet.get(id));
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
    const filterForm = document.querySelector('#filterForm');
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
    const formData = this.getFiters();
    this.filterView.display(formData);
    this.hashtagsView.display(formData.hashtags);
    this.twitterView.display(this.myTweet.getPage(0, 10, formData));
  }

  authorization(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    const errorPassword = event.target.querySelector('.form__error-message_password');
    const errorLogin = event.target.querySelector('.form__error-message_login');

    const foundUser = this.users.getUsers().find((user) => user.login === data.login);
    if (foundUser) {
      errorLogin.innerText = '';
      if (foundUser.password === data.password) {
        errorPassword.innerText = '';
        event.target.reset();
        this.setCurrentUser(foundUser.login);
      } else {
        errorPassword.innerText = 'Password incorrect';
      }
    } else {
      errorLogin.innerText = `${data.login} not register`;
    }
  }

  registration(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    const errorLogin = event.target.querySelector('.form__error-message_login');
    const errorPassword = event.target.querySelector('.form__error-message_password');
    const errorPasswordRepeat = event.target.querySelector('.form__error-message_password-repeat');

    const foundUser = this.users.getUsers().find((user) => user.login.toLowerCase() === data.login.toLowerCase());

    if (!foundUser) {
      errorLogin.innerText = '';
      if (data.password !== data.passwordRepeat) {
        errorPassword.innerText = 'Passwords do not match';
        errorPasswordRepeat.innerText = 'Passwords do not match';
      } else {
        errorPassword.innerText = '';
        errorPasswordRepeat.innerText = '';
        this.users.add({ login: data.login, password: data.password });
        event.target.reset();
        this.autorizationView.display();
      }
    } else {
      errorLogin.innerText = `${foundUser.login} already registered`;
    }
  }
}

const addDataToLocalStoradge = () => {
  if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify(users));
  }
  if (!localStorage.getItem('tweets')) {
    localStorage.setItem('tweets', JSON.stringify(tweets));
  }
  if (!localStorage.getItem('currUser')) {
    localStorage.setItem('currUser', JSON.stringify(TweetCollection.user));
  }
};

addDataToLocalStoradge();

const controller = new TweetsController();

document.addEventListener('DOMContentLoaded', () => {
  TweetCollection.user = JSON.parse(localStorage.getItem('currUser'));
  controller.headerView.display();
  controller.filterView.display();
  controller.twitterView.display(controller.myTweet.getPage());
});
