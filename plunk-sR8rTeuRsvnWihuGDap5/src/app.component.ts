import {Component,Input,ViewChild} from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <div>
      <template let-name="name" #myTemplate>
        Hi <strong>{{name}}</strong> on {{date.toLocaleString()}}
      </template>
      <my-template
        [name]="customer"
        [template]="myTemplate">
      </my-template>
    </div>
  `,
  host: {
    class: 'yellow'
  }
})
export class AppComponent {
  
  @ViewChild('myTemplate') myTemplate: any;
  
  date: Date = new Date();
  customer: string = 'Austin';
  
}

@Component({
  selector: 'my-template',
  template: `
    <div class="yellow">
      <h1>Welcome</h1>
      <template
        [ngTemplateOutlet]="template"
        [ngOutletContext]="{ name: name }">
      </template>
    </div>
  `,
  host: {
    class: 'yellow'
  }
})
export class MyTemplateComponent {
  
  @Input() name: string;
  @Input() template: any;
  
}