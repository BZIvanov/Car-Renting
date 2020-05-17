import React from 'react';
import { Landing, How } from '../../organisms';
import { ColorfulDivider } from '../../atoms';

const Home = () => {
  return (
    <div>
      <Landing />
      <ColorfulDivider />
      <How />
      <ColorfulDivider />
    </div>
  );
};

export default Home;
