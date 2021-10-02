import { ConfigProvider } from 'antd';
import en_US from 'antd/lib/locale/en_US';
import { Header, JobSearch, SearchResult } from 'components';

const App = () => {
  return (
    <>
      <ConfigProvider locale={en_US}>
        <Header />
        <SearchResult />
        <JobSearch />
      </ConfigProvider>
    </>
  );
};

export default App;
