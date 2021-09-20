import React, { useState } from 'react';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Accordion = ({ children }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div>
      <div
        className='detail-line exp-div'
        style={{ display: expanded ? 'block' : 'none' }}
      >
        {children}
      </div>
      <div className='exp-arrow-div' onClick={toggleExpansion}>
        <FontAwesomeIcon icon={expanded ? faChevronUp : faChevronDown} />
      </div>
    </div>
  );
};
