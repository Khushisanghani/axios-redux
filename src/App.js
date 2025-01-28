// import {  Route, Routes } from 'react-router-dom';
import './App.css';
// import Create from './Components/CRUD/Create';
// import Read from './Components/CRUD/Read';
// import Edit from './Components/CRUD/Edit';



function App() {
  return (
   <>
   <div className='App'>
      <h1>welcome to react redux</h1>
        <input type='text'/><br/><br/>
        <button className='btn btn-primary'>Add</button>
        <button className='btn btn-danger'>Minus</button>
   </div>
    {/* <div className='container'>
      
      <Routes>
        <Route exact path='/' element={<Read/>}></Route>
        <Route exact path='/create' element={<Create/>}></Route>
        <Route exact path='/edit' element={<Edit/>}></Route>
      </Routes>
     
    </div> */}
   </>
  );
}

export default App;
