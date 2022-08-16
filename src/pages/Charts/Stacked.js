import React from 'react';
import { ChartComponent,Tooltip,SeriesDirective,Inject,Legend,Category,StackingColumnSeries } from '@syncfusion/ej2-react-charts';
import { stackedCustomSeries,stackedPrimaryXAxis,stackedPrimaryYaxis} from '../../data/dummy';


const Stacked = ({width,height}) => {
    return (
        <div>
            <ChartComponent 
                width={width}
                height={height}
            >
                <Inject service={[Legend,Category,StackingColumnSeries,Tooltip]}/>
            </ChartComponent>
        </div>
    );
};

export default Stacked;