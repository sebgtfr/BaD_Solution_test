import React from 'react';
import PropTypes from 'prop-types';

import { Layout as LayoutAntd } from 'antd';

import Styles from './styles.module.scss';

import LeftSider from './LeftSider';
import Header from './Header';

const { Content } = LayoutAntd;

const Layout = ({ children }) =>
(
    <LayoutAntd className={Styles.container}>
        <LeftSider />
        <LayoutAntd className={Styles.container}>
            <Header />
            <Content className={Styles.rightContainer}>
                {children}
            </Content>
        </LayoutAntd>
    </LayoutAntd>
);

Layout.propTypes =
{
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default Layout;