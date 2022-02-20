import React, { FC } from 'react';

// Components
import { getLayout } from '~widgets/MainLayout';
import { Container } from '~widgets/Container';

const Leagues: FC = () => {
  return getLayout(
    <Container>
      Leagues
    </Container>
   );
}

export default Leagues;