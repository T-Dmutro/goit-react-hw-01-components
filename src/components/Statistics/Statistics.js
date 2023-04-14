import PropTypes from 'prop-types';
import {StatisticItems, StatisticItem,Label, Percentage} from './Statistic.styled'

export const Statistic = ({items}) => {
  return (
    
    <StatisticItems>
      {items?.map((item) =>(
        <StatisticItem  key={item.id}>
          <Label>{item.label}</Label>
          <Percentage>{item.percentage}</Percentage>
        </StatisticItem>
      ))}
    </StatisticItems>
  );
};
Statistic.propTypes={
    id:PropTypes.number,
    label:PropTypes.string,
    percentage:PropTypes.string
}
