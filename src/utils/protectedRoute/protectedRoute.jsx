import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';

const ProtectedRout = (props) => {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  return props.children;
};

export default ProtectedRout;
