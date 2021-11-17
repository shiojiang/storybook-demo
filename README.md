# storybook-demo

## 项目配置

### 安装依赖

```
npm install
#or
yarn
```
### 可以根据目前所处理的应用程序的不同部分来决定同时运行下述中的一个或者多个。

### 开发环境运行
```
# 运行storybook
npm run storybook

# 运行Vue
npm run serve
```

### 打包生产环境代码
```
npm run build-storybook

npm run build
```
## storybook目录说明

根目录生成的 `.storybook`为 storybook 默认配置目录

`src/stories` 目录为 storybook 页面组件目录

## 组件Demo

### 按钮(JButton)

| 属性   | 值      |                             描述                             |
| ------ | ------- | :----------------------------------------------------------: |
| type   | String  | 按钮类型：primary，success，info，warning，danger，默认default |
| plain  | Boolean |                 是否镂空，默认为 false                 |
| round  | Boolean |                 是否为圆角，默认为 false                 |
| size   | String  |          按钮尺寸：medium，small，mini，默认default          |
| icon   | String  |       字体图标，引用scss文件，具体参考src/assets/fonts       |
| circle | Boolean |                 图标是否为圆形，默认为 false                 

###### 注：circle属性在使用icon且无按钮文本时生效

| 事件  | 值       | 描述     |
| ----- | -------- | -------- |
| click | Function | 点击事件 |
