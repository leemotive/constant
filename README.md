# constant

## 安装
npm安装
```bash
$ npm install const.js
```
或者使用yarn
```bash
$ yarn add const.js
```

## 使用
```javascript
import constant, {parse} from 'const.js'

//直接给constant赋值
constant.const_name = 'const_value';

//取值
console.log(constant.const_name);

// 不可以重复赋值
constant.const_name = 'new value'; // throw Error 'duplicate assignment'

// 不可以delete
delete constant.const_name; // false

// 不可以通过defineProperty修改
Object.defineProperty(constant, 'const_name', {
  value: 'new value'
}); // false


// 通过parse解析键值对常量
parse({
  new_const: 'new value'
});

console.log(constant.new_const); // new value

```
