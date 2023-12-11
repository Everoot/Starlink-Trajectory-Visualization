
import '../styles/App.css';
import Header from './Header';
import Main from "./Main";
import Footer from "./Footer";


function App() {
  return (
    <div className="App">
        <Header />
        <Main />
        <Footer />
    </div>
  );
}

export default App;
// function App() { ... } 定义了一个名为 App 的函数组件。
// return ( ... ) 是函数组件的返回值，它是一个 React 元素。
// <div className="App"> ... </div> 是一个 React 元素，它是一个 HTML 元素，它的类型是 div，它有一个 className 属性，它的值是 App。
// <Header /> 是一个 React 元素，它是一个自定义组件，它的类型是 Header。
// export default App; 导出了 App 组件，这样其他文件就可以导入 App 组件了。
