import { Route, Routes } from "react-router-dom";
import { Home } from "./routes/home/home.component";
import { Navigation } from "./routes/navigation/navigation.component";
import { Authentication } from "./routes/authentication/authentication.component";
import { Shop } from "./routes/shop/shop.component";
import { Checkout } from "./routes/checkout/checkout.component";

export function App(){
  return(
    <div>
      <Routes>
        <Route path="/" element={<Navigation />} >
          <Route index element={<Home />} ></Route>       {/* "index" = parent route accessed without additional path*/}
          <Route path="shop" element={<Shop />} ></Route>
          <Route path="auth" element={<Authentication />} ></Route>
          <Route path="checkout" element={<Checkout />} ></Route>
        </Route>
      </Routes>
    </div>
  )
}