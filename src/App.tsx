import { FC } from 'react';
import { Tag } from 'antd';

import './style.css';

const StatusTags = (type) => {
  const style = { marginRight: '0px' };

  switch (type) {
    case 'SUBMITTED':
      return (
        <Tag color={'purple'} style={style}>
          {type}
        </Tag>
      );

    case 'RE_WORK':
      return (
        <Tag color={'geekblue'} style={style}>
          {type}
        </Tag>
      );

    case 'APPROVED':
      return (
        <Tag color={'lime'} style={style}>
          {type}
        </Tag>
      );

    case 'REVIEWED':
      return (
        <Tag color={'#73d13d'} style={style}>
          {type}
        </Tag>
      );

    case 'REJECTED':
      return (
        <Tag color={'#FE5833'} style={style}>
          {type}
        </Tag>
      );

    case 'REJECTED_UPDATE':
      return (
        <Tag color={'#FE5233'} style={style}>
          {type}
        </Tag>
      );

    case 'REOPEN':
      return (
        <Tag color={'red'} style={style}>
          {type}
        </Tag>
      );

    case 'PENDING_REVIEW':
      return (
        <Tag color={'#e2aa03'} style={style}>
          {type}
        </Tag>
      );

    case 'IN_PROGRESS':
      return (
        <Tag color={'#13C7E1'} style={style}>
          {type}
        </Tag>
      );

    case 'VERIFIED':
      return (
        <Tag color={'green'} style={style}>
          {type}
        </Tag>
      );
  }

  return <Tag>{type}</Tag>;
};
export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <div>{StatusTags('SUBMITTED')}</div>
      <div>{StatusTags('RE_WORK')}</div>
      <div>{StatusTags('APPROVED')}</div>
      <div>{StatusTags('REVIEWED')}</div>
      <div>{StatusTags('REJECTED')}</div>
      <div>{StatusTags('REJECTED_UPDATE')}</div>
      <div>{StatusTags('REOPEN')}</div>
      <div>{StatusTags('IN_PROGRESS')}</div>
      <div>{StatusTags('VERIFIED')}</div>
    </div>
  );
};
