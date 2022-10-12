import React from 'react';
import { BrowserRouter } from "react-router-dom";
import SliderTacks from '../components/slider/sliderTracks';

export default {
  title: 'Slider',
  component: SliderTacks,
  decorators: [
  (route)=><BrowserRouter>{route()}</BrowserRouter>,
],
};

export const Template = (args) => <SliderTacks/>;