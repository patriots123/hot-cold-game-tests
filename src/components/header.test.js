import React from 'react';
import {shallow} from 'enzyme';

import Header from './header';

describe('<Header />', () => {
    it('Renders without crashing', () => {
        shallow(<Header />);
    });

    // it('Renders the text', () => {
    //     const text = "Foo";
    //     const wrapper = shallow(<Card text={text} />);
    //     expect(wrapper.text()).toEqual(text);
    // });
});


