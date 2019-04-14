import React from 'react';
import {shallow} from 'enzyme';

import AuralStatus from './aural-status';

describe('<AuralStatus />', () => {
    it('Renders without crashing', () => {
        shallow(<AuralStatus />);
    });

    it('Render aural status', () => {
        const auralStatus = 'this is the aural status';
        const wrapper = shallow(<AuralStatus auralStatus={auralStatus}/>);
        expect(wrapper.contains(auralStatus)).toEqual(true);
    });
});