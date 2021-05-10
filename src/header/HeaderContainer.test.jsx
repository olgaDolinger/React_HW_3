import React from "react";
import {MemoryRouter} from "react-router";
import App from "../App";
import MainPage from "main-page/MainPage";
import { Categories } from '../utils/Categories';

// jest.mock('../utils/Categories');
// jest.mock('../components/popups/addFilmPopup/addFilmPopup.jsx');

jest.mock("../components/popups/addFilmPopup/addFilmPopupContainer");
jest.mock("../components/popups/deleteFilmPopup/deleteFilmPopupContainer");
jest.mock("../components/popups/editFilmPopup/editFilmPopupContainer");
jest.mock("../components/popups/components/formDatePicker/formDatePicker");
jest.mock("../components/popups/components/helper");
// jest.mock("../components/popups/components/formDatePicker/react-datepicker");

describe('HeaderContainer', ()=> {
    it('should show MovieDetailsContainer',() => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/']}>
                <App/>
            </MemoryRouter>
        )
        expect(wrapper.find(MainPage)).toHaveLength(1);
    })

})