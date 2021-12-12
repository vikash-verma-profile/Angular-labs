import { CustomerComponent } from "../Customer/Customer.CustomerComponent";
import { HomeComponent } from "../Home/Home.HomeComponent";
import { HomeNewComponent } from "../Home/Home.HomeNewComponent";
import { SupplierComponent } from "../Supplier/Supplier.SupplierComponent";

export const MainRoutes=[
  {path:'Home',component:HomeComponent},
  {path:'Customer',component:CustomerComponent,outlet:'homepage1'},
  {path:'Supplier',component:SupplierComponent},
  {path:'',component:HomeNewComponent,outlet:'homepage2'}
];

//http://localhost:4200/(homepage1:Customer)
