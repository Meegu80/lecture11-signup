import { BrowserRouter, Route, Routes } from "react-router";
import SignUp from "./pages/SignUp.tsx";
import GlobalStyle from "./styles/styles.ts";


function App() {
    return (
        <>
            <GlobalStyle/>
            <BrowserRouter>
                <Routes>
                    {/*<Route path="/result" element={</SignUpResult>}/>*/}
                    <Route path="/" element={<SignUp/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;