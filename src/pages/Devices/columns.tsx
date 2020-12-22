import React from "react";
import Icon from "@ant-design/icons";
import moment from "moment"

import {ReactComponent as BluetoothLogo} from "../../assets/svg/bluetooth-logo.svg";
import {ReactComponent as WifiLogo} from "../../assets/svg/wifi-logo.svg";

import {ReactComponent as LowSignal} from "../../assets/svg/signal-low.svg";
import {ReactComponent as MediumSignal} from "../../assets/svg/signal-medium.svg";
import {ReactComponent as FullSignal} from "../../assets/svg/signal-high.svg";

const iconForSignalStrength = (strength: Number) => {
    const component = strength < 25 ? LowSignal : strength < 75 ? MediumSignal : FullSignal;
    return <Icon component={component} />
};

const BluetoothIcon = <Icon component={BluetoothLogo} />;
const WifiIcon = <Icon component={WifiLogo} />;

export const ScannedByColumns = [
    {
        title: 'Device Identifier',
        dataIndex: 'scanning_device_id',
        width: 140,
    },
    {
        title: 'Scanned At',
        dataIndex: 'time',
        width: 140,
        render: (datetime: string) => {
            return <span>{moment(datetime).format('DD/MM/YY HH:mm')}</span>
        },
    },
    {
        title: 'Interface',
        dataIndex: 'interface',
        render: (i: string) => {
            const icon = i === "WIFI" ? WifiIcon : BluetoothIcon;
            return <div>{icon} {i}</div>
        }
    },
    {
        title: 'Signal Strength',
        dataIndex: 'signal_strength',
        render: (strength: number) => {
            const icon = iconForSignalStrength(strength);
            return <div>{icon} {strength}</div>
        },
        width: 130,
    },
];

export const ScannedColumns = [
    {
        title: 'Device Identifier',
        dataIndex: 'visible_device_id',
        width: 140,
    },
    {
        title: 'Scanned At',
        dataIndex: 'time',
        render: (datetime: string) => {
            return <span>{moment(datetime).format('DD/MM/YY HH:mm')}</span>
        },
        width: 140,
    },
    {
        title: 'Interface',
        dataIndex: 'interface',
        render: (i: string) => {
            const icon = i === "WIFI" ? WifiIcon : BluetoothIcon;
            return <div>{icon} {i}</div>;
        }
    },
    {
        title: 'Signal Strength',
        dataIndex: 'signal_strength',
        render: (strength: number) => {
            const icon = iconForSignalStrength(strength);
            return <div>{icon} {strength}</div>
        },
        width: 130,
    },
];