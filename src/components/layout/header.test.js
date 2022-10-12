// import { Provider } from 'react-redux';
// import { store } from '../../redux/store';
import { render, screen } from '@testing-library/react';
// import { BrowserRouter } from "react-router-dom";
import React from 'react';
import Header from './header'
import { renderWithContext } from '../../utils/renderProvider';


// function renderWithContext(element){
//     render(
//         <Provider store={store}>
//            <BrowserRouter> {element}</BrowserRouter>
//         </Provider>
     
//     )
// }
describe('Header Test',()=>{
    let navBar,mode
    beforeAll(()=>{
        renderWithContext(<Header/>)
        navBar=screen.getByRole('link')
        mode=screen.getByTestId('deneme')
    })
    test('Navbar Var mı ?',()=>{
        expect(navBar).toBeInTheDocument()
        expect(navBar).toHaveTextContent(/musicList/i)
    })
    test('link to test',()=>{
        expect(navBar).toHaveAttribute('href','/')
    })
   
})
