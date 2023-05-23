import {Route, Routes} from "react-router-dom";
import {Layout} from "../components/layout/layout";
import {MainPage} from "../pages/main-page/main-page";
import {UserInfoPage} from "../pages/user-info-page/user-info-page";

function App() {

  return (
    <Routes>
      <Route path={'/'} element={<Layout/>}>
        <Route index element={<MainPage/>}/>
        <Route path={'/user/:id'} element={<UserInfoPage/>}/>
        <Route path={'/me'} element={<UserInfoPage/>}/>
        <Route path={"*"} element={<MainPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
