import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';

import Settings from './pages/Settings';

import DefaultLayout from './layout/DefaultLayout';
import Slider from './pages/Slider';
import Dashboard from './pages/Dashboard/Dashboard';
import AddNewSlider from './pages/AddNewSlider';
import Aboutus from './pages/Aboutus';
import CustomerTestimonials from './pages/CustomerTestimonials';
import AddNewTestimonial from './pages/AddNewTestimonial';
import OurServices from './pages/OurServices';
import AddNewService from './pages/AddNewService';
import UserQueries from './pages/UserQueries';
import Faq from './pages/Faq';
import AddNewFaq from './pages/AddNewFaq';
import Gallery from './pages/Gallery';
import AddNewGallery from './pages/AddNewGallery';
import MenuCategory from './pages/MenuCategory';
import MenuItem from './pages/MenuItem';
import AddNewMenuCategory from './pages/AddNewMenuCategory';
import AddNewMenuItem from './pages/AddNewMenuItem';
import SignIn from './pages/SignIn';
import ProtectedLayout from './components/ProtectedLayout';
import EditFaq from './pages/EditFaq';
import EditSlider from './pages/EditSlider';
import ViewUserquery from './pages/ViewUserquery';
import EditService from './pages/EditService';
import EditTestimonials from './pages/EditTestimonials';
import EditGallery from './pages/EditGallery';
import EditMenuCategory from './pages/EditMenuCategory';
import EditMenu from './pages/EditMenu';
import AssociatedMenus from './pages/AssociatedMenus';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<SignIn />} />

      {/* Protected routes wrapped inside DefaultLayout */}
      <Route element={<ProtectedLayout />}>
        <Route element={<DefaultLayout />}>
          <Route
            path="/dashboard"
            element={
              <>
                <PageTitle title=" Dashboard | Gokarna Hillside Resort " />
                <Dashboard />
              </>
            }
          />
          <Route path="/slider" element={<Slider />} />
          <Route path="/addnewslider" element={<AddNewSlider />} />
          <Route path="/editslider/:id" element={<EditSlider />} />
          <Route
            path="/customers-testimonials"
            element={<CustomerTestimonials />}
          />
          <Route path="/add-new-testimonial" element={<AddNewTestimonial />} />
          <Route path="/edit-testimonial/:id" element={<EditTestimonials />} />
          <Route path="/services" element={<OurServices />} />
          <Route path="/add-new-service" element={<AddNewService />} />
          <Route path="/edit-service/:id" element={<EditService />} />
          <Route path="/user-queries" element={<UserQueries />} />
          <Route path="/viewsinglequery/:id" element={<ViewUserquery />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/add-new-faq" element={<AddNewFaq />} />
          <Route path="/edit-faq/:id" element={<EditFaq />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/add-new-gallery" element={<AddNewGallery />} />
          <Route path="/edit-gallery/:id" element={<EditGallery />} />
          <Route path="/menu-category" element={<MenuCategory />} />
          <Route
            path="/add-new-menu-category"
            element={<AddNewMenuCategory />}
          />
          <Route
            path="/edit-menu-category/:id"
            element={<EditMenuCategory />}
          />
          <Route
            path="/associated-menus/:catid"
            element={<AssociatedMenus />}
          />
          <Route path="/menu-item" element={<MenuItem />} />
          <Route path="/add-new-menu" element={<AddNewMenuItem />} />
          <Route path="/edit-menu-item/:slug" element={<EditMenu />} />
          <Route
            path="/about-us"
            element={
              <>
                <PageTitle title="Profile | Gokarna Hillside Resort " />
                <Aboutus />
              </>
            }
          />
          <Route
            path="/settings"
            element={
              <>
                <PageTitle title="Settings | Gokarna Hillside Resort " />
                <Settings />
              </>
            }
          />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
