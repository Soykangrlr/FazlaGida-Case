import { render, screen } from '@testing-library/react';
import SliderCard from './sliderCard';

describe('Slider Card',()=>{
 const item={name:"Track",artist:{name:'Soykan'},image:[
    {size: 'small', "#text": 'image'},
    {size: 'small', "#text": 'image'},{size: 'small', "#text": 'image'}]}
    let trackName,artistName,image
    beforeAll(()=>{
        render(<SliderCard item={item}/>)
        artistName = screen.getByTestId(/artistname/i)
        image = screen.getByTestId(/image/i)
        trackName = screen.getByTestId(/trackName/i)
    })
    test('Elemetler Var Mı?',()=>{
        expect(image).toBeInTheDocument()
        expect(trackName).toBeInTheDocument()
        expect(artistName).toBeInTheDocument()
    })
    test('İmage Attribute Kontrolu', () => {
        expect(image).toHaveAttribute('src', item.image[1]['#text'])
    })
    test('Artist Name ve Track Name İtem gelen bilgiyle Aynı Mı', () => {
        expect(trackName).toHaveTextContent(item.name)
        expect(artistName).toHaveTextContent(item.artist.name)
    })
})

