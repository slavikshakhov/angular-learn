npm install --save @angular/fire (do not use ng add ...)

1. fb console: add project, no google analytics, create
2. fb proj settings: rules: allow read, write: if true
3. select cloud firestore, + db, create collection
4. fb settings, copy firebaseConfig obj --> app: environments-- firebase: {config: copiedObj}
5. configure app.module
6. get collection (see app.component)
