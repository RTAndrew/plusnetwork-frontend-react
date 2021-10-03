import { useDebounce } from 'ahooks';
import { Input } from 'antd';
import clsx from 'clsx';
import { useStore } from 'hooks';
import { observer } from 'mobx-react';
import { HTMLAttributes, useEffect, useState } from 'react';

import styles from './search-bar.module.scss';

const { Search } = Input;

const SearchBar = ({ className }: HTMLAttributes<HTMLElement>) => {
  const { SearchStore } = useStore();
  const [value, setValue] = useState('');
  const debouncedValue = useDebounce(value, { wait: 500 });

  useEffect(() => {
    SearchStore.setSearchQuery(debouncedValue);
  }, [SearchStore, debouncedValue]);

  return (
    <div>
      <Search
        enterButton
        size="large"
        className={clsx(className, styles.input)}
        placeholder="search for roles or companies"
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default observer(SearchBar);
