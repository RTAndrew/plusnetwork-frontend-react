import { Button, Typography } from 'antd';
import { Container } from 'components';
import { useStore } from 'hooks';
import { observer } from 'mobx-react';

import styles from './styles.module.scss';

const SearchResult = () => {
  const { SearchStore } = useStore();

  return (
    <Container className={styles.root}>
      <Typography.Title level={5} type="secondary">
        {SearchStore.getSearchResults?.length}
      </Typography.Title>
      <Button type="default" size="large">
        Filter
      </Button>
    </Container>
  );
};

export default observer(SearchResult);
