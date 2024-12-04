import { Route, Routes } from "react-router-dom";
import { Home } from "./routes/home/home.component";
import { Navigation } from "./routes/navigation/navigation.component";
import { SignIn } from "./routes/sign-in/sign-in.component";


function Shop(){
  return(
    <div>
      Shop page
    </div>
  )
}


export function App(){
  return(
    <div>
      <Routes>
        <Route path="/" element={<Navigation />} >
          <Route index element={<Home />} ></Route>       {/* "index" = parent route accessed without additional path*/}
          <Route path="shop" element={<Shop />} ></Route>
          <Route path="sign-in" element={<SignIn />} ></Route>
        </Route>
      </Routes>
    </div>
  )
}