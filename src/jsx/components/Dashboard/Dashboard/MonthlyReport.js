import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReportData  } from '../../../../store/actions/RevenueActions';
import {selectReportData, selectReportLoading, selectReportError } from '../../../../store/selectors/RevenueSelector';

const MonthlyReport = React.memo( () => {
  const dispatch = useDispatch();
  const reportData = useSelector(selectReportData);
  const loading = useSelector(selectReportLoading);
  const error = useSelector(selectReportError);
  const [activeTab, setActiveTab] = React.useState('Train');
  

  const getFormattedDate = () => {
    const currentDate = new Date();
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    
    const monthName = months[currentDate.getMonth()];
    const year = currentDate.getFullYear();
    
    return `${monthName.substring(0, 3)}, ${year}`;
  };
  
  const date = getFormattedDate();

  const tabs = ['Train', 'Flight', 'Hotel', 'Cab', 'Cruise'];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    dispatch(fetchReportData());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // const tabContent = reportData ? reportData[activeTab] : {};

  // const tabContent = {
  //   Train: {
  //     totalProperties: '2.8',
  //     newBooking: '5k',
  //     newCustomer: '2k',
  //     transactions: '1.2M'
  //   },
  //   Flight: {
  //     totalProperties: '3.0',
  //     newBooking: '6k',
  //     newCustomer: '2.5k',
  //     transactions: '1.5M'
  //   },
  //   Hotel: {
  //     totalProperties: '4.0',
  //     newBooking: '7k',
  //     newCustomer: '3k',
  //     transactions: '2.0M'
  //   },
  //   Cab: {
  //     totalProperties: '2.5',
  //     newBooking: '4k',
  //     newCustomer: '1.5k',
  //     transactions: '1.0M'
  //   },
  //   Cruise: {
  //     totalProperties: '3.5',
  //     newBooking: '5.5k',
  //     newCustomer: '2.2k',
  //     transactions: '1.8M'
  //   },
  // };

  return (
    <div className="container mt-4 bg-white p-3 rounded shadow-sm">
      <style>
        {`
          .arrow-down {
            margin-left: 8px;
            border: solid red;
            border-width: 0 1px 1px 0;
            display: inline-block;
            padding: 3px;
            transform: rotate(45deg);
            -webkit-transform: rotate(45deg);
          }
        `}
      </style>
      
      <div className='d-flex justify-content-between align-items-center mb-4'>
        <div>
          <h5 className="mb-2 fs-19">Calculate monthly report based on each segment</h5>
        </div>
        <div className='d-flex align-items-center cursor-pointer'>
          <p className='text-primary mb-0'>{date}</p>
          <span className="arrow-down" />
        </div>
      </div>

      <div className="border-bottom mb-4">
        <ul className="nav nav-tabs cursor-pointer">
          {tabs.map((tab) => (
            <li className="nav-item" key={tab}>
              <a
                className={`nav-link ${activeTab === tab ? 'active bg-secondary text-white' : ''}`}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex flex-grow-1 justify-content-around mb-4">
          <div className="text-center">
            <h6>Total Bookings</h6>
            <p>{reportData?.totalBookings}</p>
          </div>
          <div className="text-center">
            <h6>Transactions</h6>
            <p>{reportData?.totalRevenue}</p>
          </div>
          <div className="text-center">
            <h6>Cancellations</h6>
            {/* <p>{tabContent.newCustomer}</p> */}
          </div>
          <div className="text-center">
            <h6>Refunds</h6>
            {/* <p>{tabContent.totalProperties}</p> */}
          </div>
        </div>
        <button className="btn btn-primary btn-sm">Generate report</button>
      </div>
    </div>
  );
});

export default MonthlyReport;
