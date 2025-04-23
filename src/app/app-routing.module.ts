import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./shared/components/home/home.component";
import { ProductDashboardComponent } from "./shared/components/product-dashboard/product-dashboard.component";
import { ProductComponent } from "./shared/components/product/product.component";
import { ProductFormComponent } from "./shared/components/product-form/product-form.component";
import { UserDashboardComponent } from "./shared/components/user-dashboard/user-dashboard.component";
import { UserComponent } from "./shared/components/user/user.component";
import { UserFormComponent } from "./shared/components/user-form/user-form.component";
import { PageNotFoundComponent } from "./shared/components/page-not-found/page-not-found.component";


let appRoutes : Routes = [
    {
        path : '',
        component : HomeComponent
    },
    {
        path : 'home',
        component : HomeComponent
    },
    {
        path : 'products',
        component : ProductDashboardComponent
    },
    {
        path : 'products/addProd',
        component : ProductFormComponent
    },
    {
        path : 'products/:pId',
        component : ProductComponent
    },
    {
        path : 'products/:pId/edit',
        component : ProductFormComponent
    },
    {
        path : 'users',
        component : UserDashboardComponent
    },
    {
        path : 'users/editUser',
        component : UserFormComponent
    },
    {
        path : 'users/:userId',
        component : UserComponent
    },
    {
        path : 'users/:userId/edit',
        component : UserFormComponent
    },
    {
        path : 'page-not-found',
        component : PageNotFoundComponent
    },
    {
        path : '**',
        component : PageNotFoundComponent
    }

]




@NgModule({
    declarations : [],
    imports : [
        RouterModule.forRoot(appRoutes)
    ],
    exports : [
        RouterModule
    ]
})

export class RoutingModule {

}