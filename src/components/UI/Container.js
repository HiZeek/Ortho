import React from "react";

const Container = (props) => {
  return (
      <section className='desktop:max-w-screen-xl laptop:max-w-5xl tablet:max-w-3xl m-auto phone:max-w-[400px] tablet:p-0 phone:p-5'>
        {props.children}
      </section>
  );
};

export default Container;
