import React from "react";

const Container = (props) => {
  return (
      <section className='max-w-screen-xl m-0 m-auto'>
        {props.children}
      </section>
  );
};

export default Container;
