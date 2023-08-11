import advise from "../../../views/advise";
import contact from "../../../views/contact";
import home from "../../../views/home";
import product from "../../../views/product/list";
import productDetail from "../../../views/product/view";

export const SCREEN_MENU_CONFIG = [
  {
    nameEn: "Home",
    nameVi: 'Trang chủ',
    component: home,
    icon: 'home',
  },
  {
    nameEn: "Product",
    nameVi: 'Sản phẩm',
    component: product,
    icon: 'shopping-cart'
  },
  {
    nameEn: "Advise",
    nameVi: 'Tư Vấn',
    component: advise,
    icon: 'comments'
  },
  {
    nameEn: "Contact",
    nameVi: 'Liên hệ',
    component: contact,
    icon: 'envelope'
  }
]

export const SCREEN_CONFIG = [
  {
    nameEn: "ProductDetail",
    nameVi: 'Chi tiết sản phẩm',
    component: productDetail,
    icon: 'shopping-cart'
  },
]