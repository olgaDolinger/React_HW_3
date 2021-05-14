import React from "react";
import EditButton from "./EditButton";
import {shallow} from "enzyme";
import * as S from "components/film-item/edit-button/EditButton.styled";

describe('Edit Button',() => {
    it('should match snapshot', () =>{
        const sut = shallow(<EditButton editFilm={jest.fn} deleteFilm={jest.fn}/>)
        expect(sut).toMatchSnapshot();
    })

    it('should react on click on menu button', () => {
        const onClick = jest.fn();
        const sut = shallow(<EditButton editFilm={jest.fn} deleteFilm={jest.fn}/>)
        const button = sut.find(S.EditButton);
        button.addEventListener('click', onClick);
        button.simulate('click');
        expect(onClick).toBeCalled();
    });

    it('should show menu on click', () => {

    });

    it('should select Delete from menu', () => {
        const Menu = { Edit: "Edit", Delete: "Delete" };
        const sut = shallow(<S.EditMenu>
            {Object.keys(Menu).map((item, i) => (
                <S.EditMenuItem
                    key={item}
                    ref={(el) => (editButton.current[i] = el)}
                    onClick={(event) => onClickHandler(event, editButton.current[i])}
                >
                    {item}
                </S.EditMenuItem>
            ))}
        </S.EditMenu>)


    });


    it('should call Delete function', () => {})
})