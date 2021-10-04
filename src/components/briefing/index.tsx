import { Space, Typography } from 'antd';
import { uuid } from 'utils';

import styles from './briefing.module.scss';
import { BriefingProps } from './briefing.types';

const Briefing = ({ brief, className }: BriefingProps) => {
  return (
    <div className={className}>
      <Space direction="vertical" style={{ margin: 0, flexWrap: 'wrap' }}>
        {brief.map((c) => (
          <div key={uuid()} className={styles.brief}>
            {c.icon}
            <Typography.Paragraph type="secondary" strong>
              {c.label}
            </Typography.Paragraph>
          </div>
        ))}
      </Space>
    </div>
  );
};

export default Briefing;
