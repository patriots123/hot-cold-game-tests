import React from 'react';
import {shallow} from 'enzyme';

import GuessList from './guess-list';

describe('<GuessList />', () => {
    let guesses = [1,2,3,4];
    it('Renders without crashing', () => {
        shallow(<GuessList guesses={guesses}/>);
    });

    it('Renders list of guesses', () => {
        const wrapper = shallow(<GuessList guesses={guesses}/>);
        expect(wrapper.hasClass('guessBox')).toEqual(true);
        const listItems = wrapper.find('li');
        expect(listItems.length).toEqual(guesses.length);
        guesses.forEach((guess,index)=> {
            expect(listItems.at(index).text()).toEqual(guess.toString());
        })
    });
});