---
layout: doc
date: 2023-12-03
---

# Promise

## 谈谈你对 `Promise` 的了解

Promise 是 JS 中用于处理异步操作的一种机制，它表示一个异步操作最终完成的 `状态` 和 `结果`

Promise 是 ES6 引入的新特性，在解决回调地狱（callback hell）的问题，使得异步操作代码更加可控、整洁、易于管理

从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理

Promise 对象整个生命周期结束只会触发两种状态，要么成功 `Fulfilled `要么失败 `Rejected`

## 解释一下 Promise 的三种状态是什么 ？

1. Pending（进行中）：初始状态，表示异步操作正在进行中。
2. Fulfilled（已成功）：表示异步操作已经成功完成。
3. Rejected（已失败）：表示异步操作失败。

## 如何在一个 Promise 中处理多个异步操作？

- 链式调用

通过在每个 then 方法中返回一个新的 Promise 对象，可以将多个异步操作串行执行

- 静态方法 `all`

## 怎样使用 Promise 实现异步任务的串行执行？

```js
export default {
  data() {
    return {
      msg: 'Focused!', // [!code focus]
    };
  },
};
```

## Promise 的 `catch` 方法和 `then` 方法中的第二个参数有什么区别？

## Promise 中的 finally 方法有什么作用？能否给出一个使用场景？

`finally` 方法在执行一个异步操作之后不管是 `Fulfilled` 还是 `rejected` 都会执行，在项目中一般会有提交按钮的 `loading` 效果，那么当发起Ajax请求时就会开启 loading 状态，请求响应之后就会结束 loading 状态，一般在 `then` 或 `catch` 中将按钮状态回正，因为 `finally` 方法不管成功失败都会执行，所以可以执行一些符合这些场景下的操作。

## 请解释一下 Promise 中的错误冒泡机制

当一个 Promise 被拒绝时，它会传播到最接近的 .catch() 处理程序，而不是严格意义上的“冒泡”。然后，.catch() 处理程序返回的 Promise 将会变成已解决的状态，允许后续的 .then() 调用链继续执行。

## 你知道如何将一个回调风格的异步函数转换为返回 Promise 的函数吗？可以举例说明一下吗？

## 什么是 Promise.all() 和 Promise.race()？它们有什么区别？

## 在 Promise 中如何处理并发请求，以确保所有请求都完成后再执行后续操作？
