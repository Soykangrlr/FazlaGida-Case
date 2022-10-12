import { render, screen } from '@testing-library/react';
import { renderWithContext } from '../../utils/renderProvider';
import ArtistCard from './artistCard';

describe('ArtistCard Test', () => {
    const  item={name:'Soykan',listeners:'12',playcount:'15', image:[{size: 'small', "#text": 'image'}]}
    let image, name, listener, playCount,header
    beforeEach(() => {
        renderWithContext(<ArtistCard item={item} />)
        image = screen.getByTestId(/image/i)
        name = screen.getByTestId(/name/i)
        listener = screen.getByTestId(/listener/i)
        playCount = screen.getByTestId(/playCount/i)
        header = screen.getByTestId(/header/i)
    })
    test('Elemetler var mı',()=>{
        expect(image).toBeInTheDocument()
        expect(name).toBeInTheDocument()
        expect(listener).toBeInTheDocument()
        expect(playCount).toBeInTheDocument()
        expect(header).toBeInTheDocument()
    })
    test('header text ',()=>{
        expect(header).toHaveTextContent(/artist/i)
    })
    test('Name İtemdan gelen bilgiyle Aynı Mı', () => {
        expect(name).toHaveTextContent(item.name)
    })
    test('İmage Attribute Kontrolu', () => {
        expect(image).toHaveAttribute('src', item.image[0]['#text'])
    })
    test('listener ve playcount İtemdan gelen bilgiyle Aynı Mı',()=>{
        expect(listener).toHaveTextContent(`listeners: ${item.listeners}`)
        expect(playCount).toHaveTextContent(`playcount: ${item.playcount}`)
    })
})