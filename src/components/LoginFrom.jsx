import { useNavigate } from 'react-router-dom';
import '../App.css';
import { useContext } from 'react';
import { LoginContext } from '../context/LoginContext';
export const LoginForm = () => {
  const { name,email,mobile,states,city,handleSubmit,country,message,dispatch } = useContext(LoginContext);
  const navigate = useNavigate(); 
  return (
    <div id="formdata">
      <div className="formdata">
      <div id="da">
        <div>
          <label >Name:</label>
          <br />
          <br />
          <label >Email:</label>
          <br />
          <br />
          <label >mobile:</label>
          <br />
          <br />
          <label >State:</label>
          <br />
          <br />
          <label > City:</label>
          <br />
          <br />
          <label >Country:</label>
          <br />
          <br />
          
          <label >Message:</label>
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Name"
            required={true}
            value={name}
            onChange={(e) =>
              dispatch({ type: 'CHANGE_NAME', payload: e.target.value })
            }
          />
          <br />
          <input
            type="email"
            placeholder="Enter Email"
            required={true}
            value={email}
            onChange={(e) =>
              dispatch({ type: 'CHANGE_EMAIL', payload: e.target.value })
            }
          />
          <br />

          <input
            type="mobile"
            placeholder="Enter Mobile"
            value={mobile}
            onChange={(e) =>
              dispatch({ type: 'CHANGE_MOBILE', payload: e.target.value })
            }
          />
          <br />
          <input
            type="text"
            placeholder="Enter State"
            value={states}
            onChange={(e) =>
              dispatch({
                type: 'CHANGE_STATE',
                payload: e.target.value,
              })
            }
          />{' '}
          <br />
          <input
            type="text"
            placeholder="Enter City"
            value={city}
            onChange={(e) =>
              dispatch({ type: 'CHANGE_CITY', payload: e.target.value })
            }
          />{' '}
          <br />
          <input
            type="text"
            placeholder="Enter Country"
            value={country}
            onChange={(e) =>
              dispatch({ type: 'CHANGE_COUNTRY', payload: e.target.value })
            }
          />
          <br />
          <textarea
            type="text"
            placeholder="Write Message"
            value={message}
            onChange={(e) =>
              dispatch({ type: 'CHANGE_MESSAGE', payload: e.target.value })
            }
          />
          <br />
          <button
            style={{ width: '80px', backgroundColor: '#F6FFA4',borderRadius: '5px' ,border:'transparent',cursor: 'pointer'}}
            disabled={!name && !email && !mobile && !states && !city && !country && !mobile}
            onClick={() => {
              handleSubmit();
            }}
            >
            submit
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};
