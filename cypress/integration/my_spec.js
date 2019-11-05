import CBM from '../..';
import React from 'react';
import * as ReactDOM from 'react-dom';
window.ReactDOM = ReactDOM;



describe('first test', () => {
	beforeEach(() => {
		cy.viewport(600, 240)
	})
	it('renders', () => {
		cy.fixture('valid-data.json').then(validData => {
			console.log(validData);
			cy.mount(
				<CBM.component data={
					(validData)
				} />
			)
			cy.screenshot();
			cy.get('tbody').children().should('have.length', validData.rows.length)
			cy.get('tr').children('th').should('have.length', validData._fields.length)
		});
	})

	it('detects invalid data', () => {
		cy.fixture('invalid-data.json').then(invalidData => {
			cy.mount(
				<CBM.component data={
					invalidData
				} />
			)
			cy.screenshot();
			cy.contains('Invalid data type')
		});
	})
})
