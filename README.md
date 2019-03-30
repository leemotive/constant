# constant

## 安装
npm安装
```bash
$ npm install simple-const
```
或者使用yarn
```bash
$ yarn add simple-const
```

## 使用
```javascript
import constant, {parse} from 'simple-const'

//直接给constant赋值
constant.const_name = 'const_value';

//取值
console.log(constant.const_name); // const_value

// 不可以重复赋值
constant.const_name = 'new value'; // throw Error 'duplicate assignment'

// 不可以delete
delete constant.const_name; // false

// 通过defineProperty或者defineProperties修改不生效
Object.defineProperty(constant, 'const_name', {
  value: 'new value'
});
console.log(constant.const_name); // const_value



// 通过parse解析键值对常量
parse({
  new_const: 'new value'
});

console.log(constant.new_const); // new value

```
