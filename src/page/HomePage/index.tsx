import React, { Component } from "react";
import { TsT } from "../TsFile";
// import reduxTest1 from '../../component/reduxTest';
import { Counter } from "../TsFile/Counter";
import Highcharts from "../../component/highcharts";
import mypromise from "../../component/mypromise";
import "../../component/b";
import AntdForm from "../AntdForm/index";
import Live2d from "../../component/live2d";
import "../../component/scroll";
import GitLinkImg from "../../assets/images/link.png";
import "./index.scss";
import hljs from "highlight.js";

interface IState {
  Text: String;
}

class HomePage extends Component<{}, IState> {
  constructor(props) {
    super(props);
    this.state = {
      Text: "webpack-react-ts",
    };
  }
  componentDidMount() {
    TsT();
    // reduxTest1();
    hljs.highlightAll();
  }
  componentDidUpdate(prevProps, prevState) {
    
    
  }
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
  componentWillUnmount() {}
  componentDidCatch(error, info) {
    //如果render报错会出现错误信息
  }
  render() {
    let { Text } = this.state;
    return (
      <div className="bigBox">
        <div id="scrollDiv"></div>
        <a href="https://github.com/lyp000119/webpack-react-ts" target="_blank">
          <img className="Gitlinkimg" src={GitLinkImg} alt="" />
        </a>
        {Text}
        <Counter></Counter>
        <Highcharts></Highcharts>
        <AntdForm></AntdForm>
        <Live2d></Live2d>
        <pre>
          <code className="hljs language-javascript">
{`let str = Hello world; 
let a = 1;`}
          </code>
          <code className="">console.log(a,'a')</code>
        </pre>

        <div style={{ height: "3000px" }}></div>
      </div>
    );
  }
}
export default HomePage;
