import { Typography, Input, Space, DatePicker } from 'antd';
import moment from 'moment';
import { useState } from 'react';

const { Title } = Typography;
const { Search } = Input;
const { RangePicker } = DatePicker;

type DevicesProps = {};

const defaultFrom = moment().startOf('day');
const defaultTo = moment().endOf('day');

const Devices = (props: DevicesProps) => {
    const [rangeFrom, setRangeFrom] = useState(defaultFrom);
    const [rangeTo, setRangeTo] = useState(defaultTo);

    const updateRange = (dates: [moment.Moment, moment.Moment]) => { 
        let from = defaultFrom;
        let to = defaultTo;

        if (dates) {
            from = dates[0].startOf('day');
            to = dates[1].endOf('day');
        }

        setRangeFrom(from);
        setRangeTo(to);
    }

    return (
        <>
            <Title level={2}>Device Management</Title>

            <Space>
                <RangePicker value={[rangeFrom, rangeTo]} onChange={(dates) => updateRange(dates as any)} />
                <Search placeholder="Device ID" onSearch={(query) => console.log(query)} enterButton />
            </Space>
        </>
    )
};

export default Devices;