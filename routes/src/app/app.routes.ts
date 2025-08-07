import { Routes } from '@angular/router';
import { Home } from './component/home/home';
import { Parent } from './components/parent/parent';
import { Child1 } from './components/parent/child1/child1';
import { Shop } from './components/shop/shop';
import { Cloths } from './components/shop/cloths/cloths';
import { Men } from './components/shop/cloths/men/men';
import { Women } from './components/shop/cloths/women/women';
import { Component } from '@angular/core';

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
        path:'feature',
        loadComponent: () => import('./components/feature/feature').then(m => m.Feature)
    },
    {
        path:'login',
        loadComponent: () => import('./components/login/login').then(m => m.Login)
    }

];
