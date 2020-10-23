import React from 'react';
import { Translation } from 'react-i18next';
import { translations } from '../../locales/i18n';
import styled from 'styled-components/macro';
import { Link } from '../../app/components/Link/Loadable';
import { Text } from '../../app/components/Text/Loadable';
import { Status } from '../../app/components/Status/Loadable';
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

export const hash = {
  title: (
    <Translation>
      {t => t(translations.general.table.transaction.hash)}
    </Translation>
  ),
  dataIndex: 'hash',
  key: 'hash',
  width: 1,
  render: (value, row: any) => {
    return (
      <StyledTransactionHashWrapper>
        {row.status !== 0 && <Status type={row.status} variant="dot" />}
        <Link href={`/transactions/${value}`}>
          {renderText(formatString(value, 'hash'), value)}
        </Link>
      </StyledTransactionHashWrapper>
    );
  },
};

export const from = {
  title: (
    <Translation>
      {t => t(translations.general.table.transaction.from)}
    </Translation>
  ),
  dataIndex: 'from',
  key: 'from',
  width: 1,
  render: value => (
    <Link href={`/address/${value}`}>
      {renderText(formatString(value, 'address'), value)}
    </Link>
  ),
};

export const to = {
  title: (
    <Translation>
      {t => t(translations.general.table.transaction.to)}
    </Translation>
  ),
  dataIndex: 'to',
  key: 'to',
  width: 1,
  render: value =>
    value ? (
      <Link href={`/address/${value}`}>
        {renderText(formatString(value, 'address'), value)}
      </Link>
    ) : (
      '--'
    ),
};

export const value = {
  title: (
    <Translation>
      {t => t(translations.general.table.transaction.value)}
    </Translation>
  ),
  dataIndex: 'value',
  key: 'value',
  width: 1,
  render: value => (value ? `${fromDripToCfx(value)}` : '--'),
};

export const gasPrice = {
  title: (
    <Translation>
      {t => t(translations.general.table.transaction.gasPrice)}
    </Translation>
  ),
  dataIndex: 'gasPrice',
  key: 'gasPrice',
  width: 1,
  render: fromDripToGdrip,
};

export const gasFee = {
  title: (
    <Translation>
      {t => t(translations.general.table.transaction.gasFee)}
    </Translation>
  ),
  dataIndex: 'gas',
  key: 'gas',
  width: 1,
  render: formatNumber,
};

export const age = {
  title: (
    <Translation>
      {t => t(translations.general.table.transaction.age)}
    </Translation>
  ),
  dataIndex: 'syncTimestamp',
  key: 'syncTimestamp',
  width: 1,
  render: value => <CountDown from={value} />,
};

const StyledTransactionHashWrapper = styled.span`
  display: flex;
  align-items: center;

  .status {
    margin-right: 0.5714rem;
  }
`;
