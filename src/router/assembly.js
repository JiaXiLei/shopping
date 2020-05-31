import Loadable from '@@/Loadable'

const Home = Loadable(() => import('@/pages/home'))
const Login = Loadable(() => import('@/pages/login'))
const Cart = Loadable(() => import('@/pages/cart'))
const Mine = Loadable(() => import('@/pages/mine'))
const Basic = Loadable(() => import('@/layout/Basic'))
const Goods = Loadable(() => import('@/pages/goods'))

export {
  Home,
  Login,
  Cart,
  Mine,
  Basic,
  Goods
}
