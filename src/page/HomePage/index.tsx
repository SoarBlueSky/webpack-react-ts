import React, { Component } from "react";
import { TsT } from "../TsFile";
// import reduxTest1 from '../../component/reduxTest';
import { Counter } from "../TsFile/Counter";
import Highcharts from "../../component/highcharts";
import mypromise from "../../component/mypromise";
import AntdForm from "../AntdForm/index";
import Live2d from "../../component/live2d";
import GitLinkImg from "../../assets/images/link.png";
import hljs from "highlight.js";
import "./index.scss";
import "../../component/scroll";
import "../../component/b";

interface IState {
  Text: String;
}

class HomePage extends Component<{}, IState> {
  constructor(props) {
    super(props);
    this.state = {
      Text: "webpack-react-ts",
    };
    this.sendIssues = this.sendIssues.bind(this);
    this.newGithubIssueUrl = this.newGithubIssueUrl.bind(this);
  }
  componentDidMount() {
    TsT();
    // reduxTest1();
    hljs.highlightAll();
  }
  componentDidUpdate(prevProps, prevState) {}
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
  componentWillUnmount() {}
  componentDidCatch(error, info) {
    //如果render报错会出现错误信息
  }
  newGithubIssueUrl(options: any = {}) {
    let repoUrl;
    if (options.repoUrl) {
      repoUrl = options.repoUrl;
    } else if (options.user && options.repo) {
      repoUrl = `https://github.com/${options.user}/${options.repo}`;
    } else {
      throw new Error(
        "You need to specify either the `repoUrl` option or both the `user` and `repo` options"
      );
    }

    const url = new URL(`${repoUrl}/issues/new`);

    const types = [
      "body",
      "title",
      "labels",
      "template",
      "milestone",
      "assignee",
      "projects",
    ];

    for (const type of types) {
      let value = options[type];
      if (value === undefined) {
        continue;
      }

      if (type === "labels" || type === "projects") {
        if (!Array.isArray(value)) {
          throw new TypeError(`The \`${type}\` option should be an array`);
        }

        value = value.join(",");
      }

      url.searchParams.set(type, value);
    }

    return url.toString();
  }
  sendIssues() {
    const url = this.newGithubIssueUrl({
      user: "running-elephant",
      repo: "datart",
      body: "\n\n\n---\nI'm a human. Please be nice.",
      title:'Ceshi'
    });
    console.log(url, "url");
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
        {/* TO DO live2d会影响自动化测试  */}
        <Live2d></Live2d>
        <pre>
          <code className="hljs language-javascript">
            {`let str = Hello world; 
let a = 1;`}
          </code>
          <code className="">console.log(a,'a')</code>
        </pre>
        <button onClick={this.sendIssues}>发送issues (gi)</button>
        <div style={{ height: "3000px" }}></div>
      </div>
    );
  }
}
export default HomePage;
