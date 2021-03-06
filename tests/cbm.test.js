import React from 'react';
import { create } from "react-test-renderer";

import CBM from "../src";

test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
});

describe("CBM specification tests", () => {
    it("should render without any complications", () => {
        console.error = jest.fn();
        const mockData = {
            _fields: ['field-a', 'field-b'],
            rows: [
                {
                    'field-a': 'Hello world',
                    'field-b': 1
                },
                {
                    'field-a': 'Test',
                    'field-b': 2
                }
            ]
        };
        const cbm = create(
            <CBM.component
                data={mockData}
                onRegisterAction={() => {}}
                onRefresh={() => {}}
            />
        );

        expect(cbm).toMatchSnapshot();
    });
});
