import React from 'react';
import { StatisticsList } from '../Statistics/Statistics.styled';
import { BiHappyAlt } from 'react-icons/bi';
import { MdSentimentNeutral } from 'react-icons/md';
import { BiSad } from 'react-icons/bi';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticsList>
      <li>
        <BiHappyAlt />:<span>{good}</span>
      </li>
      <li>
        <MdSentimentNeutral />:<span>{neutral}</span>
      </li>
      <li>
        <BiSad />:<span>{bad}</span>
      </li>
      <li>
        Total:<span>{total}</span>
      </li>
      <li>
        Positive feedback:<span>{positivePercentage}%</span>
      </li>
    </StatisticsList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
