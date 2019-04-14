import React from 'react';
import {shallow} from 'enzyme';

import InfoSection from './info-section';

describe('<InfoSection />', () => {
    it('Renders without crashing', () => {
        shallow(<InfoSection />);
    });

    // it('Renders the text', () => {
    //     // const text = "Foo";
    //     const wrapper = shallow(<InfoSection />);
    //     expect(wrapper.find('#what')).toEqual(true);
    // });
});

