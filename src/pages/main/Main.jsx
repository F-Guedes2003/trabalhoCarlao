import React from 'react';
//importing styles
import Style from './Main.module.css';

function Main() {
  return (
    <section className={Style.main}>
        <div className={Style.banner}>
            <img src="/images/banner.jpg" alt="" />
        </div>

        <h2>Aba em desenvolvimento</h2>
    </section>
  )
}

export default Main