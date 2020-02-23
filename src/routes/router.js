import Home from '../components/Home/main.vue'
import Login_Register from '../components/Login_Rgister/login_register.vue'
import Products from '../components/Products/prodcut.vue'
import Categories from '../components/Categories/categories.vue'
import Checkout from '../components/Checkout/checkout.vue'
import Contact from '../components/Contact-us/contactus.vue'
import Faq from '../components/Faq/faq.vue'
import Cartempty from '../components/Cart/cartempty.vue'
import Cart from '../components/Cart/cart.vue'
import Profile from '../components/Profile/profile.vue'
import PrivacyPolicy from '../components/Privacy_policy/privacypolicy.vue'
import TermsConditions from '../components/TermsConditions/termsconditions.vue'
import Blog from '../components/Blog/blog.vue'
import About from '../components/About/About.vue'
import Thankyou from '../components/Thankyou/thankyou.vue'
import Myaccount from '../components/Myaccount/myaccount.vue'
import Myorders from '../components/Myaccount/Orders.vue'
import Search from '../components/Search/search.vue'
import SingleProduct from '../components/Products/singleproduct.vue'
import BoostersListing from '../components/Boosterslisting/boosterslisting.vue'
import Boostersind from '../components/Boosterind/boostersind.vue'
export default [

    { path: '/', component: Home },
    { path: '/auth', component: Login_Register },
    { path: '/products', component: Products },
    { path: '/categories', component: Categories },
    { path: '/checkout', component: Checkout },
    { path: '/contact', component: Contact },
    { path: '/faq', component: Faq },
    { path: '/cartempty', component: Cartempty },
    { path: '/cart', component: Cart },
    { path: '/profile', component: Profile },
    { path: '/privacy-policy', component: PrivacyPolicy },
    { path: '/terms', component: TermsConditions },
    { path: '/blog', component: Blog },
    { path: '/about', component: About },
    { path: '/thankyou', component: Thankyou },
    { path: '/myaccount', component: Myaccount },
    { path: '/orders', component: Myorders },
    { path: '/search', component: Search },
    { path: '/single', component: SingleProduct },
    { path: '/boosterlisting', component: BoostersListing },
    { path: '/boosterind', component: Boostersind },



]