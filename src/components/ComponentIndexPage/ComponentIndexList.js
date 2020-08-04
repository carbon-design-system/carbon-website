import { Row, Column } from 'carbon-components-react';
import PropTypes from 'prop-types';
import React from 'react';

function ComponentIndexList({ items }) {
  return (
    <section>
      {items.map(({ name, description, maintainer }) => {
        const key = `${name}:${maintainer}`;
        return (
          <Row key={key}>
            <Column
              as="article"
              lg={8}
              style={{
                backgroundColor: 'white',
                padding: '1rem',
                borderBottom: '1px solid #DCDCDC',
              }}>
              <header>{name}</header>
              {description ? <p>{description}</p> : null}
              <footer>{maintainer}</footer>
            </Column>
          </Row>
        );
      })}
    </section>
  );
}

ComponentIndexList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      maintainer: PropTypes.string.isRequired,
      description: PropTypes.string,
    })
  ),
};

export default ComponentIndexList;
