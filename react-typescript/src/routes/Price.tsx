import { useQuery } from 'react-query';
import { fetchCoinTickers } from './api';
import { PriceData } from './Coin';
import styled from 'styled-components';

const ListBox = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;

const List = styled.li`
  width: 100%;
  padding: 15px 15px;
  background-color: rgba(0, 0, 0, 0.5);
  color: ${(props) => props.theme.accentColor};
  border-radius: 10px;
  p {
    margin-bottom: 15px;
    font-size: 10px;
    color: rgba(255, 255, 255, 0.5);
  }
`;

const MainBox = styled(List)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
`;

interface PriceProps {
  coinId: string;
}

function Price({ coinId }: PriceProps) {
  const { isLoading, data } = useQuery<PriceData>(
    ['tickers', coinId],
    () => fetchCoinTickers(coinId),
    { refetchInterval: 5000 }
  );

  const quotes = data?.quotes.USD;
  const athDate = quotes?.ath_date;
  const athPrice = quotes?.ath_price;
  const changePrice1h = quotes?.percent_change_1h;
  const changePrice12h = quotes?.percent_change_12h;
  const changePrice24h = quotes?.percent_change_24h;
  const changePrice7d = quotes?.percent_change_7d;
  const changePrice30d = quotes?.percent_change_30d;
  const changePrice1y = quotes?.percent_change_1y;
  const price = quotes?.price;

  return (
    <div>
      {isLoading ? (
        'Loading price...'
      ) : (
        <>
          <MainBox as="div">
            <p>{athDate}</p>
            {athPrice?.toFixed(3)}
          </MainBox>
          <ListBox>
            <List>
              <p>changePrice1h:</p>
              {changePrice1h}
            </List>
            <List>
              <p>changePrice12h:</p>
              {changePrice12h}
            </List>
            <List>
              <p>changePrice24h:</p>
              {changePrice24h}
            </List>
            <List>
              <p>changePrice7d:</p>
              {changePrice7d}
            </List>
            <List>
              <p>changePrice30d:</p>
              {changePrice30d}
            </List>
            <List>
              <p>changePrice1y:</p>
              {changePrice1y}
            </List>
          </ListBox>
          <MainBox as="div">
            <p>price</p>
            {price?.toFixed(3)}
          </MainBox>
        </>
      )}
    </div>
  );
}

export default Price;
