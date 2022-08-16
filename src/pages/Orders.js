import React from 'react';
import { GridComponent,ColumnsDirective,CoumDirective,Inject,Filter,Page,ExcelExport,PdfExport,Edit } from '@syncfusion/ej2-react-grids';

import { ordersData,contextMenuItems,ordersGrid } from '../data/dummy';
import { Header } from '../components';
import { Category } from '@syncfusion/ej2-react-charts';

const Orders = () => {
    return (
        <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
            <Header category="page" title="orders"/>
        </div>
    );
};

export default Orders;