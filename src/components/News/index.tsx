import React from 'react';

import { Container } from './style';

interface Props {
  description: string;
  title: string;
}

const News: React.FC<Props> = ({
  description, title
}) => {
  return(
      <Container>
          <span>{description}</span>
          <strong>{title}</strong>
      </Container>
  );
}

export default News;