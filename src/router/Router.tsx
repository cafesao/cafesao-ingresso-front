import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/home'
import Film from '../pages/film'
import ChoiceChair from '../pages/choiceChair'
import Review from '../pages/review'
import Payment from '../pages/payment'
import Login from '../pages/login'
import Register from '../pages/register'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/film" element={<Film />} />
        <Route path="/choice-chair" element={<ChoiceChair />} />
        <Route path="/review" element={<Review />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
