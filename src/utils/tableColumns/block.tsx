import React from 'react';
import { Translation } from 'react-i18next';
import { translations } from '../../locales/i18n';
import styled from 'styled-components/macro';
import { Text } from '../../app/components/Text/Loadable';
import { Link } from '../../app/components/Link/Loadable';
import { CountDown } from '../../app/components/CountDown/Loadable';
import {
  formatString,
  formatNumber,
  getPercent,
  fromDripToCfx,
  fromDripToGdrip,
} from '../../utils/';

const renderText = (value, hoverValue?) => (
  <Text span hoverValue={hoverValue || value}>
    {value}
  </Text>
);

export const epoch = {
  title: (
    <Translation>{t => t(translations.general.table.block.epoch)}</Translation>
  ),
  dataIndex: 'epochNumber',
  key: 'epochNumber',
  width: 1,
  render: (value, row: any) => {
    let pivotTag: React.ReactNode = null;
    if (row.pivotHash === row.hash) {
      pivotTag = <img className="img" src="/pivot.svg" alt="pivot"></img>;
    }
    return (
      <StyledEpochWrapper>
        <Link href={`/epochs/${value}`}>{renderText(value)}</Link>
        {pivotTag}
      </StyledEpochWrapper>
    );
  },
};

export const position = {
  title: (
    <Translation>
      {t => t(translations.general.table.block.position)}
    </Translation>
  ),
  dataIndex: 'blockIndex',
  key: 'blockIndex',
  width: 1,
};

export const txns = {
  title: (
    <Translation>{t => t(translations.general.table.block.txns)}</Translation>
  ),
  dataIndex: 'transactionCount',
  key: 'transactionCount',
  width: 1,
  render: formatNumber,
};

export const hash = {
  title: (
    <Translation>{t => t(translations.general.table.block.hash)}</Translation>
  ),
  dataIndex: 'hash',
  key: 'hash',
  width: 1,
  render: value => (
    <Link href={`/blocks/${value}`}>
      {renderText(formatString(value, 'hash'), value)}
    </Link>
  ),
};

export const hashWithPivot = {
  ...hash,
  render: (value, row: any) => {
    let pivotTag: React.ReactNode = null;
    if (row.pivotHash === row.hash) {
      pivotTag = <img className="img" src="/pivot.svg" alt="pivot"></img>;
    }
    return (
      <StyledEpochWrapper>
        <Link href={`/blocks/${value}`}>
          {renderText(formatString(value, 'hash'), value)}
        </Link>
        {pivotTag}
      </StyledEpochWrapper>
    );
  },
};

export const miner = {
  title: (
    <Translation>{t => t(translations.general.table.block.miner)}</Translation>
  ),
  dataIndex: 'miner',
  key: 'miner',
  width: 1,
  render: value => (
    <Link href={`/address/${value}`}>
      {renderText(formatString(value, 'address'), value)}
    </Link>
  ),
};

export const avgGasPrice = {
  title: (
    <Translation>
      {t => t(translations.general.table.block.avgGasPrice)}
    </Translation>
  ),
  dataIndex: 'avgGasPrice',
  key: 'avgGasPrice',
  width: 1,
  render: fromDripToGdrip,
};

export const gasUsedPercent = {
  title: (
    <Translation>
      {t => t(translations.general.table.block.gasUsedPercent)}
    </Translation>
  ),
  dataIndex: 'gasUsed',
  key: 'gasUsed',
  width: 1,
  render: (value, row: any) => {
    if (value) {
      return getPercent(row.gasUsed, row.gasLimit);
    } else {
      return '--';
    }
  },
};

export const reward = {
  title: (
    <Translation>{t => t(translations.general.table.block.reward)}</Translation>
  ),
  dataIndex: 'totalReward',
  key: 'totalReward',
  width: 1,
  render: value => (value ? `${fromDripToCfx(value)}` : '--'),
};

export const age = {
  title: (
    <Translation>{t => t(translations.general.table.block.age)}</Translation>
  ),
  dataIndex: 'syncTimestamp',
  key: 'syncTimestamp',
  width: 1,
  render: value => <CountDown from={value} />,
};

export const difficulty = {
  title: (
    <Translation>
      {t => t(translations.general.table.block.difficulty)}
    </Translation>
  ),
  dataIndex: 'difficulty',
  key: 'difficulty',
  width: 1,
  render: formatNumber,
};

export const gasLimit = {
  title: (
    <Translation>
      {t => t(translations.general.table.block.gasLimit)}
    </Translation>
  ),
  dataIndex: 'gasLimit',
  key: 'gasLimit',
  width: 1,
  render: formatNumber,
};

const StyledEpochWrapper = styled.span`
  display: flex;
  align-items: center;

  .img {
    width: 3rem;
    height: 1.4286rem;
    margin-left: 0.5714rem;
  }
`;
