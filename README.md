comp a renders multiple (*ngFor) bs, using els as data arr
    <b>
        <c></c>
    </b>
comp b renders: 
    <div>
        <ng-content></ng-content>     !!! use select
    </div>

1. b renders ng-content (c) if el.color defined, if not --> renders html passed from a (as ng-template)
!!! if c has local styles, if ng-template rendered instead of c, no styles applied