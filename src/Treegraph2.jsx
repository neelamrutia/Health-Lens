import React from 'react';
import Highcharts, { color } from 'highcharts';
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
        id: '0.0',
        parent: '',
        name: 'Sleep',
        color:'gray'
    },
    {
        id: '1.3',
        parent: '0.0',
        name: 'REM',
        color:'#79dae9'
    },
    {
        id: '1.1',
        parent: '0.0',
        name: 'Deep Sleep',
        color:'#d9c795'
    },
    {
        id: '1.2',
        parent: '0.0',
        name: 'Light',
        color:'#F2613F'
        
    },

   

];


const TreegraphComponent2 = () => {
    const options = {
        title: {
            text: 'Sleep',
            style: {
                color: '#F2613F',
                fontSize: '2vw',
                fontWeight: 'bold',
                fontFamily: 'Poppins',
            
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
                        fontFamily: 'Poppins, sans-serif', // Font family for data labels
                        fontSize: '12px', // Font size for data labels
                        color: 'white', // Color for data labels
                        textOutline: 'none',    

                    },
                },
                levels: [
                    {
                        color:'violet',
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
                containerProps={{ style: { maxWidth: '800px', minWidth: '360px', margin: '0 auto', height: '400px' } }}
            />
            <div style={{width:'60vw',marginTop:'5vh',marginLeft:'20vw',fontFamily:'Poppins'}}>
                <div style={{marginBottom:'4vh'}}>
               
            <span style={{backgroundColor:"#f4643c",color:'white',padding:'3px',borderRadius:'10px',marginRight:'7px'}}>Light Sleep:</span>
            
            Light sleep is a stage of sleep that occurs between wakefulness and deeper sleep stages. It is characterized by slower brain waves than REM and deep sleep but faster than wakefulness. Light sleep serves as a transition between different sleep stages and is important for maintaining overall sleep architecture. During light sleep, the body may still be responsive to external stimuli, and individuals may be easily awakened. While less restorative than deep sleep, light sleep still plays a vital role in the sleep cycle and overall sleep quality.</div>

            <div style={{marginBottom:'4vh'}}>
               
               <span style={{backgroundColor:"#dcc495",color:'white',padding:'3px',borderRadius:'10px',marginRight:'7px'}}>Deep Sleep:</span>
               
               Deep sleep, also known as slow-wave sleep (SWS), is a stage of sleep characterized by slow brain waves and minimal muscle activity. It is the most restorative stage of sleep, crucial for physical recovery, immune function, and memory consolidation. During deep sleep, the body repairs tissues, releases growth hormones, and strengthens the immune system. Adequate deep sleep is essential for overall health and well-being.</div>
               <div style={{marginBottom:'4vh'}}>
               
               <span style={{backgroundColor:"#7cdcec",color:'white',padding:'3px',borderRadius:'10px',marginRight:'7px'}}>REM Sleep:</span>
               
               REM (Rapid Eye Movement) sleep is a stage of sleep characterized by rapid eye movements, vivid dreams, and heightened brain activity. It is essential for cognitive function, emotional regulation, and memory consolidation, particularly for complex learning and problem-solving tasks. REM sleep is also associated with the processing of emotions and the regulation of mood. Disruptions in REM sleep can lead to cognitive impairment and emotional disturbances.</div>
      
            
              
            

            
           </div>
        </div>
    );
};

export default TreegraphComponent2;