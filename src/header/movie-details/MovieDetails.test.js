import React from "react";
import {shallow} from "enzyme";
import MovieDetails from "./MovieDetails";

describe('', () => {
    const closeView = jest.fn();
    let data = {};

    beforeEach(()=>{
        data = {
            poster_path:'https://images-na.ssl-images-amazon.com/images/I/51KkPjIAcoL._SX300_.jpg',
            title:'test',
            genres:['test genre'],
            release_date:'2021',
            runtime:'100',
            overview:'some text'
        }
    })

    describe('test snapshot', () => {
        it ('should match MovieDetails snapshot', () => {
            const component = shallow(<MovieDetails data={data} closeView={closeView}/>);
            expect(component).toMatchSnapshot();
        } )
    })

})