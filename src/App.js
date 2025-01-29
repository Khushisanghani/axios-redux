import {  Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Create from './Components/CRUD/Create';
import Read from './Components/CRUD/Read';
import Edit from './Components/CRUD/Edit';
// import { useSelector,useDispatch } from 'react-redux';
// import { increase,decrease } from './Components/Redux/Action';

function App() {
  // const mystate = useSelector((state) => state.Inc_Dec);
  // const dispatch = useDispatch()
  return (
   <>
   {/* <div className='App'>
      <h1>welcome to react redux</h1>
        <input type='text' value={mystate}/><br/><br/>
        <button className='btn btn-primary' onClick={() => dispatch(increase())}>Add</button>
        <button className='btn btn-danger' onClick={() => dispatch(decrease())}>Minus</button>
   </div> */}
    <div className='container'>
      <Routes>
        <Route exact path='/' element={<Read/>}></Route>
        <Route exact path='/create' element={<Create/>}></Route>
        <Route exact path='/edit' element={<Edit/>}></Route>
      </Routes>
    </div>
   </>
  );
}

export default App;
