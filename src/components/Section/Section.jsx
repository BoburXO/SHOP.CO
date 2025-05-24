import React from "react";
import s from "./Section.module.scss";

const Section = () => {
  return (
    <div>
      <div className="container">
        <h1 className={s.title}>NEW ARRIVALS</h1>
        <div className={s.s_main}>
          <div className="box">
            <img src="/a.png" alt="" />
            <h3>T-SHIRT WITH TAPE DETAILS</h3>
            <p>$120</p>
          </div>
          <div className="box">
            <img src="/b.png" alt="" />
            <h3>SKINNY FIT JEANS</h3>
            <p>$240</p>
          </div>
          <div className="box">
            <img src="/c.png" alt="" />
            <h3>CHECKERED SHIRT</h3>
            <p>$180</p>
          </div>
          <div className="box">
            <img src="/d.png" alt="" />
            <h3>SLEEVE STRIPED T-SHIRT</h3>
            <p>$130</p>
          </div>
        </div>

        <h1 className={s.title}>TOP SELLING</h1>
        <div className={s.a_main}>
          <div className="box">
            <img src="/e.png" alt="" />
            <h3>VERTICAL STRIPED SHIRT</h3>
            <p>$212</p>
          </div>
          <div className="box">
            <img src="/k.png" alt="" />
            <h3>COURAGE GRAPHIC T-SHIRT</h3>
            <p>$145</p>
          </div>
          <div className="box">
            <img src="/f.png" alt="" />
            <h3>LOOSE FIT BERMUDA SHORTS</h3>
            <p>$80</p>
          </div>
          <div className="box">
            <img src="/o.png" alt="" />
            <h3>FADED SKINNY JEANS</h3>

            <p>$210</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
