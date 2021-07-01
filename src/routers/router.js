import { Layout } from 'antd';
import { HashRouter, Redirect, Switch, Route } from 'react-router-dom';
import CommonLayout from '../commomcomponents/commonLayout';
import BaseCanvas from '../workspace/baseCaven';

const WebRouter = () => {
  return (
    <HashRouter>
      <Switch>
        <CommonLayout path="/menu/home" component={BaseCanvas} />
        <Redirect to="/menu/home" />
      </Switch>
    </HashRouter>
  );
};
export default WebRouter;
