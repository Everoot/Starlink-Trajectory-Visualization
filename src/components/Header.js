import React, {Component} from "react";
import spacex_logo from "../assets/images/spacex_logo.svg";

class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={spacex_logo} className="App-logo" alt="logo"/>
                <p className="title">
                    StarLink Tracker
                </p>
            </header>
        );
    }
}
export default Header;
// class Header extends Component { ... } 定义了一个名为 Header 的类组件。
// render() { ... } 定义了一个名为 render 的方法，这个方法返回一个 React 元素。
// <header className="App-header"> ... </header> 是一个 React 元素，
// 它是一个 HTML 元素，它的类型是 header，它有一个 className 属性，它的值是 App-header。
// <img src={spacex_logo} className="App-logo" alt="logo"/> 是一个 React 元素，
// 它是一个 HTML 元素，它的类型是 img，它有三个属性，分别是 src、className 和 alt。
// <p className="title"> ... </p> 是一个 React 元素，它是一个 HTML 元素，它的类型是 p，它有一个 className 属性，它的值是 title。
// <p className="title"> ... </p> 的内容是 StarLink Tracker。
// <p className="title"> ... </p> 是 <header className="App-header"> ... </header> 的子元素。
// <header className="App-header"> ... </header> 是 <div className="App"> ... </div> 的子元素。
// <div className="App"> ... </div> 是 <div id="root"> ... </div> 的子元素。
