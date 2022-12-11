import HomePage from '../view/page/home';
import DetailPage from '../view/page/detail';

const routes = {
  '/': HomePage, // default page
  '/home': HomePage,
  '/detail/:id': DetailPage,
};

export default routes;
