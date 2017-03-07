export class App {
    
configureRouter(config, router) {
    this.router = router;
    config.title = 'Fitt';
    config.map([
      { route: ['', 'home'], name: 'home', moduleId: 'home/index', title:"Esileht", nav: true },
      { route: 'signup', name: 'signup', moduleId: 'signup/signup', title:"Signup", nav: true },
      { route: 'main', name: 'main', moduleId: 'main/main', title:"Pealeht", nav: true },
      { route: 'soojendus', name: 'soojendus', moduleId: 'soojendus/soojendus', title:"Soojendus", nav: false },
      { route: 'arms', name: 'arms', moduleId: 'arms/arms', title:"Käed", nav: false },
      { route: 'abs', name: 'abs', moduleId: 'abs/abs', title:"Kõht", nav: false },
      { route: 'body', name: 'body', moduleId: 'body/body', title:"Keha", nav: false },
      { route: 'legs', name: 'legs', moduleId: 'legs/legs', title:"Jalad", nav: false },
      { route: 'streches', name: 'streches', moduleId: 'streches/streches', title:"Venitus", nav: false },
    ]);
  }
}
