import React from 'react';
import {shallow} from 'enzyme';

import Feedback from './feedback';

const testData = require('./test-data');

describe('<Feedback />', () => {
    it('Renders without crashing', () => {
        shallow(<Feedback />);
    });

    it('Render feedback', () => {
        const guessCount = testData.guesses.length;
        const feedback = testData.feedback;
        const wrapper = shallow(<Feedback guessCount={guessCount} feedback={feedback}/>);
        expect(wrapper.contains(feedback)).toEqual(true);
        expect(wrapper.contains('Guess again!')).toEqual(true);
    });
});