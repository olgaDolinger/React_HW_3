import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import {shallow} from "enzyme";

describe('Error Boundary', () => {
    it('should match snapshot', () => {
        const sut = shallow(<ErrorBoundary/>);
        expect(sut).toMatchSnapshot();
    })

    it('should match snapshot', () => {
        const sut = shallow(<ErrorBoundary>
            <div>
                some text
            </div>
        </ErrorBoundary>);
        expect(sut).toMatchSnapshot();
    })
})