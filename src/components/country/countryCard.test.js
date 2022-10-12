import { render, screen } from '@testing-library/react';
import CountryCard from './countryCard';
describe('cauntryCard',()=>{
    let text,image
beforeAll(()=>{
    render(<CountryCard trackName='soykan' image='image'/>) 
     text=screen.getByTestId(/Track/i)
     image=screen.getByTestId(/image/i)
})
test('CountryCard image ve text bulunmalı',()=>{
    expect(image).toBeInTheDocument()
 expect(text).toBeInTheDocument()
})
test('İmage Attribute Kontrolu',()=>{
    expect(image).toHaveAttribute('src','image')
})
test('Text Ekrana Yazılıyor mu?',()=>{
   expect(text).toHaveTextContent(/soykan/i)
})
})
