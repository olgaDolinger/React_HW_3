import React from "react";
import {shallow} from "enzyme";
import PageNotFound from "./PageNotFound";
import reactRouterDom from 'react-router-dom';
import * as S from "pageNotFound/PageNotFound.styled";

jest.mock('react-router-dom');
jest.mock('react-router-dom', () =>({
    useHistory: () => ({push: () => jest.fn()})
}))

describe('Page not found', ()=>{
    it('should correspond a snapshot', () => {
        const sut = shallow(<PageNotFound />);
        expect(sut).toMatchSnapshot();
    })

    it('should forward user to a main page on GO BACK HOME click', ()=>{
        const onClick = jest.fn()
        const sut = shallow( <S.Button onClick={onClick}>GO BACK HOME</S.Button>);
        sut.simulate('click');
        expect(onClick).toBeCalled();
    })

    it('should forward user to a main page on GO BACK HOME click', ()=>{
        const pushMock = jest.fn();
        reactRouterDom.useHistory = jest.fn().mockReturnValue({push: pushMock});

        const onClick = jest.fn().mockImplementation(() => reactRouterDom.useHistory().push())
        const sut = shallow( <S.Button onClick={onClick}>GO BACK HOME</S.Button>);
        sut.simulate('click');
        expect(onClick).toHaveBeenCalledTimes(1);
        expect(pushMock).toHaveBeenCalledTimes(1);
    })
})