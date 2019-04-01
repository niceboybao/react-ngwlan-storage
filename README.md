# react-ngwlan-storage

react H5 浏览器缓存组件,包括 `cookie`、`localStorage`、`sessionStorage` 等相关存取API

## install

```shell
npm i react-ngwlan-storage --D
```

## import

```javascript
import Storage from 'react-ngwlan-storage';
```

## cookie api

### 1.添加cookie

```javascript
Storage.saveCookie(key,value,opt);
```

### 2.获取指定cookie

```javascript
Storage.getCookie(key,doNotParse);
```

### 3.删除指定cookie

```javascript
Storage.removeCookie(key,opt);
```

### 参数说明

参数         | 类型            | 说明                                | 是否必填
---------- | ------------- | --------------------------------- | ----
key        | string        | cookie标识，通过key获取/删除指定的cookie      | Y
value      | string/object | cookie 标识对应的值，必选                  | Y
opt        | object        | 该选项中可填参数较多，具体见下方说明                | N
doNotParse | boolean       | 表示是否需要解析，为true时，可将value值解析为json对象 | N

- opt参数中可选填的内容如下

选填内容     | 类型      | 说明
-------- | ------- | --------------------------------------------------------------------------------------------
path     | string  | 指定与cookie关联在一起的网页。默认情况下cookie会与创建它的网页、该网页处于同一目录下的网页以及与这个网页所在目录下的子目录下的网页关联。设置为"/"时，表示与所有页面关联。
expires  | Date    | 指定cookie的有效期。默认为设置的expires的当前时间。
masAge   | number  | 以秒为单位，设置当客户端接收到cookie之后，cookie的最长有效期。
domain   | string  | cookie的域（sub.domain.com/.allsubdomains.com） secure                                           | boolean | 指定在网络上如何传输cookie，默认是不安全的，通过一个普通的http连接传输。设置为true时，表示只能通过https协议连接传输，增强安全性。
httpOnly | boolean | 是否只允许服务器访问cookie。为防止XSS攻击、窃取cookie内容，增加了cookie的安全性，可将该项设置为true（该情况下用js是无法读取到cookie的）。

- masAge补充说明：

- 如果max-age属性为正数，则表示该cookie会在max-age秒之后自动失效。浏览器会将max-age为正数的cookie持久化，即写到对应的cookie文件中。无论客户关闭了浏览器还是电脑，只要还在max-age秒之前，登录网站时该cookie仍然有效；

- 如果max-age为负数，则表示该cookie仅在本浏览器窗口以及本窗口打开的子窗口内有效，关闭窗口后该cookie即失效。max-age为负数的Cookie，为临时性cookie，不会被持久化，不会被写到cookie文件中。cookie信息保存在浏览器内存中，因此关闭浏览器该cookie就消失了。cookie默认的max-age值为-1；

- 如果max-age为0，则表示删除该cookie。cookie机制没有提供删除cookie的方法，因此通过设置该cookie即时失效实现删除cookie的效果。失效的Cookie会被浏览器从cookie文件或者内存中删除；

- 如果不设置expires或者max-age这个cookie默认是Session的，也就是关闭浏览器该cookie就消失了。

## localStorage api

### 参数说明

- key: 字符串类型，本地数据标识，通过key获取/删除指定的本地数据，必选
- value: 字符串、数组、对象类型，本地数据标识对应的值，必选

### 1.添加localStorage

```javascript
Storage.saveLocalStorage(key,value);
```

### 2.获取指定localStorage

```javascript
Storage.getLocalStorage(key);
```

### 3.判断是否有指定的localStorage

```javascript
Storage.haveLocalStorage(key);
```

### 4.删除单个localStorage

```javascript
Storage.removeLocalStorage(key);
```

### 5.删除全部localStorage

```javascript
Storage.removeAllLocalStorage();
```

### 6.获取全部localStorage

```javascript
Storage.getAllLocalStorage();
```

### 7.获取存储的local storage数量

```javascript
Storage.getLocalStorageNum();
```

## sessionStorage api

### 参数说明

- key: 字符串类型，本地数据标识，通过key获取/删除指定的本地数据，必选
- value: 字符串、数组、对象类型，本地数据标识对应的值，必选

### 1.添加sessionStorage

```javascript
Storage.saveSession(key,value);
```

### 2.获取指定sessionStorage

```javascript
Storage.getSession(key);
```

### 3.判断是否有指定的sessionStorage

```javascript
Storage.haveSession(key);
```

### 4.删除指定sessionStorage

```javascript
Storage.removeSession(key);
```

### 5.删除全部sessionStorage

```javascript
Storage.removeAllSession();
```

### 6.获取全部sessionStorage

```javascript
Storage.getAllSession();
```

### 7.获取存储的sessionStorage的数量

```javascript
Storage.getSessionNum();
```

## example

### cookie

```javascript
import Storage from 'react-ngwlan-storage';

Storage.saveCookie('userId', '100100');
Storage.getCookie('userId');
Storage.removeCookie('userId',);
```

### localStorage

```javascript
import Storage from 'react-ngwlan-storage';

Storage.saveLocalStorage('test', 123);
Storage.getLocalStorage('test');  // 123
Storage.getLocalStorageNum();  // 1
Storage.getAllLocalStorage();  // {'test':123}
Storage.haveLocalStorage('test');  // true
Storage.removeLocalStorage('test');
Storage.removeAllLocalStorage();
```

### sessionStorage

```javascript
import Storage from 'react-ngwlan-storage';

Storage.saveSession('test', 123);
Storage.getSession('test');  // 123
Storage.getSessionNum();  // 1
Storage.getAllSession();  // {'test':123}
Storage.haveSession('test');  // true
Storage.removeSession('test');
Storage.removeAllSession();
```
