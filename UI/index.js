"use strict";
let tweets = [
  {
    id: "1",
    text: "Hi! #datamola #js",
    createdAt: new Date("2022-03-07T23:00:00"),
    author: "Admin",
    comments: [
      {
        id: "1",
        text: "Hi",
        createdAt: new Date("2022-03-09T23:00:00"),
        author: "Username1",
      },
      {
        id: "2",
        text: "Hi",
        createdAt: new Date("2022-03-09T23:00:00"),
        author: "Username2",
      },
      {
        id: "3",
        text: "Hi",
        createdAt: new Date("2022-03-09T23:00:00"),
        author: "Username3",
      },
      {
        id: "4",
        text: "Hi",
        createdAt: new Date("2022-03-09T23:00:00"),
        author: "Username4",
      },
      {
        id: "5",
        text: "Hi",
        createdAt: new Date("2022-03-09T23:00:00"),
        author: "Username5",
      },
    ],
  },
  {
    id: "2",
    text: "How are you? #js",
    createdAt: new Date("2022-03-02T23:00:00"),
    author: "Username2",
    comments: [
      {
        id: "1",
        text: "Good",
        createdAt: new Date("2022-03-09T23:00:00"),
        author: "Username23",
      },
    ],
  },
  {
    id: "3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae. Saepe, veritatis obcaecati. #datamola #js",
    createdAt: new Date("2022-03-03T23:00:00"),
    author: "Username2",
    comments: [
      {
        id: "1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae.",
        createdAt: new Date("2022-03-04T23:00:00"),
        author: "User23",
      },
    ],
  },
  {
    id: "4",
    text: "#jsLorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae. Saepe, veritatis obcaecati.",
    createdAt: new Date("2022-03-01T23:00:00"),
    author: "Username2",
    comments: [],
  },
  {
    id: "5",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae. Saepe, veritatis obcaecati. #js",
    createdAt: new Date("2022-03-09T23:00:00"),
    author: "Username2",
    comments: [],
  },
  {
    id: "6",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae. Saepe, veritatis obcaecati.",
    createdAt: new Date("2022-03-07T23:00:00"),
    author: "Username2",
    comments: [],
  },
  {
    id: "7",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae.",
    createdAt: new Date("2022-03-09T23:00:00"),
    author: "Username2",
    comments: [
      {
        id: "1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae.",
        createdAt: new Date("2022-03-09T23:00:00"),
        author: "Username12",
      },
    ],
  },
  {
    id: "8",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae. Saepe, veritatis obcaecati.",
    createdAt: new Date("2022-03-09T23:00:00"),
    author: "Username2",
    comments: [
      {
        id: "1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae.",
        createdAt: new Date("2022-03-09T23:00:00"),
        author: "Username2",
      },
      {
        id: "2",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae.",
        createdAt: new Date("2022-03-09T23:00:00"),
        author: "Username34",
      },
      {
        id: "3",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae.",
        createdAt: new Date("2022-03-09T23:00:00"),
        author: "Username21",
      },
    ],
  },
  {
    id: "9",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae. Saepe, veritatis obcaecati.",
    createdAt: new Date("2022-03-14T23:00:00"),
    author: "Username2",
    comments: [],
  },
  {
    id: "10",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae. Saepe, veritatis obcaecati.",
    createdAt: new Date("2022-03-09T23:00:00"),
    author: "Username2",
    comments: [
      {
        id: "1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae.",
        createdAt: new Date("2022-03-09T23:00:00"),
        author: "Username78",
        comments: [],
      },
    ],
  },
  {
    id: "11",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae. Saepe, veritatis obcaecati.",
    createdAt: new Date("2022-03-09T23:00:00"),
    author: "Username2",
    comments: [],
  },
  {
    id: "12",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae. Saepe, veritatis obcaecati.",
    createdAt: new Date("2022-03-09T23:00:00"),
    author: "Username35",
    comments: [
      {
        id: "1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae.",
        createdAt: new Date("2022-03-09T23:00:00"),
        author: "Username2",
      },
    ],
  },
  {
    id: "13",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae. Saepe, veritatis obcaecati.",
    createdAt: new Date("2022-03-09T23:00:00"),
    author: "Username69",
    comments: [
      {
        id: "1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae.",
        createdAt: new Date("2022-03-09T23:00:00"),
        author: "Username65",
      },
    ],
  },
  {
    id: "14",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae. Saepe, veritatis obcaecati.",
    createdAt: new Date("2022-03-09T23:00:00"),
    author: "Username13",
    comments: [
      {
        id: "1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae.",
        createdAt: new Date("2022-03-09T23:00:00"),
        author: "Username32",
      },
    ],
  },
  {
    id: "15",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae. Saepe, veritatis obcaecati.",
    createdAt: new Date("2022-03-09T23:00:00"),
    author: "Username43",
    comments: [],
  },
  {
    id: "16",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae.",
    createdAt: new Date("2022-03-09T23:00:00"),
    author: "Username22",
    comments: [],
  },
  {
    id: "17",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae. Saepe, veritatis obcaecati.",
    createdAt: new Date("2022-03-09T23:00:00"),
    author: "Username43",
    comments: [
      {
        id: "1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae.",
        createdAt: new Date("2022-03-09T23:00:00"),
        author: "Username13",
      },
      {
        id: "2",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae.",
        createdAt: new Date("2022-03-09T23:00:00"),
        author: "Username69",
      },
    ],
  },
  {
    id: "18",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae. Saepe, veritatis obcaecati.",
    createdAt: new Date("2022-03-09T23:00:00"),
    author: "Username47",
    comments: [
      {
        id: "1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae.",
        createdAt: new Date("2022-03-09T23:00:00"),
        author: "Username89",
      },
    ],
  },
  {
    id: "19",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae. Saepe, veritatis obcaecati.",
    createdAt: new Date("2022-03-09T23:00:00"),
    author: "Username44",
    comments: [
      {
        id: "1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae.",
        createdAt: new Date("2022-03-09T23:00:00"),
        author: "Username5",
      },
    ],
  },
  {
    id: "20",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae. Saepe, veritatis obcaecati.",
    createdAt: new Date("2022-03-09T23:00:00"),
    author: "Username24",
    comments: [],
  },
  {
    id: "21",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae. Saepe, veritatis obcaecati.",
    createdAt: new Date("2022-03-09T23:00:00"),
    author: "Username55",
    comments: [],
  },
  {
    id: "22",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae. Saepe, veritatis obcaecati.",
    createdAt: new Date("2022-03-09T23:00:00"),
    author: "Username27",
    comments: [
      {
        id: "1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae.",
        createdAt: new Date("2022-03-09T23:00:00"),
        author: "Username89",
      },
    ],
  },
  {
    id: "23",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae. Saepe, veritatis obcaecati.",
    createdAt: new Date("2022-03-09T23:00:00"),
    author: "Username13",
    comments: [
      {
        id: "1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae.",
        createdAt: new Date("2022-03-09T23:00:00"),
        author: "Username53",
      },
    ],
  },
  {
    id: "24",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae. Saepe, veritatis obcaecati.",
    createdAt: new Date("2022-03-09T23:00:00"),
    author: "Username54",
    comments: [
      {
        id: "1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae.",
        createdAt: new Date("2022-03-09T23:00:00"),
        author: "Username65",
      },
    ],
  },
  {
    id: "25",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae. Saepe, veritatis obcaecati.",
    createdAt: new Date("2022-03-09T23:00:00"),
    author: "Username25",
    comments: [
      {
        id: "1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic. Iure tempora, veniam dolor suscipit non molestiae.",
        createdAt: new Date("2022-03-09T23:00:00"),
        author: "Username12",
      },
    ],
  },
];

const myTweeter = (function () {
  let user = "Admin";

  function getTweets(
    skip = 0,
    top = 10,
    filterConfig = {
      author: "",
      dateFrom: new Date(0),
      dateTo: new Date(),
      hashtags: [],
    }
  ) {
    const filteredTweets = function () {
      const { author = "", dateFrom = new Date(0), dateTo = new Date(), hashtags = [] } = filterConfig;
      return [...tweets]
        .filter((tweet) => {
          if (author.trim().length) {
            return tweet.author.toLowerCase() === author.toLowerCase();
          } else {
            return tweet;
          }
        })
        .filter((tweet) => {
          const createdAt = new Date(tweet.createdAt).getTime();
          return createdAt > dateFrom.getTime() && createdAt < dateTo.getTime();
        })
        .filter((tweet) => {
          if (hashtags.length) {
            const hasHashtag = hashtags.every((hashtag) => {
              return tweet.text.split(" ").includes(hashtag);
            });
            if (hasHashtag) return tweet;
          } else {
            return tweet;
          }
        });
    };

    return filteredTweets()
      .sort((a, b) => {
        return b.createdAt - a.createdAt;
      })
      .splice(skip, top);
  }

  function getTweet(id) {
    if (arguments.length < 1) {
      throw new Error("You not insert 1 required parameter");
    } else if (arguments.length > 1) {
      throw new Error("Only 1 parametr");
    } else if (typeof id !== "string") {
      throw new Error(`Invalid type, you insert ${typeof id}, but I wait string`);
    }

    const searchedTweet = tweets.filter((tweet) => tweet.id === id);
    if (searchedTweet.length) {
      return searchedTweet[0];
    } else {
      throw new Error(`Tweet with id ${id} not found`);
    }
  }

  function validateTweet(tweet) {
    const etalonTweet = {
      id: "",
      text: "",
      createdAt: new Date(),
      author: "",
      comments: [],
    };

    let isValid = true;

    for (let key in etalonTweet) {
      if (tweet.hasOwnProperty(key)) {
        if (Object.prototype.toString.call(etalonTweet[key]) !== Object.prototype.toString.call(tweet[key])) {
          isValid = false;
          throw new Error(`You need change ${key} type to ${Object.prototype.toString.call(etalonTweet[key])}`);
        }
      } else {
        isValid = false;
        throw new Error(`Don't have ${key} property in you object`);
      }
    }

    for (let key in tweet) {
      if (tweet[key] instanceof Date || tweet[key] instanceof Array) {
        continue;
      }
      if (!tweet[key].trim().length) {
        isValid = false;
        throw new Error(`You need fill ${key}`);
      }
      if (key === "text" && tweet[key].length >= 280) {
        isValid = false;
        throw new Error(`Max value for ${key} is 280 characters, but at now ${tweet[key].length} characters`);
      }
      if (key === "id") {
        const tweetsIds = tweets.map((tweet) => tweet.id);
        if (tweetsIds.includes(tweet[key])) {
          isValid = false;
          throw new Error(`${key} ${tweet[key]} is occupate`);
        }
      }
    }

    return isValid;
  }

  function addTweet(text) {
    if (arguments.length < 1) {
      throw new Error("You not insert 1 required parameter");
    } else if (arguments.length > 1) {
      throw new Error("Only 1 parametr");
    } else if (typeof text !== "string") {
      throw new Error(`Invalid type, you insert ${typeof text}, but I wait string`);
    }

    const generateId = String(new Date().getTime());
    const tweet = {
      id: generateId,
      text: text,
      createdAt: new Date(new Date().getTime()),
      author: user,
      comments: [],
    };

    if (validateTweet(tweet)) {
      tweets = [tweet, ...tweets];
      return true;
    } else {
      return false;
    }
  }

  function editTweet(id, text) {
    const tweet = getTweet(id);
    if (tweet.author === user) {
      const newTweet = {
        ...tweet,
        text,
      };
      if (validateTweet(newTweet)) {
        const index = tweets.findIndex((tweet) => tweet.id === id);
        tweets = [...tweets.slice(0, index), newTweet, ...tweets.slice(index + 1)];
        return true;
      } else {
        return false;
      }
    } else {
      throw new Error(`You is not author this tweet`);
    }
  }

  function removeTweet(id) {
    if (arguments.length < 1) {
      throw new Error("You not insert 1 required parameter");
    } else if (arguments.length > 1) {
      throw new Error("Only 1 parametr");
    } else if (typeof id !== "string") {
      throw new Error(`Invalid type, you insert ${typeof id}, but I wait string`);
    }

    if (getTweet(id).author === user) {
      tweets = tweets.filter((tweet) => tweet.id !== id);
      return true;
    } else {
      throw new Error(`You is not author this tweet`);
    }
  }

  function validateComment(comment) {
    const etalonComment = {
      id: "",
      text: "",
      createdAt: new Date(),
      author: "",
    };

    let isValid = true;

    for (let key in etalonComment) {
      if (comment.hasOwnProperty(key)) {
        if (Object.prototype.toString.call(etalonComment[key]) !== Object.prototype.toString.call(comment[key])) {
          isValid = false;
          throw new Error(`You need change ${key} type to ${Object.prototype.toString.call(etalonComment[key])}`);
        }
      } else {
        isValid = false;
        throw new Error(`Don't have ${key} property in you object`);
      }
    }

    for (let key in comment) {
      if (comment[key] instanceof Date) {
        continue;
      }
      if (!comment[key].trim().length) {
        isValid = false;
        throw new Error(`You need fill ${key}`);
      }
      if (key === "text" && comment[key].length >= 280) {
        isValid = false;
        throw new Error(`Max value for ${key} is 280 characters, but at now ${comment[key].length} characters`);
      }
      if (key === "id") {
        const commentsArray = tweets.map((tweet) => tweet.comments).flat();
        const commentsIds = commentsArray.map((comment) => comment.id);
        if (commentsIds.includes(comment[key])) {
          isValid = false;
          throw new Error(`${key} ${comment[key]} is occupate`);
        }
      }
    }

    return isValid;
  }

  function addComment(id, text) {
    const tweet = getTweet(id);
    const generateId = String(new Date().getTime());
    const comment = {
      id: generateId,
      text,
      createdAt: new Date(new Date().getTime()),
      author: user,
    };

    if (validateComment(comment)) {
      const index = tweets.findIndex((tweet) => tweet.id === id);
      const newTweet = {
        ...tweet,
        comments: [comment, ...tweet.comments],
      };
      tweets = [...tweets.slice(0, index), newTweet, ...tweets.slice(index + 1)];
      return true;
    } else {
      return false;
    }
  }

  function getUser() {
    return user;
  }

  function changeUser(newName) {
    if (arguments.length < 1) {
      throw new Error("You not insert 1 required parameter");
    } else if (arguments.length > 1) {
      throw new Error("Only 1 parametr");
    } else if (typeof newName !== "string") {
      throw new Error(`Invalid type, you insert ${typeof newName}, but I wait string`);
    }

    user = newName;
  }
  return {
    getTweets,
    getTweet,
    validateTweet,
    addTweet,
    editTweet,
    removeTweet,
    validateComment,
    addComment,
    getUser,
    changeUser,
  };
})();
