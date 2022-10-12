import React from 'react';
import { Provider } from 'react-redux'
import { store } from '../redux/store';
import ProfileCard from '../components/profile/profileCard';



export default {

  title: 'Cards/ProfileCard',
  component: ProfileCard,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
};

export const Template = (args) => <ProfileCard {...args}></ProfileCard>;

