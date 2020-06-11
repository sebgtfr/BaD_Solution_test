import React from 'react';

import { Layout, List, Button } from 'antd';

import Styles from './styles.module.scss';

const { Sider } = Layout;

const menu =
[
    [
        {
            title: "Overview"
        },
        {
            title: "Transaction"
        }
    ],
    [
        {
            title: "Transfert"
        },
        {
            title: "Invoices"
        }
    ],
    [
        {
            title: "Manage cards"
        },
        {
            title: "Manage Accounts"
        }
    ],
    [
        {
            title: "Team"
        },
        {
            title: "Integrations"
        },
        {
            title: "Settings"
        }
    ]
];

const LeftSider = () =>
(
    <Sider className={Styles.container} width={260}>
        <h1 className={Styles.title}>
           Finpal
        </h1>
        <List
            itemLayout="vertical"
            dataSource={menu}
            renderItem={items =>
            (
                <List.Item className={Styles.menuItem}>
                    {items.map((item) =>
                    (
                        <p className={Styles.menuItemElem}>{item.title}</p>
                    ))}
                </List.Item>
            )}
        />
        <Button
            className={Styles.button}
            size="large"
            ghost
        >
            Upgrade Accounts
        </Button>
    </Sider>
);


export default LeftSider;