import Footer from "./components/Footer";
import Header from "./components/Header";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import { EmployeeComponent } from "./components/EmployeeComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {

    return (
        <>
            <BrowserRouter>
                <Header />

                <Routes>
                    <Route path="/" element={<ListEmployeeComponent />} />
                    <Route path="/employees" element={<ListEmployeeComponent />} />
                    <Route path="/add-employee" element={<EmployeeComponent />} />
                    <Route path="/edit-employee/:id" element={<EmployeeComponent />} />
                </Routes>

                <Footer />
            </BrowserRouter>
        </>
    )
}