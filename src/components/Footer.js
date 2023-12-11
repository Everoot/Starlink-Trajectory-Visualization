import React, {Component} from "react";

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                ©2023 StarLink Tracker. All Rights Reserved. Website Made by Eve Liang
            </footer>
        );
    }
}

export default Footer;

// class Footer extends Component { ... } 定义了一个名为 Footer 的类组件。
// render() { ... } 定义了一个名为 render 的方法，这个方法返回一个 React 元素。
// <footer className="footer"> ... </footer> 是一个 React 元素，
// 它是一个 HTML 元素，它的类型是 footer，它有一个 className 属性，它的值是 footer。
// <footer className="footer"> ... </footer> 的内容是 ©2020 StarLink Tracker. All Rights Reserved. Website Made by Your name。
// export default Footer; 导出了 Footer 组件，这样其他文件就可以导入 Footer 组件了。