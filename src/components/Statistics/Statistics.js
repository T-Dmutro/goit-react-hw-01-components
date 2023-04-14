import PropTypes from 'prop-types';
import {StatisticItems, StatisticItem,Label, Percentage} from './Statistic.styled'





// function randomColor() {
//   const r = Math.floor(Math.random() * 256); // випадкове число від 0 до 255 для червоного кольору
//   const g = Math.floor(Math.random() * 256); // випадкове число від 0 до 255 для зеленого кольору
//   const b = Math.floor(Math.random() * 256); // випадкове число від 0 до 255 для синього кольору
//   return "rgb('${r}, ${g}, ${b}')";
// }
// const backgroundColor = randomColor();
// export const   Styles = {
//   backgroundColor: backgroundColor};
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
