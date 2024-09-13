import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from './Avatar';
import { fetchRecentUsers } from '../../../../store/actions/userActions';
import { selectRecentUsers, selectLoading, selectError } from '../../../../store/selectors/userSelectors';

const UserList = React.memo(() => {
  const dispatch = useDispatch();
  const users = useSelector(selectRecentUsers) || [];
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
      dispatch(fetchRecentUsers());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mt-4 bg-white p-3 rounded shadow-sm">
      <div className='d-flex justify-content-between align-items-center mb-4'>
        <div>
          <h2 className="mb-2 fs-22">Recent User List</h2>
        </div>
        <div>
          <button className="btn btn-light rounded-circle">
            <i className="fa fa-ellipsis-v text-dark" />
          </button>          
        </div>
      </div>
      <table className="table table-striped table-bordered bg-white">
        <thead className="thead-dark">
          <tr>
            <th scope="col" className="border-start-0 border-end-0">User</th>
            <th scope="col" className="border-start-0 border-end-0">Name</th>
            <th scope="col" className="border-start-0 border-end-0">Phone</th>
            <th scope="col" className="border-start-0 border-end-0">Email</th>
            <th scope="col" className="border-start-0 border-end-0">Country</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td className="border-start-0 border-end-0">
                  <Avatar name={user.name} />
                </td>
                <td className="border-start-0 border-end-0">{user.name}</td>
                <td className="border-start-0 border-end-0">{user.phone ? user.phone : "No Phone Number"}</td>
                <td className="border-start-0 border-end-0">{user.email}</td>
                <td className="border-start-0 border-end-0">India</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">No users found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
});

export default UserList;
