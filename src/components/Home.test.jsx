import { getAllByTestId, getByTestId, render }  from '@testing-library/react';
import React from 'react';
import Homes from './Homes';

let container = null;

beforeEach(() =>{
    container = render(<Homes/>).container;
})

it("Should show homes" , () => {
    const homes =  getAllByTestId(container , 'homes');
    expect(homes.length).toBeGreaterThan(0)

    
})

