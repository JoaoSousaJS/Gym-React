import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Coach from '~/pages/Coach';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Coach} />
    </Switch>
  );
}
