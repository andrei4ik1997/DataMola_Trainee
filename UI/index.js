/* eslint-disable no-shadow */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-use-before-define */
/* eslint-disable no-console */

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
  static maxTweetLength = 280;

  constructor(id = '', text = '', createdAt = new Date(), author = '', comments = []) {
    this._id = id;
    this.text = text;
    this._createdAt = createdAt;
    this._author = author;
    this.comments = comments.map((comment) => new Comment(comment.id, comment.text, comment.createdAt, comment.author));
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
        if (!tweet[key].length && !(tweet[key] instanceof Date || tweet[key] instanceof Array || typeof tweet[key] === 'boolean')) {
          throw new Error(`You need fill ${key}`);
        }
        if (key === 'text' && tweet[key].length > Tweet.maxTweetLength + 1) {
          throw new Error(`Max value for ${key} is ${Tweet.maxTweetLength} characters, but at now ${tweet[key].length} characters`);
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
  static maxCommentLength = 280;

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
            if (key !== '_createdAt') {
              throw new Error(`You need change ${key} type in comment with id ${comment._id} to ${Object.prototype.toString.call(etalonComment[key])}`);
            }
          }
        } else {
          throw new Error(`Don't have ${key} property in you object`);
        }
      });

      Object.keys(comment).forEach((key) => {
        if (!comment[key].length && !(comment[key] instanceof Date || typeof comment[key] === 'boolean')) {
          throw new Error(`You need fill ${key}`);
        }
        if (key === 'text' && comment[key].length >= Comment.maxCommentLength) {
          throw new Error(`Max value for ${key} is ${Comment.maxCommentLength} characters, but at now ${comment[key].length} characters`);
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

  constructor() {
    this.tweets = [];
    this.arr = [];
    this.arr.forEach((item) => {
      const tweet = new Tweet(item.id, item.text, item.createdAt, item.author, item.comments);
      try {
        if (Tweet.validate(tweet)) {
          const idsArr = this.tweets.map((tweet) => tweet.id);
          if (idsArr.includes(tweet.id)) {
            throw new Error(`Id ${tweet.id} occupate, tweet not added`);
          }
          this.tweets.push(tweet);
        }
      } catch (error) {
        console.log(error.message);
      }
    });
  }

  save() {
    localStorage.setItem('tweets', JSON.stringify(this.tweets));
  }

  restore() {
    const restoreTweets = JSON.parse(localStorage.getItem('tweets'));
    return restoreTweets.map((item) => ({
      id: item._id || item.id,
      text: item.text,
      createdAt: item._createdAt || item.createdAt,
      author: item._author || item.author,
      comments: item.comments.map((comment) => ({
        id: comment._id || comment.id,
        text: comment.text,
        createdAt: comment._createdAt || comment.createdAt,
        author: comment._author || comment.author,
      })),
    }));
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
          const idsArr = this.tweets.map((tweet) => tweet.id);
          if (idsArr.includes(id)) {
            notValidatedTweets.push(elem);
            throw new Error(`Id ${id} occupate`);
          }
          this.tweets.push(tweet);
          this.save();
        }
      } catch (error) {
        console.log(error.message);
      }
    });
    return notValidatedTweets;
  }

  clear() {
    this.tweets.length = 0;
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

      return this.tweets
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
      const searchedTweet = this.tweets.find((tweet) => tweet.id === id);

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
        const idsArr = this.tweets.map((tweet) => tweet.id);
        if (idsArr.includes(tweet.id)) {
          throw new Error(`Id ${tweet.id} occupate, tweet not added`);
        }
        this.tweets.push(tweet);
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
          const index = this.tweets.findIndex((item) => item.id === id);
          this.tweets[index] = editedTweet;
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
          this.tweets = this.tweets.filter((tweet) => tweet.id !== id);
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
          const idsArr = searchedTweet.comments.map((comment) => comment.id);
          if (idsArr.includes(comment.id)) {
            throw new Error(`Id ${comment.id} occupate, comment not added`);
          }
          searchedTweet.comments.push(comment);
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

class HeaderView {
  constructor(containerId) {
    this.containerId = containerId;
  }

  display(user = localStorage.getItem('currUser')) {
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
        controller.setCurrentUser();
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
    element.innerHTML = this.filterBlock(filter);
    const addHashtag = document.querySelector('#addHashtag');
    const filterForm = document.querySelector('#filterForm');

    controller.setAutors();

    addHashtag.addEventListener('click', controller.addHashtag.bind(controller));
    filterForm.addEventListener('submit', controller.filterSubmit.bind(controller));
    filterForm.addEventListener('reset', controller.filterSubmit.bind(controller));
  }

  filterBlock(filter) {
    const { author, text, dateFrom, dateTo } = filter;
    return `<aside id="filter" class="section filter">
              <form id="filterForm" class="form filter__form">
                <h3 class="form__title">Filter by:</h3>
                <div class="form__input-container">
                  <label class="form__input-label" for="name">Name</label>
                  <input class="form__input" id="author" ${author ? `value=${author}` : ''} name="author"   type="text" list="names" placeholder="Name" />
                  <datalist class="form__input-datalist" id="names"> </datalist>
                </div>
                <div class="form__input-container">
                  <label class="form__input-label" for="text">Text</label>
                  <input class="form__input" id="text" ${text ? `value=${text}` : ''} type="text" name="text"  placeholder="Text" />
                </div>
                <div class="form__input-container">
                  <label class="form__input-label" for="date_from">Date</label>
                  <input class="form__input" id="date_from" value=${Utils.getDate(dateFrom)} type="date" name="date_from" placeholder="from" />
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
      const result = this.error();
      element.innerHTML = result;
      return;
    }

    const { id, text, createdAt, author, comments } = tweet;
    const user = localStorage.getItem('currUser');

    let result = `<section class="section main__container" data-id=${id}>
                      <a class="link link_icon">
                          <i class="icon icon_back fa-solid fa-circle-arrow-left fa-2x" data-action="backToMain"></i>
                      </a>`;

    result += this.tweet(author, createdAt, comments, text);

    const commentsBlock = `<h3 class="main__container-title">Comments</h3>
                          ${comments.length ? this.comments(comments) : '<p class="no-comments">No comments yet</p>'}`;

    result += commentsBlock;

    if (user) {
      result += this.formAdd();
    }

    result += '</section>';

    element.innerHTML = result;

    const backToMain = document.querySelector('[data-action="backToMain"]');
    const commentAdd = document.querySelector('.comment__form-add');

    if (commentAdd) {
      commentAdd.addEventListener('submit', controller.addComment.bind(controller));
      const charactersLeft = commentAdd.querySelector('.form-add__сharacters-left');
      commentAdd.addEventListener('input', (e) => {
        charactersLeft.innerText = Tweet.maxTweetLength - e.target.value.length;
      });
    }
    backToMain.addEventListener('click', controller.backToMain.bind(controller));
  }

  error() {
    return `<section class="section error">
    <div class="error-container">
      <i class="icon icon_error fa-solid fa-triangle-exclamation fa-4x"></i>
      <span class="error__text">Page not found</span>
    </div>
    <a class="link" href="./index.html">
    <button class="button button_primary" type="button">Back to main</button>
  </a>
  </section>
  `;
  }

  tweet(author, createdAt, comments, text) {
    return `<div class="tweet">
              <div class="tweet__header">
                <div class="tweet__container">
                  <span class="tweet__username">${author}</span>
                  <div class="tweet__date-container">
                    <time class="tweet__date" datetime=${Utils.getDate(createdAt)}>${Utils.getDate(createdAt)}</time>
                    <time class="tweet__time" datetime=${Utils.getDate(createdAt)}T${Utils.getTime(createdAt)}>${Utils.getTime(createdAt)}</time>
                  </div>
                  <div class="tweet__comment">
                    <i class="icon icon__comment fa-regular fa-comment-dots"></i>
                   <span class="tweet__comment-amount">${comments.length}</span>
                  </div>
                </div>
              </div>
            <p class="tweet__text">${Utils.seachHashtag(text)}</p>
            </div>`;
  }

  comments(comments) {
    let result = '';
    const sortedComments = comments.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    sortedComments.forEach((comment) => {
      result += `<li class="comment">
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
    return `<div class="comments"><ul class="comments__list">${result}</ul></div>`;
  }

  formAdd() {
    const user = localStorage.getItem('currUser');
    return `<form class="form-add comment__form-add ">
    <div class="form-add__header">
      <div class="form-add__header-logo">${user[0].toUpperCase()}</div>
      <textarea
        class="form-add__placeholder"
        name="text"
        maxlength=${Comment.maxCommentLength}
        placeholder="Some text..."
      ></textarea>
    </div>
    <div class="form-add__footer">
      <p class="form-add__text">
        <span class="form-add__сharacters-left">${Comment.maxCommentLength}</span>
        сharacters left
      </p>
      <button class="button button_primary form-add__button" type="submit">Comment</button>
    </div>
  </form>`;
  }
}

class TwitterView {
  constructor(containerId) {
    this.containerId = containerId;
  }

  display(tweetsArr) {
    const user = localStorage.getItem('currUser');
    const element = document.querySelector(`#${this.containerId}`);
    element.classList.remove('main_colomn');
    const sectionTwitter = document.createElement('section');
    sectionTwitter.id = 'twitter';
    sectionTwitter.classList.add('section', 'twitter', 'main__twitter');
    element.append(sectionTwitter);
    let result = '';

    if (user) {
      result += this.formAdd();
    }

    if (tweetsArr.length) {
      result += `<div id='tweets' class='tweets'><ul id="tweets__list" class='tweets__list'>${this.tweetsBlock(tweetsArr)}</ul>${
        tweetsArr.length % 10 === 0 ? '<button class="button button_primary twitter__button" data-action="loadMore" data-top="10">Load more</button>' : ''
      }</div>`;

      sectionTwitter.innerHTML = result;

      document.querySelector('.tweets__list').addEventListener('click', controller.tweetActions.bind(controller));
      if (document.querySelector('[data-action="loadMore"]')) {
        document.querySelector('[data-action="loadMore"]').addEventListener('click', controller.loadMore.bind(controller));
      }
    } else {
      sectionTwitter.innerHTML = this.notFound();
    }

    const formAdd = document.querySelector('[data-action="add"]');

    if (formAdd) {
      formAdd.addEventListener('submit', controller.addTweet.bind(controller));
      const charactersLeft = formAdd.querySelector('.form-add__сharacters-left');
      formAdd.addEventListener('input', (e) => {
        charactersLeft.innerText = Tweet.maxTweetLength - e.target.value.length;
      });
    }
  }

  notFound() {
    return `<div class="not-found">
             <i class="icon icon_error fa-solid fa-triangle-exclamation fa-4x"></i>
             <span class="not-found__text">Not found</span>
           </div>`;
  }

  formAdd() {
    const user = localStorage.getItem('currUser');
    return `<form class="form-add twitter__form-add" data-action='add'>
              <div class="form-add__header">
                <div class="form-add__header-logo">${user[0].toUpperCase()}</div>
                <textarea class="form-add__placeholder" name="text" maxlength=${Tweet.maxTweetLength} placeholder="Some text..."></textarea>
             </div>
              <div class="form-add__footer">
                <p class="form-add__text">
                  <span class="form-add__сharacters-left">${Tweet.maxTweetLength}</span>
                  сharacters left
                </p>
                <button class="button button_primary form-add__button" type="submit" >Tweet</button>
             </div>
            </form>`;
  }

  tweetsBlock(tweetsArr) {
    let result = '';
    const user = localStorage.getItem('currUser');
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
            <span class="tweet__comment-amount">${tweet.comments.length}</span>
          </div>
        </div>`;
      if (tweet.author === user) {
        result += `<div class="tweet__icons-container">
          <i class="icon icon__edit fa-regular fa-pen-to-square" data-action="edit"></i>
          <i class="icon icon__trash fa-solid fa-trash-can" data-action="remove"></i>
        </div>`;
      }
      result += `</div>
        <p class="tweet__text">${Utils.seachHashtag(tweet.text)}</p>
    </li>`;
    });
    return result;
  }
}

class UpdateTweetsView {
  constructor(containerId) {
    this.containerId = containerId;
  }

  display(tweetsArr) {
    const element = document.querySelector(`#${this.containerId}`);
    element.innerHTML = this.tweetsBlock(tweetsArr);
    if (!(tweetsArr.length % 10 === 0)) {
      document.querySelector('[data-action="loadMore"]').remove();
    }
  }

  tweetsBlock(tweetsArr) {
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
            <span class="tweet__comment-amount">${tweet.comments.length}</span>
          </div>
        </div>`;
      if (tweet.author.toLowerCase() === TweetCollection.user.toLowerCase()) {
        result += `<div class="tweet__icons-container">
          <i class="icon icon__edit fa-regular fa-pen-to-square" data-action="edit"></i>
          <i class="icon icon__trash fa-solid fa-trash-can" data-action="remove"></i>
        </div>`;
      }
      result += `</div>
        <p class="tweet__text">${Utils.seachHashtag(tweet.text)}</p>
    </li>`;
    });
    return result;
  }
}

class AutorizationView {
  constructor(containerId) {
    this.containerId = containerId;
  }

  display() {
    const element = document.querySelector(`#${this.containerId}`);
    element.classList.add('main_colomn');
    element.innerHTML = this.authorizationSection();

    const burger = document.querySelector('.burger');
    burger.classList.add('hide');

    const headerAuthorization = document.querySelector('.header__authorization');
    headerAuthorization.style.display = 'none';

    const authorizationForm = document.querySelector('.authorization__form');
    const registration = authorizationForm.querySelector('[data-action="registration"]');
    const backToMain = document.querySelector('[data-action="backToMain"]');

    registration.addEventListener('click', () => controller.registrationView.display());
    backToMain.addEventListener('click', controller.backToMain.bind(controller));
    authorizationForm.addEventListener('submit', controller.authorization.bind(controller));
  }

  authorizationSection() {
    return `
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
  }
}

class RegistrationView {
  constructor(containerId) {
    this.containerId = containerId;
  }

  display() {
    const element = document.querySelector(`#${this.containerId}`);
    element.classList.add('main_colomn');
    element.innerHTML = this.registrationSection();

    const burger = document.querySelector('.burger');
    burger.classList.add('hide');

    const headerAuthorization = document.querySelector('.header__authorization');
    headerAuthorization.style.display = 'none';

    const authorizationForm = document.querySelector('.registration__form');
    const authorization = element.querySelector('[data-action="authorization"]');
    const backToMain = document.querySelector('[data-action="backToMain"]');

    authorization.addEventListener('click', () => controller.autorizationView.display());
    backToMain.addEventListener('click', controller.backToMain.bind(controller));
    authorizationForm.addEventListener('submit', controller.registration.bind(controller));
  }

  registrationSection() {
    return `<section class="section registration">
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
                    <button class="button button_secondary form__button" type="button"          data-action="authorization">Authorization</button>
                    <button class="button button_primary form__button" type="submit">Register</button>
                </div>
             </form>
            </section>
           <button class="button button_primary" type="button" data-action="backToMain">Back to main</button>`;
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

class SpinnerView {
  constructor(containerId) {
    this.containerId = containerId;
    this.spinner = document.createElement('div');
    this.spinner.classList.add('spinner-container');
    this.spinner.innerHTML = '<img src="./assets/spinner.svg" style="height: 300px;">';
  }

  display() {
    const container = document.querySelector(`#${this.containerId}`);
    const tweetsContainer = container.querySelector('.tweets__list');

    if (tweetsContainer) {
      tweetsContainer.innerHTML = '';
      tweetsContainer.append(this.spinner);
    } else {
      container.append(this.spinner);
    }
  }

  hide() {
    this.spinner.remove();
  }
}

class TweetsController {
  constructor() {
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
    this.spinner = new SpinnerView('main');
  }

  loadMore(event) {
    const { dataset } = event.target;
    dataset.top = +dataset.top + 10;
    this.requestStart();
    api.getTweets(0, dataset.top, this.getFiters()).then((tweets) => {
      this.requestFinish();
      this.updateTweetsView.display(tweets);
    });
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
    api.getTweets(0, Number.MAX_SAFE_INTEGER).then((tweets) => {
      this.authorsView.display(new Set(tweets.map((tweet) => tweet.author)));
    });
  }

  setCurrentUser(user = '', token = '') {
    localStorage.setItem('currUser', user);
    localStorage.setItem('token', token);
    this.backToMain();
  }

  addTweet(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    event.target.reset();
    this.requestStart();
    api
      .postTweet(data.text, localStorage.token)
      .then(() => this.backToMain())
      .catch((error) => {
        if (error.statusCode === 401) {
          this.requestFinish();
          this.autorizationView.display();
        }
      });
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
    const user = localStorage.getItem('currUser');

    if (clickedElem) {
      const clickedElemId = clickedElem.dataset.id;
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
          <div class="form-add__header-logo">${user[0].toUpperCase()}</div>
          <textarea class="form-add__placeholder" name="text" maxlength=${Tweet.maxTweetLength} placeholder="Some text..."></textarea>
        </div>
        <div class="form-add__footer">
          <p class="form-add__text">
            <span class="form-add__сharacters-left">${Tweet.maxTweetLength}</span>
            сharacters left
          </p>
          <button class="button button_primary form-add__button" type="submit" >Tweet</button>
        </div>`;
        document.querySelector('.main__twitter').prepend(formEdit);

        const formAddPlaceholder = document.querySelector('.form-add__placeholder');
        const charactersLeft = document.querySelector('.form-add__сharacters-left');

        formAddPlaceholder.value = clickedElem.querySelector('.tweet__text').innerText;
        charactersLeft.innerText = formAddPlaceholder.maxLength - formAddPlaceholder.value.length;
        formAddPlaceholder.addEventListener('input', (e) => {
          charactersLeft.innerText = formAddPlaceholder.maxLength - e.target.value.length;
        });
        formEdit.addEventListener('submit', (event) => this.editTweet(event, clickedElemId));
        return;
      }
      this.showTweet(clickedElemId);
    }
  }

  editTweet(event, id) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    event.target.reset();
    this.requestStart();
    api
      .putTweet(id, data.text, localStorage.token)
      .then(() => {
        this.requestFinish();
        this.backToMain();
      })
      .catch((error) => {
        if (error.statusCode === 401) {
          this.requestFinish();
          this.autorizationView.display();
        }
      });
  }

  removeTweet(id) {
    this.requestStart();
    api
      .deleteTweet(id, localStorage.token)
      .then(() => {
        this.requestFinish();
        this.backToMain();
      })
      .catch((error) => {
        console.log(error);
        if (error.statusCode === 401) {
          this.requestFinish();
          this.autorizationView.display();
        }
      });
  }

  showTweet(id) {
    api.getAllTweets().then((response) => {
      const clickedTweet = response.filter((tweet) => tweet.id === id)[0];
      console.log(clickedTweet);
      this.tweetView.display(clickedTweet);
    });
  }

  addComment(event) {
    event.preventDefault();
    const parentElem = event.path.find((elem) => elem.classList.contains('section'));
    const data = Object.fromEntries(new FormData(event.target));
    event.target.reset();
    api.postComment(parentElem.dataset.id, data.text, localStorage.token).then((response) => {
      this.showTweet(parentElem.dataset.id);
    });
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
      formData.dateFrom = new Date(filterForm.date_from.value).setHours(0, 0, 1);
    } else {
      formData.dateFrom = new Date(0).setHours(0, 0, 1);
    }
    if (filterForm.date_to.value) {
      formData.dateTo = new Date(filterForm.date_to.value).setHours(23, 59, 59);
    } else {
      formData.dateTo = new Date().setHours(23, 59, 59);
    }

    formData.dateFrom = `${Utils.getDate(formData.dateFrom)}T${Utils.getTime(formData.dateFrom)}`;
    formData.dateTo = `${Utils.getDate(formData.dateTo)}T${Utils.getTime(formData.dateTo)}`;
    return formData;
  }

  filterSubmit(event) {
    if (event) {
      event.preventDefault();
      if (event.type === 'reset') {
        this.filterView.display();
      }
    }

    const formData = this.getFiters();
    this.filterView.display(formData);
    this.hashtagsView.display(formData.hashtags);
    this.requestStart();
    api.getTweets(0, 10, formData).then((res) => {
      this.requestFinish();
      controller.twitterView.display(res);
    });
  }

  authorization(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    const errorPassword = event.target.querySelector('.form__error-message_password');
    const errorLogin = event.target.querySelector('.form__error-message_login');

    api
      .login(data.login, data.password)
      .then((response) => {
        event.target.reset();
        const token = JSON.parse(JSON.stringify(response.token));
        this.setCurrentUser(data.login, token);
      })
      .catch((error) => {
        errorLogin.innerText = error.message;
        errorPassword.innerText = error.message;
      });
  }

  registration(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    const errorLogin = event.target.querySelector('.form__error-message_login');
    const errorPassword = event.target.querySelector('.form__error-message_password');
    const errorPasswordRepeat = event.target.querySelector('.form__error-message_password-repeat');

    if (data.password !== data.passwordRepeat) {
      errorPassword.innerText = 'Passwords do not match';
      errorPasswordRepeat.innerText = 'Passwords do not match';
    } else {
      errorPassword.innerText = '';
      errorPasswordRepeat.innerText = '';

      api
        .registration(data.login, data.password)
        .then(() => {
          errorLogin.innerText = '';
          event.target.reset();
          this.autorizationView.display();
        })
        .catch(() => {
          errorLogin.innerText = `${data.login} already registered`;
        });
    }
  }

  backToMain() {
    this.headerView.display();
    this.filterView.display();
    document.querySelector('.main').classList.remove('main_colomn');
    this.requestStart();
    api.getTweets().then((response) => {
      this.requestFinish();
      this.twitterView.display(response);
    });
  }

  requestStart() {
    function setButtonsDisabled() {
      const buttons = document.querySelectorAll('button');
      buttons.forEach((button) => {
        button.setAttribute('disabled', 'disabled');
        button.classList.add('button_disabled');
      });
    }
    this.spinner.display();
    setButtonsDisabled();
  }

  requestFinish() {
    function setButtonsEnabled() {
      const buttons = document.querySelectorAll('button');
      buttons.forEach((button) => {
        button.removeAttribute('disabled');
        button.classList.remove('button_disabled');
      });
    }
    this.spinner.hide();
    setButtonsEnabled();
  }
}

class TweetFeedApiService {
  constructor(url) {
    this.url = url;
  }

  $createUrlParams(from, count, params) {
    const { author, text, dateFrom, dateTo, hashtags } = params;
    let result = '';
    if (author) {
      result += `&author=${author}`;
    }
    if (text) {
      result += `&text=${text}`;
    }
    if (dateFrom) {
      result += `&dateFrom=${dateFrom}`;
    }
    if (dateTo) {
      result += `&dateTo=${dateTo}`;
    }
    if (hashtags && hashtags.length) {
      result += `&hashtags=${hashtags.join('%2C')}`;
    }
    if (from) {
      result += `&from=${from}`;
    }
    if (count) {
      result += `&count=${count}`;
    }

    return result.slice(1);
  }

  login(login, password) {
    return fetch(`${this.url}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({ login, password }),
    }).then((response) => {
      const json = response.json();
      if (response.status < 400) {
        return json;
      }
      return json.then(Promise.reject.bind(Promise));
    });
  }

  registration(login, password) {
    return fetch(`${this.url}/registration`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({ login, password }),
    }).then((response) => {
      const json = response.json();
      if (response.status !== 409) {
        return json;
      }
      return json.then(Promise.reject.bind(Promise));
    });
  }

  getAllTweets() {
    return this.getTweets(0, Number.MAX_SAFE_INTEGER);
  }

  getTweets(from = 0, count = 10, params = {}) {
    return fetch(`${this.url}/tweet?${this.$createUrlParams(from, count, params)}`).then((response) => response.json());
  }

  postTweet(text, token) {
    return fetch(`${this.url}/tweet`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ text }),
    }).then((response) => {
      const json = response.json();
      if (response.status < 400) {
        return json;
      }
      return json.then(Promise.reject.bind(Promise));
    });
  }

  putTweet(id, text, token) {
    return fetch(`${this.url}/tweet/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ text }),
    }).then((response) => {
      const json = response.json();
      if (response.status < 400) {
        return json;
      }
      return json.then(Promise.reject.bind(Promise));
    });
  }

  deleteTweet(id, token) {
    return fetch(`${this.url}/tweet/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: `Bearer ${token}`,
      },
      body: '',
    }).then((response) => {
      if (response.status < 400) {
        return response;
      }
      return response.json().then(Promise.reject.bind(Promise));
    });
  }

  postComment(id, text, token) {
    return fetch(`${this.url}/tweet/${id}/comment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ text }),
    }).then((response) => {
      const json = response.json();
      if (response.status < 400) {
        return json;
      }
      return json.then(Promise.reject.bind(Promise));
    });
  }
}

const controller = new TweetsController();
const api = new TweetFeedApiService('https://jslabapi.datamola.com');

document.addEventListener('DOMContentLoaded', () => {
  controller.headerView.display();
  controller.filterView.display();
  controller.filterSubmit();
});
