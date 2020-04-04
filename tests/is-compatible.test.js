import CBM from '../src';

const TEST_DEFINITION = [
    [
        'Valid data',  // test description
        {  // mockData
            _fields: ['fielda', 'fieldb', 'fieldc'],
            rows: [
                {
                    fielda: 'Hello world',
                    fieldb: 1,
                    fieldc: true
                },
                {
                    fielda: 'Test',
                    fieldb: 2,
                    fieldc: false
                }
            ]
        },
        2  // expected compatibility level
    ],
    [
        'Minimal working set',
        {
            _fields: [],
            rows: []
        },
        2
    ],
    [
        'Missing _field property',
        {
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
        },
        0
    ],
    [
        'Malformed _fields and rows properties',
        {
            _fields: () => console.log(),
            rows: 42
        },
        0
    ],
    [
        'Malformed _fields properties',
        {
            _fields: [3.14, true, () => console.log('Hehe')],
            rows: []
        },
        0
    ],
    [
        'Missing rows property',
        {
            _fields: ['fielda', 'fieldb']
        },
        0
    ],
    [
        'Empty array in rows',
        {
            _fields: ['fielda', 'fieldb'],
            rows: []
        },
        2
    ],
    [
        'Difference in _fields and row properties',
        {
            _fields: ['fielda', 'fieldb'],
            rows: [
                {
                    fieldb: 1
                },
                {
                    fielda: 'Test'
                }
            ],
        },
        2
    ]
];

describe('Is Compatible Function', () => {
    test.each(TEST_DEFINITION)('%s', (_desc, mockData, expectedLevel) =>
        expect(CBM.isCompatible(mockData)).toBe(expectedLevel));
});
