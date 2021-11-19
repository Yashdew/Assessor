import React from 'react';

export const Loader = () => {
  return (
    <section className='hero is-fullheight has-bg-blue'>
      <div className='hero-body '>
        <div className='container is-flex is-justify-content-center'>
          <div className='loading' />
        </div>
      </div>
    </section>
  );
};
