import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes = () => {
  const auth = sessionStorage.getItem("username") !== null;

  return (
    <>
      {auth && <Outlet/>}
      {!auth && <Navigate to='/login'/>}
    </>
  );
}

export default PrivateRoutes;
