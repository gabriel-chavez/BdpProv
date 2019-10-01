import { Component, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService, NbDialogService } from '@nebular/theme';

import { UserData } from '../../../@core/data/users';
import { LayoutService } from '../../../@core/utils';
import { map, takeUntil } from 'rxjs/operators';
import { Subject, pipe } from 'rxjs';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  user: any;
  tituloModal:string="";
  themes = [
    {
      value: 'default',
      name: 'Light',
    },
    {
      value: 'dark',
      name: 'Dark',
    },
    {
      value: 'cosmic',
      name: 'Cosmic',
    },
    {
      value: 'corporate',
      name: 'Corporate',
    },
  ];

  currentTheme = 'default';

  userMenu = [ { title: 'Cambiar contraseña' }, { title: 'Cerrar sesion' } ];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private themeService: NbThemeService,
              private userService: UserData,
              private layoutService: LayoutService,
              private breakpointService: NbMediaBreakpointsService,
              private dialogService: NbDialogService) {
  }

  ngOnInit() {
    this.currentTheme = this.themeService.currentTheme;

    this.userService.getUsers()
      .pipe(takeUntil(this.destroy$))
      .subscribe((users: any) => this.user = users.nick);

    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$),
      )
      .subscribe((isLessThanXl: boolean) => this.userPictureOnly = isLessThanXl);

    this.themeService.onThemeChange()
      .pipe(
        map(({ name }) => name),
        takeUntil(this.destroy$),
      )
      .subscribe(themeName => this.currentTheme = themeName);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
  
    this.layoutService.changeLayoutSize();
    
    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }

  abrirModal(dialog: TemplateRef<any>,tituloModal:string) {    
    this.tituloModal=tituloModal;
    let contenido:string;
    if(tituloModal=="Contacto"){
      contenido=`
      <div class="container">              
          <div><b>Luis Gabriel Chavez Ramos</b></div>
          <div><small>Desarrollo de sistemas</small> </div>
          <div><small><a href="mailto:gabriel.chavez.r@gmail.com">gabriel.chavez.r@gmail.com</a></small></div>          
      </div>      
      `
    }
    else{
      contenido=`
      <div class="container">        
      </div>
      `
    }
    this.dialogService.open(
      dialog,
      { context: contenido,closeOnEsc: true, closeOnBackdropClick: false});
  }
}
