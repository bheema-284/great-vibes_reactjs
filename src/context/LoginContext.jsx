import {createContext,useReducer} from "react"
import axios from "axios"
// Frontend assessment  : (React js)
// Design a Registration Form with the following fields, - (You can use Bootstrap 4, HTML5, CSS3)
// Name - required
// Email - required
// Mobile
// Country
// City
// State
// Message
// Validate the form values using -  React ( not bootstrap validation)
// Upload your files to github and netlify then send us a repo link and netlify app link.

const initState = { 
  name:"", email:"",  mobile:"",
  city:"", states:"", country:"",
  message:""
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return { ...state, name: action.payload };
    case 'CHANGE_EMAIL':
      return { ...state, email: action.payload };
    case 'CHANGE_MOBILE':
      return { ...state, mobile: action.payload };
    case 'CHANGE_CITY':
      return { ...state, city: action.payload };
    case 'CHANGE_STATE':
      return { ...state, states: action.payload };
    case 'CHANGE_COUNTRY':
      return { ...state, country: action.payload };
    case 'CHANGE_MESSAGE':
      return { ...state, message: action.payload };
    default:
      return state;
  }
};

export const LoginContext = createContext();

export function LoginContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);

  const { name,email,mobile,city,country,states,message } = state;


  //post data
  const handleSubmit = ()=>{    
    const url = 'http://localhost:8080/users';      
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
          state
        ),
      };
      fetch(url, requestOptions)
        .then(response => response.json())
        .then(data => dispatch({data}));
    
}

// const handleSubmit = ()=>{    
//   const url = 'http://localhost:8080/users';        
//   axios.post(url)  
//   .then(data => dispatch({data}))
//   .catch(error => {     
//       console.log(error);
//   });
  
// }

  return (
    <LoginContext.Provider
      value={{
        name,email,mobile,city,country,states,message,
        handleSubmit,
        dispatch,
      }}>
      {children}
    </LoginContext.Provider>
  );
}


