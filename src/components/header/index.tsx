import { Avatar, Input, Typography } from 'antd';
import { Container } from 'components';
import { config } from 'config';

import { profileImage } from '../../constants';
import styles from './header.module.scss';

const { Search } = Input;

const Header = () => {
  return (
    <Container className={styles.root}>
      <div className={styles.company}>
        <Typography.Title level={4} style={{ marginBottom: 0 }}>
          {config.CompanyName}
        </Typography.Title>
        <Search
          enterButton
          size="large"
          placeholder="input search text"
          className={styles.searchInput}
        />
      </div>
      <div className={styles.user}>
        <Avatar shape="circle" src={profileImage} />
      </div>
    </Container>
  );
};

export default Header;
