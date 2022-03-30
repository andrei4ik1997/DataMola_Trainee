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
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae.',
    createdAt: new Date('2022-03-09T23:00:00'),
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
      this.comments.set(
        comment.id,
        new Comment(comment.id, comment.text, comment.createdAt, comment.author),
      );
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
          if (
            Object.prototype.toString.call(etalonTweet[key]) !==
            Object.prototype.toString.call(tweet[key])
          ) {
            throw new Error(
              `You need change ${key} type in tweet with id ${
                tweet._id
              } to ${Object.prototype.toString.call(etalonTweet[key])}`,
            );
          }
        } else {
          throw new Error(`Don't have ${key} property in you object`);
        }
      });

      Object.keys(tweet).forEach((key) => {
        if (
          !tweet[key].length &&
          !(
            tweet[key] instanceof Date ||
            tweet[key] instanceof Map ||
            typeof tweet[key] === 'boolean'
          )
        ) {
          throw new Error(`You need fill ${key}`);
        }
        if (key === 'text' && tweet[key].length >= 280) {
          throw new Error(
            `Max value for ${key} is 280 characters, but at now ${tweet[key].length} characters`,
          );
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
          if (
            Object.prototype.toString.call(etalonComment[key]) !==
            Object.prototype.toString.call(comment[key])
          ) {
            throw new Error(
              `You need change ${key} type to ${Object.prototype.toString.call(
                etalonComment[key],
              )}`,
            );
          }
        } else {
          throw new Error(`Don't have ${key} property in you object`);
        }
      });

      Object.keys(comment).forEach((key) => {
        if (
          !comment[key].length &&
          !(comment[key] instanceof Date || typeof comment[key] === 'boolean')
        ) {
          throw new Error(`You need fill ${key}`);
        }
        if (key === 'text' && comment[key].length >= 280) {
          throw new Error(
            `Max value for ${key} is 280 characters, but at now ${comment[key].length} characters`,
          );
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
      const {
        author = '',
        text = '',
        dateFrom = new Date(0),
        dateTo = new Date(),
        hashtags = [],
      } = filterConfig;
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
          return (
            createdAt >= new Date(dateFrom).getTime() && createdAt <= new Date(dateTo).getTime()
          );
        })
        .filter((tweet) => {
          if (hashtags.length) {
            const hasHashtag = hashtags.every((hashtag) => tweet.text.split(' ').includes(hashtag));
            if (hasHashtag) return tweet;
          }
          return tweet;
        })
        .sort((a, b) => b.createdAt - a.createdAt);
    };
    try {
      if (skip >= filteredTweets().length) {
        throw new Error(
          `You want skip ${skip} but array has ${
            filteredTweets().length
          } length. Please, insert skip value less ${filteredTweets().length} `,
        );
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
      const tweet = new Tweet(
        generateId,
        text,
        new Date(new Date().getTime()),
        TweetCollection.user,
      );

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
        const editTweet = new Tweet(id, text, createdAt, author, comments);
        if (Tweet.validate(editTweet)) {
          this.tweets.set(id, editTweet);
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
      const comment = new Comment(
        generateId,
        text,
        new Date(new Date().getTime()),
        TweetCollection.user,
      );
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

  static setUser(name) {
    try {
      if (arguments.length < 1) {
        throw new Error('You not insert 1 required parameter');
      } else if (arguments.length > 1) {
        throw new Error('Only 1 parametr');
      } else if (typeof name !== 'string') {
        throw new Error(`Invalid type, you insert ${typeof name}, but I wait string`);
      }
      this._user = name;
      return true;
    } catch (error) {
      console.log(error.message);
      return false;
    }
  }
}

class HeaderView {
  constructor(containerId) {
    this.containerId = containerId;
  }

  display(params = null) {
    const element = document.querySelector(`#${this.containerId}`);
    const headerAuthorization = element.querySelector('.header__authorization');
    headerAuthorization.innerHTML = ` <span class="header__username">${params}</span>
                                      <button class="button button_primary header__button">Exit</button>`;
  }
}

class TweetFeedView {
  constructor(containerId) {
    this.containerId = containerId;
  }

  display(params = null) {
    const element = document.querySelector(`#${this.containerId}`);
    let result = "<ul class='tweets__list'>";
    for (let i = 0; i < 10; i += 1) {
      result += `<li class="tweet">
      <a class="link link__tweet" href="./twit/.html">
        <div class="tweet__header">
          <div class="tweet__container">
            <span class="tweet__username">${params[i].author}</span>
            <div class="tweet__date-container">
              <time class="tweet__date" datetime="2022-03-01">${params[i].createdAt}</time>
              <time class="tweet__time" datetime="2022-03-01T00:00:00">${params[i].createdAt}</time>
            </div>
            <div class="tweet__comment">
              <i class="icon icon__comment fa-regular fa-comment-dots"></i>
              <span class="tweet__comment-amount">${params[i].comments.size}</span>
            </div>
          </div>
          <div class="tweet__icons-container">
            <i class="icon icon__edit fa-regular fa-pen-to-square"></i>
            <i class="icon icon__trash fa-solid fa-trash-can"></i>
          </div>
        </div>
        <p class="tweet__text">${params[i].text}</p>
      </a>
    </li>`;
    }
    if (params.length > 10) {
      result += '<button class="button button_primary twitter__button">Load more</button>';
    }
    result += '</ul>';
    element.innerHTML = result;
  }
}

class FilterView {
  constructor(containerId) {
    this.containerId = containerId;
  }

  display(params = null) {
    const element = document.querySelector(`#${this.containerId}`);

    Array.from(element.elements).forEach((el) => {
      switch (el.id) {
        case 'author':
          el.value = params.author;
          break;
        case 'text':
          el.value = params.text;
          break;
        case 'date_from':
          el.value = `${new Date(params.dateFrom).getFullYear()}-0${
            new Date(params.dateFrom).getMonth() + 1
          }-0${new Date(params.dateFrom).getDate()}`;
          break;
        case 'date_to':
          el.value = `${new Date(params.dateTo).getFullYear()}-0${
            new Date(params.dateTo).getMonth() + 1
          }-${new Date(params.dateTo).getDate()}`;
          break;
        case 'hashtag':
          const hashtagsContainer = document.querySelector('.form__hashtag');
          hashtagsContainer.innerHTML = '<span class="hashtag__title">You add:</span>';
          params.hashtags.forEach((hashtag) => {
            const hashtagElem = document.createElement('div');
            hashtagElem.classList.add('hashtag__container');
            hashtagElem.innerHTML = `
            <span class="hashtag__name">${hashtag}</span>
            <i class="icon icon_gray fa-solid fa-trash-can"></i>
            <span class="hashtag__separate">;</span>`;
            hashtagsContainer.append(hashtagElem);
          });
          break;
        default:
          break;
      }
    });
  }
}

class TweetView {
  constructor(containerId) {
    this.containerId = containerId;
  }

  display(params = null) {
    const { text, createdAt, author, comments } = params;
    const commentsArray = Array.from(comments.values());
    const element = document.querySelector(`#${this.containerId}`);
    let result = `<section class="section main__container">
                    <a class="link link_icon" href="./index.html">
                        <i class="icon icon_back fa-solid fa-circle-arrow-left fa-2x"></i>
                    </a>`;

    const tweetElem = `
    <div class="tweet">
      <div class="tweet__header">
        <div class="tweet__container">
          <span class="tweet__username">${author}</span>
          <div class="tweet__date-container">
            <time class="tweet__date" datetime="2022-03-01">${createdAt}</time>
            <time class="tweet__time" datetime="2022-03-01T00:00:00">${createdAt}</time>
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
      <p class="tweet__text">${text}</p>
    </div>`;

    result += tweetElem;

    let commentsElem = `
    <h3 class="main__container-title">Comments</h3>
    ${
      commentsArray.length
        ? '<div class="comments"><ul class="comments__list">'
        : '<p class="no-comments">No comments yet</p>'
    }`;

    commentsArray.forEach((comment) => {
      commentsElem += `<li class="comment">
        <div class="comment__header">
          <div class="comment__container">
            <span class="comment__username">${comment.author}</span>
            <div class="comment__date-container">
              <time class="tweet__date" datetime="2022-03-01">${comment.createdAt}</time>
              <time class="tweet__time" datetime="2022-03-01T00:00:00">${comment.createdAt}</time>
            </div>
          </div>
        </div>
        <p class="comment__text">${comment.text}</p>
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

const myTweet = new TweetCollection(tweets);
const headerView = new HeaderView('header');
const tweetFeedView = new TweetFeedView('tweets');
const filterView = new FilterView('filterForm');
const tweetView = new TweetView('main');

function setCurrentUser(user) {
  if (TweetCollection.setUser(user)) {
    TweetCollection.user = user;
    headerView.display(user);
    return true;
  }
  return false;
}

function addTweet(text) {
  const isValid = myTweet.add(text);
  if (isValid) {
    tweetFeedView.display(myTweet.getPage());
    return true;
  }
  return false;
}

function editTweet(id, text) {
  const isValid = myTweet.edit(id, text);
  if (isValid) {
    tweetFeedView.display(myTweet.getPage());
    return true;
  }
  return false;
}

function removeTweet(id) {
  const isValid = myTweet.remove(id);
  if (isValid) {
    tweetFeedView.display(myTweet.getPage());
    return true;
  }
  return false;
}

function getFeed(
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
  filterView.display(filterConfig);
}

function showTweet(id) {
  const isSearched = myTweet.get(id);
  if (isSearched) {
    tweetView.display(isSearched);
    return true;
  }
  return false;
}

function addAuthors() {
  const arrTweet = Array.from(myTweet.tweets.values());
  const arrAuthors = new Set(arrTweet.map((tweet) => tweet.author));
  const formInputDatalist = document.querySelector('.form__input-datalist');
  let res = '';
  arrAuthors.forEach((author) => {
    res += `<option class="form__input-option" value="${author}">${author}</option>`;
  });
  formInputDatalist.innerHTML = res;
}
addAuthors();

console.log(myTweet);

