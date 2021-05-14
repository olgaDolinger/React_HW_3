import React from "react";
import Search from "./Search";
import {mount, ReactWrapper, shallow} from "enzyme";
import * as S from "./Search.styled";

describe('Search', () => {

    it ('should match snapshot', () => {
        const sut = shallow(<Search />)
        expect(sut).toMatchSnapshot();
    })

    // it ('should check prompt', () => {
    //     const sut = shallow(<Search />)
    //     const input = sut.find('div');
    //     expect(input).toHaveLength(2);
    //     expect(input.value).toBe("FIND YOUR MOVIE");
    // });

    it ('should call react on click', () => {
        const onClick = jest.fn();
        const component = shallow(<S.ButtonSearch onClick={onClick}>SEARCH</S.ButtonSearch>)
        component.simulate('click');
        expect(onClick).toHaveBeenCalled();
    })

    it ('should start search', () => {
        const onSearchClick = jest.fn();
        const onClick = jest.fn().mockImplementation(()=>{
            onSearchClick()
        });

        const component = shallow(<S.ButtonSearch onClick={onClick}>SEARCH</S.ButtonSearch>)
        component.simulate('click');
        expect(onSearchClick).toHaveBeenCalled();
    })

    // it ('should start search', () => {
    //     const component = mount(<Search/>);
    //     const input = component.find('input');
    //     input.simulate('change', {target:{value:'test'}});
    //     // expect( component.find('input').length).toEqual(1);
    //     expect( component.find('input').value).toEqual('test');
    //     component.unmount()
    // })
})