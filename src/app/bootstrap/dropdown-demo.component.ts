import { Component } from '@angular/core';

@Component({
    selector: 'dropdown-demo',
    template: `
<div (click)="$event.preventDefault()">
  <!-- Simple dropdown -->
  <span dropdown (onToggle)="toggled($event)">
    <a href id="simple-dropdown" dropdownToggle>
      Click me for a dropdown, yo!
    </a>
    <ul class="dropdown-menu" dropdownMenu aria-labelledby="simple-dropdown">
      <li *ngFor="let choice of items">
        <a class="dropdown-item" href="#">{{choice}}</a>
      </li>
    </ul>
  </span>
 
  <!-- Single button -->
  <div class="btn-group" dropdown [(isOpen)]="status.isopen">
    <button id="single-button" type="button" class="btn btn-primary" dropdownToggle [disabled]="disabled">
      Button dropdown <span class="caret"></span>
    </button>
    <ul dropdownMenu role="menu" aria-labelledby="single-button">
      <li role="menuitem"><a class="dropdown-item" href="#">Action</a></li>
      <li role="menuitem"><a class="dropdown-item" href="#">Another action</a></li>
      <li role="menuitem"><a class="dropdown-item" href="#">Something else here</a></li>
      <li class="divider dropdown-divider"></li>
      <li role="menuitem"><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>
 
  <!-- Split button -->
  <div class="btn-group" dropdown>
    <button id="split-button" type="button" class="btn btn-danger">Action</button>
    <button type="button" class="btn btn-danger dropdown-toggle-split" dropdownToggle>
      <span class="caret"></span>
      <span class="sr-only">Split button!</span>
    </button>
    <ul class="dropdown-menu" dropdownMenu role="menu" aria-labelledby="split-button">
      <li role="menuitem"><a class="dropdown-item" href="#">Action</a></li>
      <li role="menuitem"><a class="dropdown-item" href="#">Another action</a></li>
      <li role="menuitem"><a class="dropdown-item" href="#">Something else here</a></li>
      <li class="divider dropdown-divider"></li>
      <li role="menuitem"><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>
 
  <hr/>
  <p>
    <button type="button" class="btn btn-primary btn-sm" (click)="toggleDropdown($event)">Toggle button dropdown
    </button>
    <button type="button" class="btn btn-warning btn-sm" (click)="disabled = !disabled">Enable/Disable</button>
  </p>
 
  <hr>
  <!-- Single button with keyboard nav -->
  <div class="btn-group" dropdown keyboardNav="true">
    <button id="simple-btn-keyboard-nav" type="button" class="btn btn-primary" dropdownToggle>
      Dropdown with keyboard navigation <span class="caret"></span>
    </button>
    <ul class="dropdown-menu" dropdownMenu role="menu" aria-labelledby="simple-btn-keyboard-nav">
      <li role="menuitem"><a class="dropdown-item" href="#">Action</a></li>
      <li role="menuitem"><a class="dropdown-item" href="#">Another action</a></li>
      <li role="menuitem"><a class="dropdown-item" href="#">Something else here</a></li>
      <li class="divider dropdown-divider"></li>
      <li role="menuitem"><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>
 
  <hr />
  <!-- Single button using append-to-body -->
  <div class="btn-group" dropdown dropdown-append-to-body>
    <button id="btn-append-to-body" type="button" class="btn btn-primary" dropdownToggle>
      Dropdown on Body <span class="caret"></span>
    </button>
    <ul class="dropdown-menu" role="menu" aria-labelledby="btn-append-to-body">
      <li role="menuitem"><a class="dropdown-item" href="#">Action</a></li>
      <li role="menuitem"><a class="dropdown-item" href="#">Another action</a></li>
      <li role="menuitem"><a class="dropdown-item" href="#">Something else here</a></li>
      <li class="divider dropdown-divider"></li>
      <li role="menuitem"><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>
</div>
`
})
export class DropdownDemoComponent {
    public disabled:boolean = false;
    public status:{isopen:boolean} = {isopen: false};
    public items:Array<string> = ['The first choice!',
        'And another choice for you.', 'but wait! A third!'];

    public toggled(open:boolean):void {
        console.log('Dropdown is now: ', open);
    }

    public toggleDropdown($event:MouseEvent):void {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    }
}