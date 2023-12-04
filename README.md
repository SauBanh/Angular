# Angular

lifecycle

| ng...              | description                                                              |
| ------------------ | ------------------------------------------------------------------------ |
| ngOnchanges        | Called after a bound input property changes                              |
| ngOnlnit           | Called once the component is initialized                                 |
| ngDoCheck          | Called during every change detection run                                 |
| ngAfterContentlnit | Called after content (ng-content) has been projected into view           |
| ngAfterViewlnit    | Called after the component's view (and child views) has been initialized |
| ngAfterViewChecked | Called every time the view (and child views) have been checked           |
| ngOnDestroy        | Called once the component is about to be destroyed                       |

![Alt text](image.png)

create new project Angular

```terminal
ng new <your-name-project> --no-strict --routing false --standalone false
```

create new conponent

```terminal
ng generate component <folder-name>
ng g c <folder-name>
```

create new service

```terminal
ng generate service [name-service]
ng g s [name-service]
```

| Attribute Directives                                                           | Structural Directives                                                     |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------- |
| Look like a normal HTML Attribute (possibly with databinding or event binding) | Look like a nomal HTML Attribute but having a leading \* (for desugaring) |
| Only affect/change the element they are added to                               | Affect a whole area in the DOM (elements get added/remove)                |

![Alt text](image-1.png)
