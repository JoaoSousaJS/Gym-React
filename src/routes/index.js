import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Coach from '~/pages/Coach';
import Member from '~/pages/Member';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Coach} />
      <Route path="/members" component={Member} />
    </Switch>
  );
}
