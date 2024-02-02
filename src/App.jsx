import "./App.scss";
import "./styles/main.scss";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import i18next from "./utils/i18next";
import About from "./pages/About";
// import SeedProduction from "./pages/SeedPoduction";
// import SeedProcessing from "./pages/SeedProcessing";
import RandD from "./pages/R&D";
// import Export from "./pages/Export";
import Contact from "./pages/Contact";
import ProductCategory from "./pages/ProductCategory";
import ProductDetail from "./pages/ProductDetail"
import Test from "./pages/Test";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Partner from "./pages/Partner";
import NewsDetailed from "./pages/NewsDetailed";
import ProductPage from "./pages/ProductsPage"
i18next();

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/partner/:id" element={<Partner />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<ProductPage/>}/>
          <Route path="/product-category/:categoryId" element={<ProductCategory />}   />
          <Route path="/products/:productId" element={<ProductDetail/>}   />
          <Route path="/news/:newsId" element={<NewsDetailed />}   />
          <Route path="/r-d" element={<RandD />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/test" element={<Test />} />
          {/* <Route path="/export" element={<Export/>}/> */}
          {/* <Route path="/seed-production" element={<SeedProduction />} />
        <Route path="/seed-processing" element={<SeedProcessing/>}/> */}
        </Routes>
      </Layout>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
