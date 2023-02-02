import React from 'react';
import PropTypes from 'prop-types';
import { Title } from './Section.styled';
import { GiCoffeeBeans } from 'react-icons/gi';

export const Section = ({ title, children }) => {
  return (
    <section>
      <Title>
        {title} <GiCoffeeBeans />
      </Title>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.objectOf(PropTypes.shape).isRequired,
};
