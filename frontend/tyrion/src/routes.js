import LandingPage from "./pages/landing/LandingPage";
import SignUpPage from "./pages/authentication/SignUpPage";
import SignInPage from "./pages/authentication/SignInPage";
import AboutUsPage from "./pages/landing/AboutUsPage";
import Rates from "./pages/landing/RatesPage";
import { Dashboard } from "./components/layout/Dashboard";
import Faqs from "./pages/landing/Faqs";
import Authentication from "./components/layout/Authentication";
import Ecomm from "./pages/shop/Ecomm";
import EcommLayout from "./components/layout/shopLayout";
import Cart from "./pages/shop/Cart";
import NotFoundPage from "./pages/error/NotFoundPage";
import Payment from "./pages/shop/Payment";
import Ecomnav from "./pages/shop/Ecomnav";
import DashLayout from "./components/layout/DashLayout";
import DashHome from "./pages/dashboard/DashHome";
import Wallet from "./pages/dashboard/Wallet";
import Contact from "./pages/dashboard/Contact";
import Transactions from "./pages/dashboard/Transactions";
import Trading from "./pages/dashboard/Trading";
import SingleProduct from "./pages/shop/SingleProduct";
import CreateProfile from "./pages/shop/CreateProfile";

// import Auth from "./components/layout/Authentication";

const RoutesObjects = [
  {
    id: 1,
    path: "/",
    element: <LandingPage />,
  },

  {
    id: 2,
    path: "/sign-in",
    element: (
      <Authentication>
        <SignInPage />
      </Authentication>
    ),
  },
  {
    id: 3,
    path: "/sign-up",
    element: (
      <Authentication>
        <SignUpPage />
      </Authentication>
    ),
  },

  {
    id: 4,
    path: "/about",
    element: (
      <Dashboard>
        <AboutUsPage />,
      </Dashboard>
    ),
  },
  {
    id: 5,
    path: "/rates",
    element: (
      <Dashboard>
        <Rates />
      </Dashboard>
    ),
  },
  {
    id: 6,
    path: "/faqs",
    element: (
      <Dashboard>
        <Faqs />
      </Dashboard>
    ),
  },
  {
    id: 7,
    path: "/ecom",
    element: (
      <EcommLayout>
        <Ecomm />
      </EcommLayout>
    ),
  },
  {
    id: 8,
    path: "/cart/:id",
    element: (
      <EcommLayout>
        <Cart />
      </EcommLayout>
    ),
  },
  {
    id: 9,
    path: "/*",
    element: <NotFoundPage />,
  },
  {
    id: 10,
    path: "/payment",
    element: (
      <Ecomnav>
        <Payment />
      </Ecomnav>
    ),
  },
  {
    id: 11,
    path: "/dashboard",
    element: (
      <DashLayout>
        <DashHome />
      </DashLayout>
    ),
  },
  {
    id: 12,
    path: "/wallet",
    element: (
      <DashLayout>
        <Wallet />
      </DashLayout>
    ),
  },
  {
    id: 13,
    path: "/contact",
    element: (
      <DashLayout>
        <Contact />
      </DashLayout>
    ),
  },
  {
    id: 14,
    path: "/transactions",
    element: (
      <DashLayout>
        <Transactions />
      </DashLayout>
    ),
  },
  {
    id: 15,
    path: "/trading",
    element: (
      <DashLayout>
        <Trading />
      </DashLayout>
    ),
  },
  {
    id: 16,
    path: "/products/:id",
    element: (
      <EcommLayout>
        <SingleProduct />
      </EcommLayout>
    ),
  },
  {
    id: 17,
    path: "/create-profile",
    element: <CreateProfile />,
  },
];

export default RoutesObjects;
