import { HomeComponent } from "../Home/Home.HomeComponent";


export const MainRoutes=[
  {path:'Home',component:HomeComponent},
  {path:'',component:HomeComponent},
  {path:'Customer',loadChildren:()=>import('../Customer/Customer.CustomerModule').then(m=>m.CustomerModule)},
  {path:'Supplier',loadChildren:()=>import('../Supplier/Supplier.SupplierModule').then(m=>m.SupplierModule)}
];


// {path:'Customer',component:CustomerComponent,outlet:'homepage1'},
// {path:'',component:HomeNewComponent,outlet:'homepage2'}
//http://localhost:4200/(homepage1:Customer)
