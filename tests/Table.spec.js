import React from "react";
import { create } from "react-test-renderer";
import Table from "../component/src";

describe("Table CBM", () => {
    test("Invalid data", () => {
        console.error = jest.fn();
        const cbm = create(<Table />);
        expect(cbm).toMatchSnapshot();
        expect(console.error).toBeCalled();
    });

    test('Valid data', () => {
        const mockData = {
            _fields: ['fielda', 'fieldb'],
            rows: [
                {
                    fielda: 'Hello world',
                    fieldb: 1
                },
                {
                    fielda: 'Test',
                    fieldb: 2
                }
            ]
        };
        const cbm = create(<Table data={mockData} onRefresh={() => {}} onRegisterAction={() => {}}/>)
        expect(cbm).toMatchSnapshot();
    })
});
