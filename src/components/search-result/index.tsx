import { Button, Typography } from 'antd';
import { Container } from 'components';

import styles from './styles.module.scss';

const SearchResult = () => {
  return (
    <Container className={styles.root}>
      <Typography.Title level={5} type="secondary">
        12 Results
      </Typography.Title>
      <Button type="default" size="large">
        Filter
      </Button>
    </Container>
  );
};

export default SearchResult;
