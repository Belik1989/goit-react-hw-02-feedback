import React from 'react';
import { NotificationSpan } from './Statistics.styled';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return <NotificationSpan>{message}</NotificationSpan>;
};

Notification.propTypes = {
  message: PropTypes.string,
};
