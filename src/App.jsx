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
                    <Route path="saivinay915.github.io/EMS-Frontend/" element={<ListEmployeeComponent />} />
                    <Route path="saivinay915.github.io/EMS-Frontend/employees" element={<ListEmployeeComponent />} />
                    <Route path="saivinay915.github.io/EMS-Frontend/add-employee" element={<EmployeeComponent />} />
                    <Route path="saivinay915.github.io/EMS-Frontend/edit-employee/:id" element={<EmployeeComponent />} />
                </Routes>

                <Footer />
            </BrowserRouter>
        </>
    )
}