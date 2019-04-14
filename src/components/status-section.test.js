import React from 'react';
import {shallow, mount} from 'enzyme';

import StatusSection from './status-section';

describe('<StatusSection />', () => {
    const guesses = [20,25]
    it('Renders without crashing', () => {
        shallow(<StatusSection guesses={guesses}/>);
    });

    // it('Renders the guess list initially', () => {
    //     const wrapper = shallow(<StatusSection guesses={guesses}/>);
    //     expect(wrapper.hasClass('guessBox')).toEqual(true);
    // });
})