import { render, screen } from '@testing-library/react';
import { renderWithContext } from '../../utils/renderProvider';
import Card from './card';
import ProfileCard from './profileCard';
describe('ProfilCard Test', () => {
    const item = {
        data: {
            name: "Soykan", image: [
                { size: 'small', "#text": 'image' },
                { size: 'small', "#text": 'image' },
                { size: 'small', "#text": 'image' }]
        }
    }
    let artistName, image
    beforeEach(() => {
        renderWithContext(<ProfileCard artistInfo={item} />)
        artistName = screen.getByTestId(/artistName/i)
        image = screen.getByTestId(/image/i)
    })
    test('ProfileCard image ve Artis ismi bulunmalı', () => {
        expect(image).toBeInTheDocument()
        expect(artistName).toBeInTheDocument()
    })
    test('Name İtem gelen bilgiyle Aynı Mı', () => {
        expect(artistName).toHaveTextContent(item.data.name)
    })
    test('İmage Attribute Kontrolu', () => {
        expect(image).toHaveAttribute('src', item.data.image[1]['#text'])
    })
})

describe('Card Track Test', () => {
    const track = {
        name: 'Soykan', listeners: '12', playcount: '15',
        image: [{ size: 'small', "#text": 'image' }, { size: 'small', "#text": 'image' }]
    }
    let image, name, listener, playCount
    beforeEach(() => {
        renderWithContext(<Card item={track} />)
        image = screen.getByTestId(/image/i)
        name = screen.getByTestId(/name/i)
        listener = screen.getByTestId(/listener/i)
        playCount = screen.getByTestId(/playCount/i)
    })
    test('Elemetler var mı',()=>{
        expect(image).toBeInTheDocument()
        expect(name).toBeInTheDocument()
        expect(listener).toBeInTheDocument()
        expect(playCount).toBeInTheDocument()
    })
    test('Name İtemdan gelen bilgiyle Aynı Mı', () => {
        expect(name).toHaveTextContent(track.name)
    })
    test('İmage Attribute Kontrolu', () => {
        expect(image).toHaveAttribute('src', track.image[1]['#text'])
    })
    test('listener ve playcount İtemdan gelen bilgiyle Aynı Mı',()=>{
        expect(listener).toHaveTextContent(`listeners: ${track.listeners}`)
        expect(playCount).toHaveTextContent(`playcount: ${track.playcount}`)
    })

})

describe('Card Track Test', () => {
    const album = {
        name: 'Soykan', playcount: '154545',
        image: [{ size: 'small', "#text": 'image' }, { size: 'small', "#text": 'image' }]
    }
    let image, name, playCount
    beforeEach(() => {
        renderWithContext(<Card item={album} />)
        image = screen.getByTestId(/image/i)
        name = screen.getByTestId(/name/i)
        playCount = screen.getByTestId(/playCount/i)
    })
    test('Elemetler var mı',()=>{
        expect(image).toBeInTheDocument()
        expect(name).toBeInTheDocument()
        expect().not.toBe('listeners')
        expect(playCount).toBeInTheDocument()
    })
    test('Name İtemdan gelen bilgiyle Aynı Mı', () => {
        expect(name).toHaveTextContent(album.name)
    })
    test('İmage Attribute Kontrolu', () => {
        expect(image).toHaveAttribute('src', album.image[1]['#text'])
    })
    test(' playcount İtemdan gelen bilgiyle Aynı Mı',()=>{
        expect(playCount).toHaveTextContent(`playcount: ${album.playcount}`)
    })

})