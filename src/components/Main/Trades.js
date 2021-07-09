import { useSelector } from 'react-redux';

import { filledOrdersSelector } from '../../store/orders-selectors';
import Spinner from '../Layout/Spinner';

const Trades = () => {
  const filledOrdersLoaded = useSelector(state => state.orders.filledOrders.loaded);
  const filledOrders = useSelector(state => filledOrdersSelector(state));
 
  const showFilledOrders = (filledOrders) => {
    return (
      <tbody>
        {filledOrders.map((order) => {
          return(            
            <tr className={`order-${order.id}`} key={order.id}>
              <td className="text-muted">{order.formattedTimestamp}</td>
              <td>{order.tokenAmount}</td>
              <td className={`text-${order.tokenPriceClass}`}>{order.tokenPrice}</td>
            </tr>          
          );
        })}
      </tbody>
    );
  };
  
  return (
    <div className="vertical">
      <div className="card bg-dark text-white">
        <div className="card-header">
          Trades
        </div>
        <div className="card-body">
          <table className="table table-dark table-sm small">
            <thead>
              <tr>
                <th>Time</th>
                <th>mTC</th>
                <th>mTC/ETH</th>
              </tr>
            </thead>
            {filledOrdersLoaded && showFilledOrders(filledOrders)}
            {!filledOrdersLoaded && <Spinner type="table" />}       
          </table>
        </div>
      </div>
    </div>
  ); 
 };

export default Trades;
