/** @format */

import React, { Component } from 'react';
import { Menu } from 'antd';
import { MenuInfo } from 'rc-menu/lib/interface';
import {
	BarChartOutlined,
	UserOutlined,
	WindowsOutlined,
	SettingOutlined,
	PictureOutlined,
} from '@ant-design/icons';

interface Props {
	onChooseSubmenu: (e: MenuInfo) => void;
}

interface State {
	selection: string;
}

export default class SiderMenu extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			selection: '1',
		};
	}

	handleClick = (e: MenuInfo) => {
		const { onChooseSubmenu } = this.props;
		onChooseSubmenu(e);
		this.setState({ selection: e.key.toString() });
	};

	render() {
		let { selection } = this.state;
		return (
			<Menu
				theme="dark"
				mode="inline"
				defaultSelectedKeys={[selection.toString()]}>
				<Menu.Item key="1" icon={<UserOutlined />} onClick={this.handleClick}>
					Processor Boost
				</Menu.Item>
				<Menu.Item
					key="2"
					icon={<PictureOutlined />}
					onClick={this.handleClick}>
					Discrete GPU
				</Menu.Item>
				<Menu.Item
					key="3"
					icon={<WindowsOutlined />}
					onClick={this.handleClick}>
					Windows Power Plan
				</Menu.Item>
				<Menu.Item
					key="4"
					icon={<BarChartOutlined />}
					onClick={this.handleClick}>
					Auto Power Switching
				</Menu.Item>
				<Menu.Item
					key="5"
					icon={<SettingOutlined />}
					onClick={this.handleClick}>
					Configuration
				</Menu.Item>
			</Menu>
		);
	}
}
