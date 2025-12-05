import { Routes } from '@angular/router';
import { TelaBloqueio } from './Pages/tela-bloqueio/tela-bloqueio';
import { AreaTrabalho } from './Pages/area-trabalho/area-trabalho';
import { HomeComponents } from './Pages/home-components/home-components';
import { TelaInicialChrome } from './Pages/tela-inicial-chrome/tela-inicial-chrome';

export const routes: Routes = [
  { path: '', component: TelaBloqueio },
   { path: 'AreaTrabalho', component: AreaTrabalho },
  { path: 'home', component: HomeComponents },
  { path: 'telaInicialChrome', component: TelaInicialChrome }


];

