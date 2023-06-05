# co4f4409595e65699a02a1396

Warning: Vite enforces using jsx syntax inside jsx/tsx files, so it will complain about that. Solution: rename `.js` files to `.jsx` :)

Quick start:

```
$ npm install
$ npm start
````

Head over to https://vitejs.dev/ to learn more about using vite
## About Scrimba

At Scrimba our goal is to create the best possible coding school at the cost of a gym membership! 💜
If we succeed with this, it will give anyone who wants to become a software developer a realistic shot at succeeding, regardless of where they live and the size of their wallets 🎉
The Frontend Developer Career Path aims to teach you everything you need to become a Junior Developer, or you could take a deep-dive with one of our advanced courses 🚀

- [Our courses](https://scrimba.com/allcourses)
- [The Frontend Career Path](https://scrimba.com/learn/frontend)
- [Become a Scrimba Pro member](https://scrimba.com/pricing)

Happy Coding!

keynote
## Vans 
### Part1. 标头部分
功能: filter列表
当点击filterTag的时候, 处理:
- 修改URL.
- 获得焦点classname
```jsx
<button
    onClick={() => handleFilterChange("type", "simple")}
    className={
        `van-type simple 
        ${typeFilter === "simple" ? "selected" : ""}`
    }
>Simple</button>
```
### Part2. 列表部分
当点击某项时:
- 进入详情页.保存搜索状态, 但不在url中显示(显得冗余). 因此用state
- 当从详情页重新回到这个列表时, 其搜索参数仍然保持, ~~从state中读取, 造成复杂和用户困扰~~
- ~~还可以携带 Record. 但这个不推荐. 应重新加载~~
```jsx
<Link to={van.id} state={{ search: `?${searchParams.toString()}`, currentVan: van }} > 
    ... 内容 ... 
</Link>
```
## VanDetail
- 返回列表
  使用 state 中的`search`(此时, URL中并不包含搜索)  
- 详情加载:
  - 重新加载(从数据库中重获)
  - 使用state中携带的..Record. 如果是Outlet中显示详情, 则可以通过`useOuletContext()`