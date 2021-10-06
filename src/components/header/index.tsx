import { Avatar, Typography } from 'antd';
import { Container } from 'components';
import { config } from 'config';
import { useHistory } from 'react-router';

import { profileImage, Routes } from '../../constants';
import SearchBar from './components/search-bar';
import styles from './header.module.scss';

const Header = () => {
  const history = useHistory();

  const goToHome = () => history.push(Routes.Home);
  const goToSettings = () => history.push(Routes.Settings);

  return (
    <div className={styles.root}>
      <Container className={styles.container}>
        <div className={styles.company}>
          <Typography.Title
            level={4}
            style={{ marginBottom: 0 }}
            onClick={goToHome}
            className={styles.companyName}
          >
            {config.CompanyName}
          </Typography.Title>
          <SearchBar className={styles.searchInput} />
        </div>
        <div className={styles.user} onClick={goToSettings}>
          <Avatar shape="circle" src={profileImage} />
        </div>
      </Container>
    </div>
  );
};

export default Header;
