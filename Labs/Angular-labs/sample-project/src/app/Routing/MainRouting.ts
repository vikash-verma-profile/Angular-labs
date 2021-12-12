import { CustomerComponent } from "../Customer/Customer.CustomerComponent";
import { HomeComponent } from "../Home/Home.HomeComponent";
import { SupplierComponent } from "../Supplier/Supplier.SupplierComponent";

export const MainRoutes=[
  {path:'Home',component:HomeComponent},
  {path:'Customer',component:CustomerComponent},
  {path:'Supplier',component:SupplierComponent},
  {path:'',component:HomeComponent}
];

