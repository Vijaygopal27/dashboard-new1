import logo from './logo.svg';
import './App.css';
import Sidebar from './sidebar';
import Topbar from './topbar';
import Dashboard from './dashboard';


import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import UserList from './userlist';
import UserCreate from './usercreate';
import UserEdit from './useredit';


function App() {
  return (
    <div id="wrapper">
     <Sidebar></Sidebar>
     <div id="content-wrapper" class="d-flex flex-column">
     <div id="content">
       <Topbar></Topbar>
       <div class="container-fluid">
         <Router>
           <Switch>
             <Route path="/dashboard" component={Dashboard}/>
             <Route path="/user" component={UserList}/>
             <Route path="/usercreate" component={UserCreate}/>
             <Route path="/useredit" component={UserEdit}/>
           </Switch>
         </Router>
         </div>
     </div>
       </div>

    </div>
  );
}

export default App;
