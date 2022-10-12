import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { BrowserRouter } from "react-router-dom";
import { render } from '@testing-library/react';

export function renderWithContext(element){
    render(
        <Provider store={store}>
           <BrowserRouter> {element}</BrowserRouter>
        </Provider>
     
    )
}