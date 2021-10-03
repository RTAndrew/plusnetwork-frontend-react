import { useDebounce } from 'ahooks';
import { Input } from 'antd';
import { useStore } from 'hooks';
import { observer } from 'mobx-react';
import { HTMLAttributes, useEffect, useState } from 'react';

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
        className={className}
        placeholder="search for roles or companies"
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default observer(SearchBar);
