import React from "react";
import renderer from 'react-test-renderer'

describe('Footer', () => {
    let component;

    beforeEach(() => {
        component = renderer.create(
            <div>
                <div>
                    <b>netflix</b>roulette
                </div>
            </div>
        );

    })
    describe('test snapshot', () => {
        it('Should match snapshot', () => {
            const tree = component.toJSON();
            expect(tree).toMatchSnapshot()
        })
    })
})