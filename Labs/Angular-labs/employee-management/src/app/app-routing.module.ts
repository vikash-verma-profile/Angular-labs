import { AppComponent } from "./app.component";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { EmployeeDetailComponent } from "./empolyee-detail/employee-detail.component";

export const MainRoutes=[
  {path:'employee-detail',component:EmployeeDetailComponent},
  {path:'employee-list',component:EmployeeListComponent},
  {path:'',component:AppComponent}
];