import { getByTestId, render }  from '@testing-library/react';
import React from 'react';
import Header from './Header';

let container = null;

beforeEach(() =>{
    container = render(<Header/>).container;
})

it("Should show logo" , () => {
    expect(getByTestId(container , "logo")).toBeTruthy();
})


it("Should show a search bar" , () => {
    expect(getByTestId(container , "search")).toBeTruthy();
})


it("Should show links" , () => {
    expect(getByTestId(container , "nav-link")).toBeTruthy();
})

it("Should show filers" , () => {
    expect(getByTestId(container , "home-type")).toBeTruthy();
    expect(getByTestId(container , "dates")).toBeTruthy();
    expect(getByTestId(container , "guests")).toBeTruthy();
    expect(getByTestId(container , "quests")).toBeTruthy();
    expect(getByTestId(container , "price")).toBeTruthy();
    expect(getByTestId(container , "rooms")).toBeTruthy();
    expect(getByTestId(container , "amities")).toBeTruthy();
})
