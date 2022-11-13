to setup angularfare see branch https://github.com/slavikshakhov/angular-learn --- add-firebase
use routing and scss in any project
if project was in css, to change to scss: 
    angular.json: 
        "schematics": {
        "@schematics/angular:component": {
          "style": "scss"
        }
      },
    then change all files .css -> .scss (and refs in components)
1. firestore service: ng g s core/products-firestore
2. in service get collection, crud funs
3. product module: ng g m product
   ng g c product/product (will be like home page, rendering detail, form and list)
   ng g c product/components/detail (also form, list)
4. add routing: ng g m app-routing --flat --module=app  
   --flat -> put file in src/app
   --module=app -> register it in imports of AppModule
   is used by app component <router-outlet>
5. to use form, import in corresponding module: FormsModule, ReactiveFormsModule
