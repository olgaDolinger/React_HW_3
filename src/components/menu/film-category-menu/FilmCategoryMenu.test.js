import React from "react";
import {shallow} from "enzyme";
import FilmCategoryMenu from "./FilmCategoryMenu";

describe('FilmCategoryMenu', ()=>{
    let getStoredList = jest.fn();

    it('should match snapshot', () => {
        const sut = shallow(<FilmCategoryMenu getSortedList={getStoredList}/>);
        expect(sut).toMatchSnapshot();
    })

    it('should get stored list', () =>{

    })
})