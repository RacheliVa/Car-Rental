import { HomeComponent } from "../components/home/home.component";
import { ManagingComponent } from "../components/managing/managing.component";
import { OrderingComponent } from "../components/ordering/ordering.component";
import { RentingComponent } from "../components/renting/renting.component";
import { OpenNewGroupComponent } from "../components/open-new-group/open-new-group.component";
import { PrivateAreaComponent } from '../components/private-area/private-area.component';

export const routDefinition = [
    {
        path: 'Home',
        component: HomeComponent,
        // children: [
        //     {
        //     path: 'edit/:id/:name',
        //     component: EditComponent,
        //     },
        //     {
        //         path: 'add',
        //         component: AddComponent
        //     }
        //]

    },
    {
        path: 'Managing',
        component: ManagingComponent,
    },
    
    {
        path: 'OpenNewGroup',
        component: OpenNewGroupComponent,
    },
    {
        path: 'Renting',
        component: RentingComponent,
    },
    {
        path: 'Ordering',
        component: OrderingComponent,
    },
    {
        path: 'PrivateArea',
        component: PrivateAreaComponent,
    },
    {
        path: '',
        redirectTo: 'Home',
        pathMatch:'full'
    }
   
]