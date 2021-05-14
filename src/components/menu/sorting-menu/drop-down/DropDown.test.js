import React from "react";
import {shallow, mount} from "enzyme";
import DropDown from "./DropDown";

describe('DropDown', ()=>{

    const sut = shallow(<DropDown/>);

    it('should match snapshot', () => {
        expect(sut).toMatchSnapshot();
    })

    it('should change selected item', () => {
        const component = mount(<DropDown sortBy={jest.fn()}/>);

        expect(component.find('select').props().value).toBe('RELEASE DATE')

        component.find('select').simulate('change', {target: {value: 'USER RATE'}});
        expect(component.find('select').props().value).toEqual('USER RATE');
        component.unmount();
    })
})