import { Component } from '@angular/core';

@Component({
    selector: 'buttons-demo',
    template: `
<pre class="card card-block card-header">{{singleModel}}</pre>
<button type="button" class="btn btn-primary"
        [(ngModel)]="singleModel" btnCheckbox
        btnCheckboxTrue="1" btnCheckboxFalse="0">
  Single Toggle
</button>
<h4>Checkbox</h4>
<pre class="card card-block card-header">
Model via JsonPipe: {{checkModel | json}}
</pre>
<pre class="card card-block card-header">
    Left: {{checkModel.left}}
    Middle: {{checkModel.middle}}
    Right: {{checkModel.right}}
</pre>
<!--<pre class="card card-block card-header">Results: {{checkResults}}</pre>-->
<div class="btn-group">
  <label class="btn btn-primary" [(ngModel)]="checkModel.left" btnCheckbox>Left</label>
  <label class="btn btn-primary" [(ngModel)]="checkModel.middle" btnCheckbox>Middle</label>
  <label class="btn btn-primary" [(ngModel)]="checkModel.right" btnCheckbox>Right</label>
</div>
<h4>Radio &amp; Uncheckable Radio</h4>
<pre class="card card-block card-header">{{radioModel || 'null'}}</pre>
<div class="btn-group">
  <label class="btn btn-primary" [(ngModel)]="radioModel" btnRadio="Left">Left</label>
  <label class="btn btn-primary" [(ngModel)]="radioModel" btnRadio="Middle">Middle</label>
  <label class="btn btn-primary" [(ngModel)]="radioModel" btnRadio="Right">Right</label>
</div>
<div class="btn-group">
  <label class="btn btn-success" [(ngModel)]="radioModel" btnRadio="Left" uncheckable>Left</label>
  <label class="btn btn-success" [(ngModel)]="radioModel" btnRadio="Middle" uncheckable>Middle</label>
  <label class="btn btn-success" [(ngModel)]="radioModel" btnRadio="Right" uncheckable>Right</label>
</div>
`
})
export class ButtonsDemoComponent {
    public singleModel: string = '1';
    public radioModel: string = 'Middle';
    public checkModel: any = { left: false, middle: true, right: false };
}
