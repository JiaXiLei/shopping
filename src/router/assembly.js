import Loadable from '@@/Loadable'

const Home = Loadable(() => import('@/pages/home'))
const Login = Loadable(() => import('@/pages/login'))
const Cart = Loadable(() => import('@/pages/cart'))
const Mine = Loadable(() => import('@/pages/mine'))
const Basic = Loadable(() => import('@/layout/Basic'))


export {
  Home,
  Login,
  Cart,
  Mine,
  Basic
}
