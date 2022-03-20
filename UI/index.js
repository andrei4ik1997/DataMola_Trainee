const tweets = [
  {
    id: 1,
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
    isEdited: false,
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
    isEdited: false,
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
    isEdited: false,
  },
  {
    id: '4',
    text: '#jsLorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae.',
    createdAt: new Date('2022-03-01T23:00:00'),
    author: 'Username2',
    comments: [],
    isEdited: false,
  },
  {
    id: '5',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. #js Adipisci, hic. Iure #datamola tempora, veniam dolor suscipit non. #js',
    createdAt: new Date('2022-03-09T23:00:00'),
    author: 'Username2',
    comments: [],
    isEdited: false,
  },
  {
    id: '6',
    text: 'Lorem ipsum dolor sit amet consectetur #datamola adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae. ',
    createdAt: new Date('2022-03-07T23:00:00'),
    author: 'Username2',
    comments: [],
    isEdited: false,
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
    isEdited: false,
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
    isEdited: false,
  },
  {
    id: '9',
    text: 'Lorem ipsum dolor sit #datamola amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae. ',
    createdAt: new Date('2022-03-14T23:00:00'),
    author: 'Username2',
    comments: [],
    isEdited: false,
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
    isEdited: false,
  },
  {
    id: '11',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae. ',
    createdAt: new Date('2022-01-11T23:00:00'),
    author: 'Username4',
    comments: [],
    isEdited: false,
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
    isEdited: false,
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
    isEdited: false,
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
    isEdited: false,
  },
  {
    id: '15',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae. ',
    createdAt: new Date('2022-02-24T23:00:00'),
    author: 'Username3',
    comments: [],
    isEdited: false,
  },
  {
    id: '16',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae.',
    createdAt: new Date('2022-03-01T23:00:00'),
    author: 'Username2',
    comments: [],
    isEdited: false,
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
    isEdited: false,
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
    isEdited: false,
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
    isEdited: false,
  },
  {
    id: '20',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae. ',
    createdAt: new Date('2022-02-01T23:00:00'),
    author: 'Username4',
    comments: [],
    isEdited: false,
  },
  {
    id: '21',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae. ',
    createdAt: new Date('2022-02-24T23:00:00'),
    author: 'Username3',
    comments: [],
    isEdited: false,
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
    isEdited: false,
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
    isEdited: false,
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
    isEdited: false,
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
    isEdited: false,
  },
];

class Tweet {
  constructor(
    id = '',
    text = '',
    createdAt = new Date(),
    author = '',
    comments = new Map(),
    isEdited = false,
  ) {
    this._id = id;
    this.text = text;
    this._createdAt = createdAt;
    this._author = author;
    this.isEdited = isEdited;
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
    if (typeof value !== 'string') {
      throw new Error(`Invalid type, you insert ${typeof value}, but I wait string`);
    }

    this._id = value;
  }

  get createdAt() {
    return this._createdAt;
  }

  set createdAt(value) {
    if (typeof value !== 'string') {
      throw new Error(`Invalid type, you insert ${typeof value}, but I wait string`);
    }

    this._createdAt = value;
  }

  get author() {
    return this._author;
  }

  set author(value) {
    if (typeof value !== 'string') {
      throw new Error(`Invalid type, you insert ${typeof value}, but I wait string`);
    }

    this._author = value;
  }

  addComment(id, text) {
    const generateId = String(new Date().getTime());
    const comment = new Comment(
      generateId,
      text,
      new Date(new Date().getTime()),
      TweetCollection.user,
    );

    if (Comment.validate(comment)) {
      this.comments.set(generateId, comment);
      return true;
    }
    return false;
  }

  static validate(tweet) {
    const etalonTweet = new Tweet();
    let isValid = true;
    try {
      Object.keys(etalonTweet).forEach((key) => {
        if (Object.prototype.hasOwnProperty.call(tweet, key)) {
          if (
            Object.prototype.toString.call(etalonTweet[key]) !==
            Object.prototype.toString.call(tweet[key])
          ) {
            isValid = false;
            throw new Error(
              `You need change ${key} type in tweet with id ${
                tweet._id
              } to ${Object.prototype.toString.call(etalonTweet[key])}`,
            );
          }
        } else {
          isValid = false;
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
          isValid = false;
          throw new Error(`You need fill ${key}`);
        }
        if (key === 'text' && tweet[key].length >= 280) {
          isValid = false;
          throw new Error(
            `Max value for ${key} is 280 characters, but at now ${tweet[key].length} characters`,
          );
        }
        if (key === 'id' && !tweet.isEdited) {
          const tweetsIds = tweets.map((elem) => elem.id);
          if (tweetsIds.includes(tweet[key])) {
            isValid = false;
            throw new Error(`${key} ${tweet[key]} is occupate`);
          }
        }
      });
      return isValid;
    } catch (error) {
      console.log(error.message);
      return isValid;
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
    if (typeof value !== 'string') {
      throw new Error(`Invalid type, you insert ${typeof value}, but I wait string`);
    }

    this._id = value;
  }

  get createdAt() {
    return this._createdAt;
  }

  set createdAt(value) {
    if (typeof value !== 'string') {
      throw new Error(`Invalid type, you insert ${typeof value}, but I wait string`);
    }

    this._createdAt = value;
  }

  get author() {
    return this._author;
  }

  set author(value) {
    if (typeof value !== 'string') {
      throw new Error(`Invalid type, you insert ${typeof value}, but I wait string`);
    }

    this._author = value;
  }

  static validate(comment) {
    const etalonComment = new Comment();

    let isValid = true;
    try {
      Object.keys(etalonComment).forEach((key) => {
        if (Object.prototype.hasOwnProperty.call(comment, key)) {
          if (
            Object.prototype.toString.call(etalonComment[key]) !==
            Object.prototype.toString.call(comment[key])
          ) {
            isValid = false;
            throw new Error(
              `You need change ${key} type to ${Object.prototype.toString.call(
                etalonComment[key],
              )}`,
            );
          }
        } else {
          isValid = false;
          throw new Error(`Don't have ${key} property in you object`);
        }
      });

      Object.keys(comment).forEach((key) => {
        if (
          !comment[key].length &&
          !(comment[key] instanceof Date || typeof comment[key] === 'boolean')
        ) {
          isValid = false;
          throw new Error(`You need fill ${key}`);
        }
        if (key === 'text' && comment[key].length >= 280) {
          isValid = false;
          throw new Error(
            `Max value for ${key} is 280 characters, but at now ${comment[key].length} characters`,
          );
        }
        if (key === 'id') {
          const commentsArray = tweets.map((tweet) => tweet.comments).flat();
          const commentsIds = commentsArray.map((item) => item.id);
          if (commentsIds.includes(comment[key])) {
            isValid = false;
            throw new Error(`${key} ${comment[key]} is occupate`);
          }
        }
      });

      return isValid;
    } catch (error) {
      console.log(error.message);
      return isValid;
    }
  }
}

class TweetCollection {
  static _user = 'Username2';

  constructor(arrTweet) {
    this.tweets = new Map();
    arrTweet.forEach((tweet) => {
      const { id, text, createdAt, author, comments } = tweet;
      this.tweets.set(id, new Tweet(id, text, createdAt, author, comments));
    });
  }

  addAll(arrTweet) {
    this.clear();
    const notValidatedTweets = [];
    arrTweet.forEach((elem) => {
      const { id, text, createdAt, author, comments } = elem;
      const tweet = new Tweet(id, text, createdAt, author, comments);
      if (!Tweet.validate(tweet)) {
        notValidatedTweets.push(elem);
      } else {
        this.tweets.set(id, tweet);
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
          return createdAt > new Date(dateFrom).getTime() && createdAt < new Date(dateTo).getTime();
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
    if (skip >= filteredTweets().length) {
      throw new Error(
        `You want skip ${skip} but array has ${
          filteredTweets().length
        } length. Please, insert skip value less ${filteredTweets().length} `,
      );
    } else {
      return filteredTweets().splice(skip, top);
    }
  }

  get(id) {
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
  }

  add(text) {
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
      [],
    );

    if (Tweet.validate(tweet)) {
      this.tweets.set(tweet.id, tweet);
      return true;
    }

    return false;
  }

  edit(id, text) {
    const tweet = this.get(id);
    if (tweet.author === TweetCollection.user) {
      const newTweet = new Tweet(
        tweet.id,
        text,
        tweet.createdAt,
        tweet.author,
        tweet.comments,
        true,
      );
      if (Tweet.validate(newTweet)) {
        this.tweets.set(id, newTweet);
        return true;
      }
      return false;
    }
    throw new Error('You is not author this tweet');
  }

  remove(id) {
    if (arguments.length < 1) {
      throw new Error('You not insert 1 required parameter');
    } else if (arguments.length > 1) {
      throw new Error('Only 1 parametr');
    } else if (typeof id !== 'string') {
      throw new Error(`Invalid type, you insert ${typeof id}, but I wait string`);
    }

    if (this.get(id).author === TweetCollection.user) {
      this.tweets.delete(id);
      return true;
    }
    throw new Error('You is not author this tweet');
  }

  static get user() {
    return this._user;
  }

  static set user(name) {
    if (arguments.length < 1) {
      throw new Error('You not insert 1 required parameter');
    } else if (arguments.length > 1) {
      throw new Error('Only 1 parametr');
    } else if (typeof name !== 'string') {
      throw new Error(`Invalid type, you insert ${typeof name}, but I wait string`);
    }

    this._user = name;
  }
}

const myTweet = new TweetCollection(tweets);

console.log(myTweet);
