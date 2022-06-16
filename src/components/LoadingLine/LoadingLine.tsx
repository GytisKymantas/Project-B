import React from 'react';
import styled, { keyframes } from 'styled-components/macro';
import { theme } from '../../styles/theme';

export const LoadingLine: React.FC = () => {
  return (
    <>
      <LoadingBar>
        <Bar>
          <Progress></Progress>
        </Bar>
      </LoadingBar>
    </>
  );
};

const animate = keyframes`
0% { width: 0; }
20% {
    width: 10%;
}
25% {
    width: 24%;
}
43% {
    width: 41%;
}
56% {
    width: 50%;
}
66% {
    width: 52%;
}
71% {
    width: 60%;
}
75% {
    width: 76%;
}
94% {
    width: 86%;
}
100% {
    width: 100%;
}
`;

const LoadingBar = styled.div`
  position: fixed;
  border-radius: 3.75rem;
  overflow: hidden;
  width: 100%;
`;

const Bar = styled.span`
  display: block;
  background: rgba(0, 0, 0, 0.075);
`;

const Progress = styled.span`
  display: block;
  animation: ${animate} 0.5s ease infinite;
  background: green;
  color: white;
  padding: 0.3125rem;
  width: 0;
`;
