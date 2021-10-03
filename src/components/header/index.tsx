import { Avatar, Typography } from 'antd';
import { Container } from 'components';
import { config } from 'config';

import { profileImage } from '../../constants';
import SearchBar from './components/search-bar';
import styles from './header.module.scss';

const Header = () => {
  return (
    <div className={styles.root}>
      <Container className={styles.container}>
        <div className={styles.company}>
          <Typography.Title level={4} style={{ marginBottom: 0 }}>
            {config.CompanyName}
          </Typography.Title>
          <SearchBar className={styles.searchInput} />
        </div>
        <div className={styles.user}>
          <Avatar shape="circle" src={profileImage} />
        </div>
      </Container>
    </div>
  );
};

export default Header;
