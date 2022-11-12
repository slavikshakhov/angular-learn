comp a renders multiple (*ngFor) bs, using els as data arr
    <b>
        <c></c>
    </b>
comp b renders: 
    <div>
        <ng-content></ng-content>     !!! use select
    </div>

1. pass var from a to c (ex. el)
2. from b access c as ng-content, get c's fields 
3. from b access c as ng-content, get dom of c 