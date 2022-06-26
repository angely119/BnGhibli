import React, { useRef } from "react";
import { useEffect } from "react";
import styled from "styled-components";

const StyledMap = styled.div`
  height: 90vh;
  width: 100%;
`;

const Map = ({ center, zoom, options }) => {
  const ref = useRef();
  useEffect(() => {
    new window.google.maps.Map(ref.current, {
      center,
      zoom,
      options
    });
  });

  return (
    <StyledMap ref={ref}/>
  );
};

export default Map;
