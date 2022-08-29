import React from "react";

const Container = (props) => {
  return (
      <section className='desktop:max-w-screen-xl laptop:max-w-5xl tablet:max-w-3xl m-auto phone:max-w-[400px]'>
        {props.children}
      </section>
  );
};

export default Container;
