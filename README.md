# FCU-IoT-Homework [![CircleCI](https://circleci.com/gh/FCU-IoT-Homework/FCU-loT-Front.svg?style=shield)](https://circleci.com/gh/FCU-IoT-Homework/FCU-loT-Front)


專案說明區塊 (待人補上)

# 專案目錄結構

brabra （日後補上）

# 開發與遵守流程

```
$ npm Install
$ gulp
```

**_[採用 Github flow](http://blog.krdai.info/post/17485259496/github-flow)_**

# 測試
```
$ npm test
```

# 部署
```
$ gulp compress
$ gulp deploy
```

# gulp 使用方法
| 指令 | 說明 | 備註
| --- | --- | ---
| gulp | 開啟伺服器 localhost:8000 | 無
| gulp compress | 生成 app.min.js | deploy 前記得使用
| gulp deploy | 部署至 140.134.26.72 | 確認一切正常在使用

# 測試使用方法
| 指令 | 說明 | 備註
| --- | --- | ---
|npm test | 開始跑測試結果 | 有錯誤不可 merge 回 master上

> 測試學習用資料

> 1. [React 测试入门教程](http://www.ruanyifeng.com/blog/2016/02/react-testing-tutorial.html)

> 2. [使用AVA和Enzyme测试React组件（二）](http://zhaozhiming.github.io/blog/2016/03/29/use-ava-and-enzyme-to-test-react-component-part2/)

> 3. [Enzyme 官方文件](http://airbnb.io/enzyme/)
