import { Reviews } from './Statistics.styled.js';

export const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <>
      <Reviews>Good:{good}</Reviews>
      <Reviews>Neutral:{neutral}</Reviews>
      <Reviews>Bad:{bad}</Reviews>
      <Reviews>Total:{total}</Reviews>
      <Reviews>Positive feedback:{positiveFeedback}%</Reviews>
    </>
  );
};
