import { TitleMain } from './Statistic.styled';

export const Title = ({ title }) => {
  return title && <TitleMain>{title}</TitleMain>;
};