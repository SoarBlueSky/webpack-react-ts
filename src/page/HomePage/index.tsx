import React,{Component} from 'react';
import { TsT } from '../TsFile';
// import reduxTest1 from '../../component/reduxTest';
import { Counter } from '../TsFile/Counter';
import Highcharts from '../../component/highcharts';
interface IState {
    Text:String,
}

class HomePage extends Component<{},IState> {
    constructor(props) {
        super(props);
        this.state = {
            Text:'webpack-react-ts'
        }
    }
    componentDidMount(){
        // TsT();
        // reduxTest1();
    }
    componentDidUpdate(prevProps,prevState) {

    }
    shouldComponentUpdate(nextProps,nextState){
        return true;
    }
    componentWillUnmount(){

    }
    componentDidCatch(error,info){ //如果render报错会出现错误信息

    }
    render() {
        let { Text } = this.state;
        return <div>
            {Text}
            <Counter></Counter>
            <Highcharts></Highcharts>
        </div>
    }

}
export default HomePage