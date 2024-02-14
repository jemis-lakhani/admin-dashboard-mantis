import { useRoutes } from 'react-router-dom';
import LoginRoutes from './LoginRoutes';
import MainRoutes from './MainRoutes';
import MinimalRoutes from './MinimalRoutes';

export default function ThemeRoutes() {
  return useRoutes([MainRoutes, LoginRoutes, MinimalRoutes]);
}
