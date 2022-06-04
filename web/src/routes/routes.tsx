import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import NotFound from '../components/NotFound';
import Home from '../pages/Home';

export default function AppRouter() {
    return (
        <main>
            <Router>
                <Menu />
                <Routes>
                    <Route path='/'>
                        <Route index={true} element={<Home />} />

                    </Route>
                    <Route path='*' element={<NotFound/>}/>
                </Routes>
                <Footer />
            </Router>
        </main>
    )
}