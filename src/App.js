import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from './components/HomePage/HomePage';
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import CreateRecipe from './components/CreateRecipe/CreateRecipe'
import AllRecipes from './components/AllRecipes/AllRecipes';
import RecipeDetail from './components/RecipeDetail/RecipeDetail';
import Logout from './components/Logout/Logout';
import EditRecipe from './components/EditRecipe/EditRecipe';
import MyRecipes from "./components/MyRecipes/MyRecipes"
import Error404 from './components/Error404/Error404';

function App() {
  return (
    <AuthProvider>
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<><Home /><HomePage /></>} />
          <Route path="/recipes" element={<AllRecipes />} />
          <Route path="/myrecipes" element={<MyRecipes />} />
          <Route path="/crate" element={<CreateRecipe />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />
          <Route path="/recipe/edit/:recipeId" element={<EditRecipe />} />
          <Route path="/recipe/details/:recipeId" element={<RecipeDetail />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>

        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
