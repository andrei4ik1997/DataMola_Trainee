function add(...params) {
  let result;
  switch (params.length) {
    case 2: {
      result = params[0] + params[1];
      break;
    }
    case 1: {
      const addBy = (x) => (y) => y + x;
      result = addBy(params[0]);
      break;
    }
    default:
      break;
  }
  return result;
}

function sub(...params) {
  let result;
  switch (params.length) {
    case 2: {
      result = params[0] - params[1];
      break;
    }
    case 1: {
      const subBy = (x) => (y) => y - x;
      result = subBy(params[0]);
      break;
    }
    default:
      break;
  }
  return result;
}

function mul(...params) {
  let result;
  switch (params.length) {
    case 2: {
      result = params[0] * params[1];
      break;
    }
    case 1: {
      const mulBy = (x) => (y) => y * x;
      result = mulBy(params[0]);
      break;
    }
    default:
      break;
  }
  return result;
}

function div(...params) {
  let result;
  switch (params.length) {
    case 2: {
      result = params[0] / params[1];
      break;
    }
    case 1: {
      const divBy = (x) => (y) => y / x;
      result = divBy(params[0]);
      break;
    }
    default:
      break;
  }
  return result;
}

function pipe(...params) {
  return (initValue) => params.reduce((prev, fn) => fn(prev), initValue);
}

const a = add(1, 2);
const b = mul(a, 10);
const sub1 = sub(1);
const c = sub1(30);
const d = mul(sub(a, 1))(c);
const doSmth = pipe(add(d), sub(c), mul(b), div(a));
const result = doSmth(0);
const x = pipe(add(1), mul(2))(3);

/* eslint-disable no-console */
console.log('a', a);
console.log('b', b);
console.log('c', c);
console.log('d', d);
console.log('result', result);
console.log('x', x);
