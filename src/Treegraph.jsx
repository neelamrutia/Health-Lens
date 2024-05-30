import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import treemap from 'highcharts/modules/treemap';
import treegraph from 'highcharts/modules/treegraph';
import exporting from 'highcharts/modules/exporting';
import accessibility from 'highcharts/modules/accessibility';

treemap(Highcharts);
treegraph(Highcharts);
exporting(Highcharts);
accessibility(Highcharts);
const data = [
    {
        color:'gray',
        id: '0.0',
        parent: '',
        name: 'Calories'
    },
    {
        id: '1.3',
        parent: '0.0',
        name: 'Carbohydrates',
        color:'#2cb4fc'
    },
    {
        color:'#544cc4',
        id: '1.1',
        parent: '0.0',
        name: 'Protein'
    },
    {
        id: '1.2',
        parent: '0.0',
        name: 'Alcohol'
    },
    {
        color:'#05e273',
        id: '1.4',
        parent: '0.0',
        name: 'Fats'
    },
   

];


const TreegraphComponent = () => {
    const options = {
        credits:{
            enabled:false
        },  
        title: {
            text: 'Calories Description',

            style: {
                color: '#F2613F',
                fontSize: '24px',
                fontFamily: 'Poppins',
                position:'relative',
                marginLeft:'100vw',
                marginTop:'10vh'
            }
        },
        series: [
            {
                type: 'treegraph',
                data,
                tooltip: {
                    pointFormat: '{point.name}',
                },
                marker: {
                    symbol: 'rect',
                    width: '25%',
                },
                borderRadius: 10,
                dataLabels: {
                    pointFormat: '{point.name}',
                    style: {
                        fontFamily: 'Poppins', // Font family for data labels
                        fontSize: '12px', // Font size for data labels
                        color: 'white', // Color for data labels
                        textOutline: 'none',    

                    },
                },
                levels: [
                    {
                        level: 1,
                        levelIsConstant: false,
                    },
                    {
                        level: 2,
                        colorByPoint: true,

                    },
                    {
                        level: 3,
                        colorVariation: {
                            key: 'brightness',
                            to: -0.5,
                        },
                    },
                    {
                        level: 4,
                        colorVariation: {
                            key: 'brightness',
                            to: 0.5,
                        },
                    },
                ],
            },
        ],
    };

    return (
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
                containerProps={{ style: { maxWidth: '800px', minWidth: '360px', margin: '0 0px 0px 300px', height: '400px',marginTop:'10vh',marginBottom:'10vw' } }}
            />

            <div style={{width:'60vw',marginLeft:'20vw'}}>
                <div style={{marginBottom:'4vh'}}>
               
            <span style={{backgroundColor:"#04e474",color:'white',padding:'3px',borderRadius:'10px',marginRight:'7px'}}>Fats Calories:</span>
            
            Dietary fats provide 9 calories per gram and are crucial for various bodily functions, including hormone production and cell structure. Different types of fats exist, including saturated, unsaturated, and trans fats. Healthy sources of fats include avocados, nuts, seeds, and olive oil, which can support heart health and overall well-being when consumed in moderation.</div>


            
                <div style={{marginBottom:'4vh'}}>
               
            <span style={{backgroundColor:"#fc6e37",color:'white',padding:'3px',borderRadius:'10px',marginRight:'7px'}}>Alcohol Calories:</span>
            
            Alcohol provides 7 calories per gram, making it more calorie-dense than carbohydrates and proteins, but less dense than fat. These calories lack essential nutrients and can contribute to weight gain if consumed excessively. Excessive alcohol consumption can also have detrimental effects on health, including liver damage and an increased risk of certain diseases.
            </div>
            

            <div style={{marginBottom:'4vh'}}>
               
               <span style={{backgroundColor:"#554dc4",color:'white',padding:'3px',borderRadius:'10px',marginRight:'7px'}}>Proteins Calories:</span>
               
               Proteins are essential for building and repairing tissues, supporting immune function, and synthesizing enzymes and hormones. They provide 4 calories per gram and are made up of amino acids, some of which are considered essential. Good sources of protein include meat, poultry, fish, eggs, dairy products, legumes, nuts, and seeds, which are vital for muscle growth and maintenance, satiety, and overall health.</div>

               <div style={{marginBottom:'4vh'}}>
               
               <span style={{backgroundColor:"#2db4fc",color:'white',padding:'3px',borderRadius:'10px',marginRight:'7px'}}>Carbohydrates Calories:</span>
               
               Carbohydrates are the body's primary source of energy, providing 4 calories per gram. They include sugars, starches, and fiber, found in fruits, vegetables, grains, legumes, and dairy products. Carbohydrates are broken down into glucose, which fuels the body's cells. Adequate intake of carbohydrates is essential for optimal energy levels and overall health. </div>



           </div>
        </div>
    );
};

export default TreegraphComponent;