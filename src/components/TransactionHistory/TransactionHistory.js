import PropTypes from 'prop-types';
import {TransactionTable, TableHeader,TableComponents, TableBody,TableBodyComponents}from './TransactionHistory.styled'
export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <thead>
        <TableHeader>
          <TableComponents>Type</TableComponents>
          <TableComponents>Amount</TableComponents>
          <TableComponents>Currency</TableComponents>
        </TableHeader>
      </thead>
      <tbody >
        {items?.map(item => (
          <TableBody key={item.id}>
            <TableBodyComponents>{item.type}</TableBodyComponents>
            <TableBodyComponents>{item.amount}</TableBodyComponents>
            <TableBodyComponents>{item.currency}</TableBodyComponents>
          </TableBody>
        ))}
      </tbody>
    </TransactionTable>
  );
};
TransactionHistory.propTypes={
    type:PropTypes.string,
    amount:PropTypes.string,
    currency:PropTypes.string
}