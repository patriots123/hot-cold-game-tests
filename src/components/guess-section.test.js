import React from 'react';
import {shallow} from 'enzyme';

import GuessSection from './guess-section';

describe('<GuessSection />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessSection />);
    });

    it('Renders child elements', () => {
        const wrapper = shallow(<GuessSection />);
        expect(wrapper.contains('Feedback'));
        expect(wrapper.contains('GuessForm'));
    });
});