import { useNavigate } from 'react-router-dom';
import '../App.css'
export const Home = () => {
    const navigate = useNavigate();
  return (
    <div className='home'>    
    <div className='btnsss'>     
      <button className='buttons' onClick={() => navigate('/registration')}>FORM</button>
      <button className='buttons' onClick={() => navigate('/users')}>USERS</button>
    </div>
    </div>
  );
};
