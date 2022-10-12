import React from 'react';
import ArtistCard from '../components/topArtist/artistCard';
import { Provider } from 'react-redux'
import { store } from '../redux/store';

export default {

  title: 'Cards/ArtistCard',
  component: ArtistCard,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
};

export const Template = () =><ArtistCard /> ;

