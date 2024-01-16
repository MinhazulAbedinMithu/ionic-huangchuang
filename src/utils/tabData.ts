import iconHome from "../images/icons/home.png";
import iconHomeAc from "../images/icons/home-active.png";
import iconDiscound from "../images/icons/discound.png";
import iconDiscoundAc from "../images/icons/discound-active.png";
import iconCustomer from "../images/icons/customer.png";
import iconCustomerAc from "../images/icons/customer-active.png";
import iconOrder from "../images/icons/order.png";
import iconOrderAc from "../images/icons/order-active.png";
import iconProfile from "../images/icons/profile.png";
import iconProfileAc from "../images/icons/profile-active.png";

const tabData = [
  {
    title: "首页",
    slug: "/home",
    icon: iconHome,
    activeIcon: iconHomeAc,
  },
  {
    title: "优惠",
    slug: "/discound",
    icon: iconDiscound,
    activeIcon: iconDiscoundAc,
  },
  {
    title: "客服",
    slug: "/customer-service",
    icon: iconCustomer,
    activeIcon: iconCustomerAc,
  },
  {
    title: "订单",
    slug: "/order",
    icon: iconOrder,
    activeIcon: iconOrderAc,
  },
  {
    title: "我的",
    slug: "/profile",
    icon: iconProfile,
    activeIcon: iconProfileAc,
  },
];

export default tabData;
