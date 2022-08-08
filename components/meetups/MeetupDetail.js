import React from "react";
import styled from "styled-components";

const MeetupDetail = (props) => {
  return (
    <Wrapper>
      <section className="detail">
        <img src={props.image} alt={props.title} />

        <h1>{props.title}</h1>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .detail {
    text-align: center;
    img {
      width: 100%;
    }
  }
`;

export default MeetupDetail;
