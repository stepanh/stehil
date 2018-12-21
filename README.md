This is the source of [stehil.com](https://stehil.com) 

> This may be useful if you are building a React app and want to make it easy for
> [Google Bot](https://support.google.com/webmasters/answer/182072?hl=en) & friends to index your site - so you need SSR and good SEO.
>  **Otherwise use [react-create-app](https://github.com/facebook/create-react-app).**

# The Stack
* [React](https://reactjs.org) (with [hooks](https://reactjs.org/docs/hooks-intro.html) - so much nicer than classes/recompose)
* [TypeScript](https://typescriptlang.org)
* [Razzle](https://github.com/jaredpalmer/razzle)
* [after.js](https://github.com/jaredpalmer/after.js)
* [react-router](https://github.com/ReactTraining/react-router)
* [express](https://github.com/expressjs/express)
* [SCSS](https://sass-lang.com)

This stack is used here just for kicks, it's not needed for a static blog. A way for me to try things out.

# What this can do

- SSR
- code-splitting (async-loaded routes)

## Why Razzle & after.js instead of next.js?

- Next gives you less freedom in what your URLs can look like by default.  
- Next is a big library.  
- Razzle's hot reloading is nicer than what you get with next.
- Disclaimer: I haven't tried Next v6/v7 properly, it should be lot better than
the v4 I've used.

## Why TypeScript

Yes, it's a bit of a pain to get it working right initially. Later on, it can be a 
head scratcher to get types working well, especially if you are going for *maximum strictness*&trade;. But it's **so** worth it,
especially if you are working in a team, or are a bit forgetful.
Node.js with TypeScript is **safer** for me than Java ever was. Win!

## Why SCSS
- CSS-in-JS solutions **look** nice. But they all increase bundle size and steal a bit of runtime performance.
- Yes, you're not getting guaranteed encapsulation with SCSS - but it's trivial to fix conflicting styles.

## TODOs
- [ ] Example of lazy (code-split) route
- [ ] Example of internal API
- [ ] Revisit Main.tsx routing
- [ ] Build and deploy with [now.sh](https://zeit.co/now) V1
- [x] Build with [now.sh](https://zeit.co/now) V1
- [x] Deploy with [now.sh](https://zeit.co/now) V2
- [ ] Deploy to to Google AppEngine Standard Environment node.js 