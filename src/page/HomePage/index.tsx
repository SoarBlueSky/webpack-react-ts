import React,{Component} from 'react';
import { TsT } from '../TsFile';
interface IState {
    Text:String,
}

class HomePage extends Component<{},IState> {
    constructor(props) {
        super(props);
        this.state = {
            Text:'HomePage'
        }
    }
    componentDidMount(){
        TsT();
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
        </div>
    }

}
export default HomePage