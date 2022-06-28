import { useNavigate } from 'react-router-dom';

export const Home = () => {
    const navigate = useNavigate();
  return (
    <div className='home'>      
      <button onClick={() => navigate('/registration')}>FORM</button>
      <button onClick={() => navigate('/users')}>USERS</button>
    </div>
  );
};
