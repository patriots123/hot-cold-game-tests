import React from 'react';
import {shallow} from 'enzyme';

import GuessCount from './guess-count';

describe('<GuessCount />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessCount />);
    });

    it('guess count is rendered when >1', () => {
        const guessCount = 3;
        const wrapper = shallow(<GuessCount guessCount={guessCount} />);
        expect(wrapper.text()).toEqual(`You've made 3 guesses!`);
    });

    it('guess count is rendered when =1', () => {
        const guessCount = 1;
        const wrapper = shallow(<GuessCount guessCount={guessCount} />);
        expect(wrapper.text()).toEqual(`You've made 1 guess!`);
    });
});