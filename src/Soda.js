import React, { Component } from "react";
import Message from "./Message";
import { Link } from "react-router-dom";
import sodaImg from "./Soda.png";
import "./Soda.css";

class Soda extends Component {
  render() {
    return (
      <div className='Soda'>
        <img src={sodaImg} alt='coca cola can' />

        <img src={sodaImg} alt='coca cola can' />
        <Link to='/'>Go back</Link>
      </div>
    );
  }
}

export default Soda;
