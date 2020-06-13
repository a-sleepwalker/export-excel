import React, {Suspense} from 'react';
import {Provider} from 'react-redux';
import store from './store';
import AppRouter from './router';
import '@/assets/style/app.styl';

const App: React.FC = () => {
  return (
    <Provider store={store}>`
      <Suspense fallback={null}>
        <AppRouter/>
      </Suspense>
    </Provider>
  );
};

export default App;
