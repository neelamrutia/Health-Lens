// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/bump
import { ResponsiveAreaBump } from '@nivo/bump'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const data22 = [
    {
        "id": "JavaScript",
        "data": [
            {
                "x": 2000,
                "y": 24
            },
            {
                "x": 2001,
                "y": 21
            },
            {
                "x": 2002,
                "y": 28
            },
            {
                "x": 2003,
                "y": 25
            },
            {
                "x": 2004,
                "y": 20
            },
            {
                "x": 2005,
                "y": 14
            }
        ]
    },
    {
        "id": "ReasonML",
        "data": [
            {
                "x": 2000,
                "y": 15
            },
            {
                "x": 2001,
                "y": 18
            },
            {
                "x": 2002,
                "y": 14
            },
            {
                "x": 2003,
                "y": 29
            },
            {
                "x": 2004,
                "y": 20
            },
            {
                "x": 2005,
                "y": 29
            }
        ]
    },
    {
        "id": "TypeScript",
        "data": [
            {
                "x": 2000,
                "y": 28
            },
            {
                "x": 2001,
                "y": 23
            },
            {
                "x": 2002,
                "y": 19
            },
            {
                "x": 2003,
                "y": 11
            },
            {
                "x": 2004,
                "y": 28
            },
            {
                "x": 2005,
                "y": 20
            }
        ]
    },
    {
        "id": "Elm",
        "data": [
            {
                "x": 2000,
                "y": 17
            },
            {
                "x": 2001,
                "y": 27
            },
            {
                "x": 2002,
                "y": 24
            },
            {
                "x": 2003,
                "y": 14
            },
            {
                "x": 2004,
                "y": 10
            },
            {
                "x": 2005,
                "y": 30
            }
        ]
    },
    {
        "id": "CoffeeScript",
        "data": [
            {
                "x": 2000,
                "y": 11
            },
            {
                "x": 2001,
                "y": 21
            },
            {
                "x": 2002,
                "y": 19
            },
            {
                "x": 2003,
                "y": 23
            },
            {
                "x": 2004,
                "y": 14
            },
            {
                "x": 2005,
                "y": 14
            }
        ]
    }
];
const MyResponsiveAreaBump = ({ data }) => (

    <ResponsiveAreaBump
        data={data}
        margin={{ top: 40, right: 200, bottom: 40, left: 200 }}
        spacing={8}
        blendMode="multiply"
        defs={[

            {
                id: 'Friend-1',
                type: 'patternLines',
                background: 'white',
                color: '#67b7dc',
                rotation: -45,
                lineWidth: 10,
                spacing: 10
            }, {
                id: 'Yourself1',
                type: 'patternLines',
                background: 'white',
                color: '#dc67ce',
                rotation: -45,
                lineWidth: 10,
                spacing: 10
            }, {
                id: 'Friend-2',
                type: 'patternLines',
                background: 'white',
                color: '#6794dc',
                rotation: -45,
                lineWidth: 10,
                spacing: 10
            }, {
                id: 'Friend-3',
                type: 'patternLines',
                background: 'white',
                color: '#6771dc',
                rotation: -45,
                lineWidth: 10,
                spacing: 10
            }, {
                id: 'Friend-4',
                type: 'patternLines',
                background: 'white',
                color: '#8067dc',
                rotation: -45,
                lineWidth: 10,
                spacing: 10
            }, {
                id: 'Friend-5',
                type: 'patternLines',
                background: 'white',
                color: '#8252b0',
                rotation: -45,
                lineWidth: 10,
                spacing: 10
            },
            {

                id: 'Friend-6',
                type: 'patternLines',
                background: 'white',
                color: '#c767dc',
                rotation: -45,
                lineWidth: 10,
                spacing: 10
            }

        ]}
        fill={
            [
                {
                    match: {
                        id: 'Yourself',

                    },
                    id: 'Yourself1'
                },
                {
                    match: {
                        id: 'Friend 1',
                    },
                    id: 'Friend-1'
                }, {
                    match: {
                        id: 'Friend 2',
                    },
                    id: 'Friend-2'
                }, {
                    match: {
                        id: 'Friend 3',
                    },
                    id: 'Friend-3'
                }, {
                    match: {
                        id: 'Friend 4',
                    },
                    id: 'Friend-4'
                }, {
                    match: {
                        id: 'Friend 5',
                    },
                    id: 'Friend-5'
                }, {
                    match: {
                        id: 'Friend 6',
                    },
                    id: 'Friend-6'
                },











            ]}
        startLabel="id"
        endLabel="id"
        axisTop={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Time',
            legendPosition: 'middle',
            legendOffset: -36,
            truncateTickAt: 0,
        }}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: 32,
            truncateTickAt: 0,

        }}
    />
)

export default MyResponsiveAreaBump