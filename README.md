# 觀察 render, didMount, didUnmout

- 房間 Room 裡有兩個魚缸 Tank
- 魚缸裡一開始有一條魚 Fish (始祖魚)
- 可以按下 [加魚]，往魚缸中加一條魚
- 可以按下 [清空]，將魚缸中的魚都清理掉
- 每條魚可以 [變色]

Room, Tank, Fish 元件中都添加以下代碼，方便觀察 render, componentDidMount, componentDidUnmount 等事件

```javascript
// ...

useEffect(() => {
  console.log(`componentDidMount 加載 : ${name}`);
  return () => {
    console.log(`componentDidUnmount 卸載 : ${name}`);
  };
}, []);

console.log(`render 渲染 : ${name}`);
return (
  // ...
)
```

# 問題 : 用純 javascript 來看 Tank.js

javascript 呼叫方法，該方法的每一行執行順序？  

```js
Tank({ label = "test" });
```

這就是 react render 做的事情

# 問題 : 父/子元件的 render, didMount 順序

網頁剛載入時候。console.log() 會紀錄哪些訊息？順序為何？

# 問題 : 子元件 state 變更

重新載入網頁後，按下 始祖魚 的 [變色] 按鈕。console.log() 會紀錄哪些訊息？

# 問題 : 父元件中新增子元件

重新載入網頁後，按下 [加魚] 按鈕。console.log() 會紀錄哪些訊息？

# 問題 : 父元件中移除子元件

重新載入網頁後，  
按下 [加魚] 按鈕，  
再按下魚缸的 [清空] 按鈕。  
console.log() 會紀錄哪些訊息？

# 問題 : 父元件 state 變更，對子元件的影響

重新載入網頁後，  
右邊魚缸 [加魚] 1 條， 
再按下房間的 [換右邊魚缸] 按鈕。  
console.log() 會紀錄哪些訊息？

# 問題 : 父元件 state 變更，對子元件的影響

重新載入網頁後，  
左邊魚缸 [加魚] 2 條， 
再按下房間的 [換右邊魚缸] 按鈕。  
console.log() 會紀錄哪些訊息？

# 問題 : 移除父元件

重新載入網頁後，  
按下 [加魚] 按鈕，  
再按下房間的 [刪除右邊魚缸] 按鈕。  
console.log() 會紀錄哪些訊息？

# 問題 useEffect dependency array [] 或 undefined 不同

```js
useEffect(() => {
  //...
}, []);

useEffect(() => {
  //...
});        // << 這是 undefined dependency array
```

# 問題 : React.StrictMode 的影響

如果在 index.js 添加回原來 CRA 如下的代碼，會有什麼影響？

```
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

# 附記 : react-bootstrap 的 CSS 樣式

以 global css 方式提供，  
因為 bootstrap 是整體 UI 框架。  
其餘個別元件的開發，不應該去添加 global css。

