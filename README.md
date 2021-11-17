# storybook-demo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run storybook
```

### Compiles and minifies for production
```
npm run build-storybook
```

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


---