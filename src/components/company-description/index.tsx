import {
  EnvironmentOutlined,
  FolderOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Divider, Space, Tabs, Typography } from 'antd';
import { Briefing, JobCard, Picture } from 'components';
import { IBriefing } from 'components/briefing/briefing.types';
import { useStore } from 'hooks';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router';
import { firstLetterUpperCase } from 'utils';

import styles from './company-description.module.scss';

const { TabPane } = Tabs;

const CompanyDescription = () => {
  const { CompaniesStore } = useStore();
  const { id } = useParams<{ id: string }>();

  const company = CompaniesStore.getCompanyByName(id);

  const companyBriefings: ReadonlyArray<IBriefing> = [
    {
      icon: <UserOutlined />,
      label: firstLetterUpperCase(company?.employees ?? ''),
    },
    {
      icon: <EnvironmentOutlined />,
      label: firstLetterUpperCase(company?.location ?? ''),
    },
    {
      icon: <FolderOutlined />,
      label: firstLetterUpperCase(company?.industry ?? ''),
    },
    {
      icon: <PhoneOutlined />,
      label: company?.phone ?? '',
    },
    {
      icon: <MailOutlined />,
      label: company?.email ?? '',
    },
  ];

  if (!company) return <> Sorry, we could not find the company you are looking for </>;

  const { jobs } = company;
  const companyName = firstLetterUpperCase(company.name.split('.')[0]);
  return (
    <div>
      <div className={styles.header}>
        <Picture src={`${company.picture}${company.name}`} size="large" />

        <Space direction="vertical" style={{ margin: 0, flexWrap: 'wrap' }}>
          <Typography.Title level={3}>{companyName}</Typography.Title>
          <Typography.Paragraph> {company.location} </Typography.Paragraph>
        </Space>
      </div>

      <Briefing className={styles.companyBriefings} brief={companyBriefings} />

      <Tabs defaultActiveKey="1" className={styles.tabOptions}>
        <TabPane tab="About" key="1">
          <Typography.Paragraph>
            {companyName} is a digital agency offering an unparalleled service led by leading
            figures in the digital community. {companyName} was formed as a response to an industry
            which produces work that fails to meet full potential. Our partners are MVPs, published
            authors and patent holders.
          </Typography.Paragraph>
          <br />
          <Typography.Paragraph>
            We recruit only the very best field experts, allowing us to offer a premium service. We
            are a development, support and training digital agency with a strong emphasis on client
            enablement, long-term solutions and excellence.
          </Typography.Paragraph>
        </TabPane>
        <TabPane tab={`Jobs (${jobs.length})`} key="2">
          <Space
            direction="vertical"
            style={{ width: '100%', gap: 0 }}
            split={<Divider style={{ margin: 0 }} />}
          >
            {jobs.map((j) => (
              <JobCard job={j} />
            ))}
          </Space>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default observer(CompanyDescription);
