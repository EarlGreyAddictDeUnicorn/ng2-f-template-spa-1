import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'tabs-demo',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
<div (click)="$event.preventDefault()">
  <p>Select a tab by setting active binding to true:</p>
  <p>
    <button type="button" class="btn btn-primary btn-sm" (click)="tabs[0].active = true">Select second tab</button>
    <button type="button" class="btn btn-primary btn-sm" (click)="tabs[1].active = true">Select third tab</button>
  </p>
  <p>
    <button type="button" class="btn btn-primary btn-sm" (click)="tabs[1].disabled = ! tabs[1].disabled">Enable / Disable third tab</button>
  </p>
  <hr />
  <tabset>
    <tab heading="Static title">Static content</tab>
    <tab *ngFor="let tabz of tabs"
         [heading]="tabz.title"
         [active]="tabz.active"
         (select)="tabz.active = true"
         (deselect)="tabz.active = false"
         [disabled]="tabz.disabled"
         [removable]="tabz.removable"
         (removed)="removeTabHandler(tabz)"
         [customClass]="tabz.customClass">
      {{tabz?.content}}
    </tab>
    <tab (select)="alertMe()">
      <template tabHeading>
        <i class="fa fa-bell"></i> Alert!
      </template>
      I've got an HTML heading, and a select callback. Pretty cool!
    </tab>
  </tabset>
 
  <hr />
 
  <tabset [vertical]="true" type="pills">
    <tab heading="Vertical 1">Vertical content 1</tab>
    <tab heading="Vertical 2">Vertical content 2</tab>
  </tabset>
 
  <hr />
 
  <p><i>Bootstrap 4 doesn't have justified classes</i></p>
  <tabset [justified]="true">
    <tab heading="Justified">Justified content</tab>
    <tab heading="SJ">Short Labeled Justified content</tab>
    <tab heading="Long Justified">Long Labeled Justified content</tab>
  </tabset>
</div>
`
})
export class TabsDemoComponent {
    public tabs:Array<any> = [
        {title: 'Dynamic Title 1', content: 'Dynamic content 1'},
        {title: 'Dynamic Title 2', content: 'Dynamic content 2', disabled: true},
        {title: 'Dynamic Title 3', content: 'Dynamic content 3', removable: true},
        {title: 'Dynamic Title 4', content: 'Dynamic content 4', customClass: 'btn-info'}
    ];

    public alertMe():void {
        setTimeout(function ():void {
            alert('You\'ve selected the alert tab!');
        });
    };

    public setActiveTab(index:number):void {
        this.tabs[index].active = true;
    };

    public removeTabHandler(/*tab:any*/):void {
        console.log('Remove Tab handler');
    };
}