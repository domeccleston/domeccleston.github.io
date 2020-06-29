---
path: "/post-one"
date: "2020-06-29"
title: "YDKJS: This & Object Prototypes"
author: "Dom Eccleston"
---

YDKJS stands for [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/README.md), 
a series of Javascript books by Kyle Simpson. They take a little bit of getting used to, because
he dives straight into fine details about lexing & tokenizing & how the JS engine interprets your code in a way that is less beginner-friendly than the likes of [Eloquent Javascript](https://eloquentjavascript.net/). They're excellent, though, very technical but still straightforwardly written. I'll leave a proper review
when I've finished the remaining books (the main book YDKJS is split into a number of sub-books), but
for now here are a bunch of things I learned from reading This & Object Prototypes that I didn't know before.

- The value of `this` in Javascript is determined only by its call site, not where its containing function
is declared.
- To be more precise, the value of `this` is determined, in order of precedence, by:

    1.  Whether a function is called with the `new` keyword

    2. Whether it is called with either `.call` or `.apply`

    3. Whether it is called with a context object passed in

    4. Default behaviour (window object)

- You can replicate the this-capturing behaviour of ES6 arrow functions in ES5 by declaring a variable
    `self` (for example), and assigning it `this`, e.g.
    ```
    fn doSomething() {
        var self = this;
        ...
    }

- **Not** everything in JS is an object. Simple primitives aren't. But they have an object counterpart
    (string vs String)
- When we called a method on a string primitive (`"hello".length()`) the engine is automatically coercing
it to a String object.
- "Function" and "method" are basically interchangeable in JS.
- Since arrays are objects, we can add properties onto them with dot notation.
- `in` vs `hasOwnProperty`: the former looks only at the object itself, the latter at the object with its prototype chain.
- Javascript constructors are just any function called with `new`: we can put it in front of any function
 and it will return an object as well as its normal behaviour.
