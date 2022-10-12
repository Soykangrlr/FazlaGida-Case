import React from 'react';
import Header from '../components/layout/header';
import { Provider } from 'react-redux'
import { store } from '../redux/store';
import { BrowserRouter } from "react-router-dom";
export default {
  title: 'Layout/Header',
  component: Header,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>,(route)=><BrowserRouter>{route()}</BrowserRouter>],
};

export const Template = (args) => <Header/>;