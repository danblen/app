import '@nutui/nutui-react-taro/dist/style.css';
import 'taro-ui/dist/style/components/index.scss';
import {Component} from 'react';
import './app.less';
import './app1.css';

class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  render() {
    return this.props.children;
  }
}

export default App;
