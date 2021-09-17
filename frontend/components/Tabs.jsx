import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Tabs = ({ children }) => {
  const [tabSelected, setTabSelected] = useState(0);
  return (
    <>
      <div className='tabs is-centered is-boxed'>
        <ul>
          {children.map((ele, index) => {
            return (
              <li
                key={index}
                className={tabSelected == index ? 'is-active' : ''}
                onClick={() => setTabSelected(index)}
              >
                <a>
                  <span className='icon is-small'>
                    <FontAwesomeIcon icon={ele.props.icon} />
                  </span>
                  <span>{ele.props.title}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className='mx-2 my-2'>{children[tabSelected]}</div>
    </>
  );
};

export const Panel = ({ children }) => {
  return <div>{children}</div>;
};
