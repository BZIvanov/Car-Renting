import React from 'react';
import { Landing, How } from '../../organisms';
import { ColorfulDivider } from '../../atoms';

const Home = () => {
  return (
    <div>
      <Landing />
      <ColorfulDivider />
      <How />
    </div>
  );
};

export default Home;
