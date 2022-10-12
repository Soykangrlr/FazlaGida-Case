import React from 'react';
import { Provider } from 'react-redux'
import { store } from '../redux/store';

import Card from '../components/profile/card';



export default {

  title: 'Cards/ALbumTrack',
  component:Card,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
};

const Template = (args) => <Card {...args}/>

export const Album= Template.bind()
Album.args={
    item:{name:'Kenya West',playcount:'154545', 
    image:[{size: 'small', "#text": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCjHX_74dYS7EcYG2zCjKjzSSgMuulq08gBA&usqp=CAU'},{size: 'small', "#text": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCjHX_74dYS7EcYG2zCjKjzSSgMuulq08gBA&usqp=CAU'}]}
}

export const Track= Template.bind()
Track.args={
    item:{name:'Kenya West',listeners:'12345',playcount:'154545', 
    image:[{size: 'small', "#text": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCjHX_74dYS7EcYG2zCjKjzSSgMuulq08gBA&usqp=CAU'},{size: 'small', "#text": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCjHX_74dYS7EcYG2zCjKjzSSgMuulq08gBA&usqp=CAU'}]}
}