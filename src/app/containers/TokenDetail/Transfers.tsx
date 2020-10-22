import React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { media } from '../../../styles/media';
import { translations } from '../../../locales/i18n';
import {
  TabsTablePanel,
  TabLabel,
} from '../../components/TabsTablePanel/Loadable';
import { Filter } from './Filter';
import { tokenColunms } from '../../../utils/tableColumns';

interface TransferProps {
  tokenAddress: string;
  symbol: string;
}

export function Transfers({ tokenAddress, symbol }: TransferProps) {
  const { t } = useTranslation();

  const columns = [
    tokenColunms.txnHash,
    tokenColunms.age,
    tokenColunms.from,
    tokenColunms.to,
    tokenColunms.quantity,
  ];

  const tabs = [
    {
      value: 'transfers',
      label: (count: number) => {
        return (
          <LabelWrap>
            {t(translations.token.transfers)}
            <TabLabel count={count} />
          </LabelWrap>
        );
      },
      url: `/transfer?tokenAddress=${tokenAddress}`,
      table: {
        columns: columns,
        rowKey: 'transactionHash',
      },
    },
  ];

  return (
    <TransfersWrap>
      <TabsTablePanel tabs={tabs} />
      <Filter symbol={symbol} tokenAddress={tokenAddress} />
    </TransfersWrap>
  );
}

const TransfersWrap = styled.div`
  position: relative;
  ${media.s} {
    padding-top: 4rem;
  }
`;

const LabelWrap = styled.div`
  display: flex;
  color: #0f1327;
  font-weight: 700;
  font-size: 1.1429rem;
`;
