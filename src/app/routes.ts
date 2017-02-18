import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { TrailComponent } from './trail/trail.component'

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'trail/:id', component: TrailComponent},
    { path: "**", redirectTo: '/' }
]
