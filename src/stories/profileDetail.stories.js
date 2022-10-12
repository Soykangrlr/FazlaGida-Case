import React from 'react';
import { Provider } from 'react-redux'
import { store } from '../redux/store';
import { BrowserRouter } from "react-router-dom";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ProfileDetail from '../pages/profileDetail';
const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount:false
      },
    },
  })
export default {
  title: 'Pages/ProfileDetail',
  component: ProfileDetail,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>,
  (route)=><BrowserRouter>{route()}</BrowserRouter>,
  (query)=><QueryClientProvider client={queryClient}>{query()}</QueryClientProvider>
],
};

export const Template = (args) => <ProfileDetail/>;