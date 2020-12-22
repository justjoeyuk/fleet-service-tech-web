import { SwapLeftOutlined, SwapRightOutlined } from '@ant-design/icons';
import { Typography, Input, Space, DatePicker, Table, Divider, Tabs } from 'antd';

import moment from 'moment';
import { useState } from 'react';
import { ScannedByColumns, ScannedColumns } from './columns';

const { TabPane } = Tabs;
const { Title, Text } = Typography;
const { Search } = Input;
const { RangePicker } = DatePicker;

type DevicesProps = {};

const defaultFrom = moment().startOf('day');
const defaultTo = moment().endOf('day');

const scannedTab = (<span><SwapLeftOutlined /> Devices Scanned</span>)
const scannedByTab = (<span><SwapRightOutlined /> Scanned By</span>)

const scannedData = [{
    id: 213,
    scanning_device_id: 3123213,
    visible_device_id: 423245121,
    time: "2020-12-20 22:27:26.986+00",
    interface: 'BTLE',
    signal_strength: 82
},
{
    id: 243,
    scanning_device_id: 43534232,
    visible_device_id: 564543524,
    time: "2020-12-20 22:27:26.986+00",
    interface: 'WIFI',
    signal_strength: 23
},
{
    id: 594,
    scanning_device_id: 9283883,
    visible_device_id: 3912941,
    time: "2020-12-20 22:27:26.986+00",
    interface: 'BTLE',
    signal_strength: 90
},
{
    id: 213,
    scanning_device_id: 2354131,
    visible_device_id: 1231234,
    time: "2020-12-20 22:27:26.986+00",
    interface: 'WIFI',
    signal_strength: 23
}];


const Devices = (props: DevicesProps) => {
    const [rangeFrom, setRangeFrom] = useState(defaultFrom);
    const [rangeTo, setRangeTo] = useState(defaultTo);

    const updateRange = (dates: [moment.Moment, moment.Moment]) => { 
        let from = defaultFrom;
        let to = defaultTo;

        if (dates) {
            from = dates[0];
            to = dates[1];
        }

        setRangeFrom(from);
        setRangeTo(to);
    }

    const handleTableChange = () => {
        console.log("Table Change")
    }

    return (
        <>
            <Title level={2}>Device Statistics</Title>

            <Space style={{justifyContent: 'center'}} align="center" wrap>
                <RangePicker showTime minuteStep={15} format="DD/MM/YY HH:mm" showSecond={false} value={[rangeFrom, rangeTo]} onChange={(dates) => updateRange(dates as any)} />
                <Search placeholder="Device ID" onSearch={(query) => console.log(query)} enterButton />
            </Space>
            
            <Divider />

            <Title style={{textAlign: 'center'}} level={4}>Avg Signal Strength: <Text type="secondary">59</Text></Title>

            <Divider />

            <Tabs defaultActiveKey="scanned">
                <TabPane tab={scannedTab} key="scanned">
                    <Table
                        scroll={{x: 480}}
                        columns={ScannedByColumns}
                        rowKey={(record:any) => record.id}
                        dataSource={scannedData}
                        loading={false}
                        onChange={() => handleTableChange()}
                    />
                </TabPane>

                <TabPane tab={scannedByTab} key="scanned-by">
                    <Table
                        scroll={{x: 480}}
                        columns={ScannedColumns}
                        rowKey={(record:any) => record.id}
                        dataSource={scannedData}
                        loading={false}
                        onChange={() => handleTableChange()}
                    />
                </TabPane>
            </Tabs>
        </>
    )
};

export default Devices;