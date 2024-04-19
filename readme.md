# pinyincaichengyu-helper
网页游戏`拼音猜成语`的简易拼音筛选工具

## 游戏地址
[https://idiom.limboy.me/](https://idiom.limboy.me/)  
[https://pinyincaichengyu.com/](https://pinyincaichengyu.com/)

## 构建要求
该项目为使用`Vue.js 3.x`、`Vite`、`Tailwind CSS`、`SASS`构建而成的单静态网页，构建要求如下：
- `Node.js` 14.18.1 或以上版本

## 构建
````shell
git clone git@github.com:danor-game/pinyincaichengyu-helper.git
cd pinyincaichengyu-helper
npm i
npm run build
npx run preview
````

## 使用说明
- 根据游戏页面提示，输入规则
- 每一个格子左侧为输入框，右侧为筛选结果

## 规则
- 一行一规则
- `#`开始为注释
- `!`开头为反结果
- `l 数字`为拼音长度
- `r 正则表达式`为匹配正则表达式
- `m 正则表达式`为精确匹配正则表达式，即`/^你的表达式$/`
- `c 字母1字母2字母3...`为字母匹配，即`/[字母1字母2字母3]/`
