import React from "react";
import {shallow} from "enzyme";
import Counter from "components/counter/Counter";

describe('Counter', () => {
    it('should match snapshot',  () => {
        const sut = shallow(<Counter/>);
        expect(sut).toMatchSnapshot();
    })

    it('should show defined number',  () => {
        const sut = shallow(<Counter numMovies='5'/>);
        expect(sut.find('div').value).toMatchSnapshot('5 movies found ');
    })

})