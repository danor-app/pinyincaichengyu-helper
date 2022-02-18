# pinyincaichengyu-helper
网页游戏[拼音小成语 https://pinyincaichengyu.com/](https://pinyincaichengyu.com/)的简易筛选拼音工具

## 要求
- Node.js 14.18.1以上版本

## 构建
````shell
git clone git@github.com:zheung/pinyincaichengyu-helper.git
cd pinyincaichengyu-helper
npm i
npm run 构建
npx run 预览
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