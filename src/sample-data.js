const sampleData = [
    {
        name: 'Data set 1',
        data: {
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
        }
    },
    {
        name: 'Data set 2',
        data: {
            _fields: ['Name', 'Age', 'Residence'],
            rows: [
                {
                    'Name': 'Maria Anders',
                    'Age': 44,
                    'Residence': 'Germany',
                },
                {
                    'Name': 'Francisco Chang',
                    'Age': 25,
                    'Residence': 'Mexico',
                },
                {
                    'Name': 'Roland Mendel',
                    'Age': 65,
                    'Residence': 'Austria',
                },
                {
                    'Name': 'Helen Bennett',
                    'Age': 32,
                    'Residence': 'UK',
                },
                {
                    'Name': 'Yoshi Tannamuri',
                    'Age': 48,
                    'Residence': 'Canada',
                },
                {
                    'Name': 'Giovanni Rovelli',
                    'Age': 54,
                    'Residence': 'Italy',
                }
            ]
        }
    },
    {
        name: "Invalid data set 1",
        data: {
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
        }
    },
    {
        name: "Invalid data set 2",
        data: function() {
            console.log("Hehe");
        }
    }
];

export default sampleData;
