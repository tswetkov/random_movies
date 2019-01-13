import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import MainScreen from '../../containers/MainScreen';
import MovieScreen from '../../containers/MovieScreen';

const Screens = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene
          key="main"
          component={MainScreen}
          title="Главный экран"
          initial
        />
        <Scene key="movie" component={MovieScreen} title="Название фиьлма" />
      </Scene>
    </Router>
  );
};

export default Screens;
