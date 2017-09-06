import { Component, Input } from '@angular/core';

@Component({
    styles: [`
        .fieldRow {
            display:flex;
            border: 0px; 
            flex-wrap: wrap; 
        }
        .fieldRow .fieldLabel {
            padding: 5px;
        }
        .fieldRow .fieldControl {
            padding: 5px;
        }        
    `],
    selector: 'simple-2-col-row',
    template: `
        <div class="fieldRow" [ngStyle]="style">
            <div class="fieldLabel" [ngStyle]="styleLabel">
                <ng-content select='.label'></ng-content>
            </div>
            <div class="fieldControl" [ngStyle]="styleField">
                <ng-content select='.field'></ng-content>
            </div>
        </div>
    `
})
export class SimpleTwoColRow {
    @Input() widthCol1 = 100;
    @Input() widthMinCol1 = 100;
    @Input() widthMaxCol1 = 100;
    @Input() widthCol2 = 0;
    @Input() widthMinCol2 = 200;
    @Input() widthMaxCol2 = 500;

    width = 0;
    widthMin = 0;
    widthMax = 0;

    style: any = {};
    styleLabel: any = {};
    styleField: any = {};

    ngOnInit() {
        this.init();
    }

    ngOnChanges(changes) {
        this.init();
    }

    private init() {
        this.width = !!this.widthCol1 && !!this.widthCol2 ? this.widthCol1 + this.widthCol2 : 0;
        this.widthMin = !!this.widthMinCol1 && !!this.widthMinCol2 ? this.widthMinCol1 + this.widthMinCol2 : 0;
        this.widthMax = !!this.widthMaxCol1 && !!this.widthMaxCol2 ? this.widthMaxCol1 + this.widthMaxCol2 : 0;
        this.style = {
            'width': this.width ? this.width + 'px' : 'auto',
            'min-width': this.widthMin ? this.widthMin + 'px' : 'auto',
            'max-width': this.widthMax ? this.widthMax + 'px' : 'auto'
        };
        this.styleLabel = {
            'width': this.widthCol1 ? this.widthCol1 + 'px' : 'auto',
            'min-width': this.widthMinCol1 ? this.widthMinCol1 + 'px' : 'auto',
            'max-width': this.widthMaxCol1 ? this.widthMaxCol1 + 'px' : 'auto'
        };
        this.styleField = {
            'width': this.widthCol2 ? this.widthCol2 + 'px' : 'auto',
            'min-width': this.widthMinCol2 ? this.widthMinCol2 + 'px' : 'auto',
            'max-width': this.widthMaxCol2 ? this.widthMaxCol2 + 'px' : 'auto'
        };
    }
}

@Component({
    styles: [`
    `],
    selector: 'simple-2-col-layout',
    template: `
        <div class="container" style="display:flex;border: 1px solid red; flex-direction: column;">
            <simple-2-col-row>
                <div class="label">
                    aaa
                </div>
                <div class="field">
                    bbb
                </div>                
            </simple-2-col-row>
            <simple-2-col-row>
                <div class="label">
                    ccc
                </div>
                <div class="field">
                    ddd
                </div>                
            </simple-2-col-row>            
        </div>
    `
})
export class SimpleTwoColLayout {
}
