import { Navigate } from 'react-router-dom';
import "../App.css"
import axios from 'axios';
import { useState,useEffect } from 'react';
export const Users = () => {
//   if ('user is not authenticated') {
//     return <Navigate to="/registration/one" />;
//   }
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false);
const perPage = 2;
const getData = (page, perPage) => {  
  setLoading(true);
  setErr(false);
  axios('http://localhost:8080/users', {
    method: 'GET',
    params: { _page: page, _limit: perPage },
  })
    .then((res) => {
      setLoading(false);
      setData(res.data);
    })
    .catch((er) => {
      console.log(er);
      setData([]);
      setErr(true);
      setLoading(false);
    });
};
useEffect(() => {
  getData(page, perPage);
}, [page, perPage]);

  return (
    <>
      <h1 id='h1'> All Users</h1>
      {err && <div className="error"> Something went wrong! Try again </div>}
      {data.map((e) => {
        return (
          <div>
            {' '}
            <div className="data">
              <div key={e.id}>
              <p className='a'>Name:<span className='b'>{e.name}</span></p>
              <p className='a'>Email:<span className='b'>{e.email}</span></p>
              <p className='a'>Mobile:<span className='b'>{e.mobile}</span></p>
              <p className='a'>City:<span className='b'>{e.city}</span></p>
              <p className='a'>State:<span className='b'>{e.states}</span></p>
              <p className='a'>Country:<span className='b'>{e.country}</span></p>
              <p className='a'>Message:<span className='b'>{e.message}</span></p>                
              </div>
            </div>
          </div>
        );
      })}
     
      <div className="btns">
      <div className="bns">
      {loading && <div>loading ...</div>}
      <button
        disabled={loading || page === 1}
        onClick={() => setPage((page) => page - 1)}>
        PREV
      </button>
      <button disabled={loading || !data} onClick={() => setPage(page + 1)}>
        NEXT
      </button>
      </div>
      <div>Current page: {page}</div>
      </div>
    </>
  );
};
