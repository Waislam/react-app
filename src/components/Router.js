import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './contact/Contact'
import HomePage from "./home/Home";
import MenuBar from "./menu/MenuFile";

const HandleRouter = () => {

    return (
        <>
            <BrowserRouter>
                <MenuBar />
                <Routes>
                    <Route exact path='/' element={<HomePage />} />
                    <Route exact path='/contact' element={<Contact />} />
                </Routes>
            </BrowserRouter>

        </>
    )
}

export default HandleRouter;