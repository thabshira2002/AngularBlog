import { RouterModule, Routes } from '@angular/router';
import { Home } from './component/home/home';
import { Parent } from './components/parent/parent';
import { Child1 } from './components/parent/child1/child1';
import { Shop } from './components/shop/shop';
import { Cloths } from './components/shop/cloths/cloths';
import { Men } from './components/shop/cloths/men/men';
import { Women } from './components/shop/cloths/women/women';

import { Login } from './components/login/login';
import { Logout } from './components/logout/logout';
import { User } from './components/user/user';
import { UserDetail } from './components/user-detail/user-detail';


export const routes: Routes = [
    {
        path:'home',
        component:Home
    },
    {
        path:'parent',
        component:Parent,
        
        children: [
            {
                path: 'child1',
                component: Child1
            }]
        },
    {
        path:'shop',
        component: Shop,
        children: [
            {
                path:'cloths',
                component: Cloths,
                        children: [{path:'men',component: Men,},
                                {path:'women', component:Women}],
            }

            ],
           
    },
    {
        path:'logout',
        loadComponent: () => import('./components/logout/logout').then(m => m.Logout)
    },
    {
        path:'login',
        loadComponent: () => import('./components/login/login').then(m => m.Login)
    },

    {
        path:'login',
        component:Login,
    },
    {
        path:'logout',
        component: Logout,
    },
    {
        path: 'user',
        component:User,
    },
    {
        path:'user/:id',
        component: UserDetail,
    },
    {
        path: '',
        redirectTo: 'User',
        pathMatch: 'full'
    },
   

];

