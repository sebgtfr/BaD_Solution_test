import React from 'react';

import { message, Table } from 'antd';

import TransactionAPI from '../../Helpers/TransactionAPI';

const TransactionReducer = () =>
{
    const [state, dispatch] = React.useReducer((prevState, action) =>
    {
        switch (action.type)
        {
            case 'SET_TRANSACTIONS':
                return {
                    ...prevState,
                    transactions: action.transactions
                }
            default:
                return prevState;
        }
    },
    {
        transactions: []
    });

    const transaction = React.useMemo(() =>
    ({

        ...state,

        fetchTransaction: () =>
        {
            TransactionAPI.get('/transactions')
            .then((transactions) =>
            {
                console.log(transactions);
            })
            .catch((error) =>
            {
                message.error("An error occurs during the fetching of transactions.");
                console.log(error.message)
            })
            dispatch({ type: 'FETCH_TRANSACTIONS'})
        }

    }), [state]);

    return transaction;
};

const columns = [
    {
        title: 'created_at',
        dataIndex: 'created_at',
    },
    {
        title: 'counterparty_name',
        dataIndex: 'counterparty_name',
    },
    {
        title: 'operation_type',
        dataIndex: 'operation_type',
    },
    {
        title: 'amount',
        dataIndex: 'amount',
    },
    {
        title: 'attachements',
        dataIndex: 'attachements'
    }
];

const Transaction = () =>
{
    const transaction = TransactionReducer();

    React.useEffect(React.useCallback(() =>
        {
            transaction.fetchTransaction();
        }, [transaction]),
    []);

    return (
        <Table
            columns={columns}
            showHeader={false}
        />
    );
}

export default Transaction;