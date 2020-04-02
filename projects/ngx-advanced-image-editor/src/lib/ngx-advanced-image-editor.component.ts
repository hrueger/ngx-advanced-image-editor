import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ViewEncapsulation, Input } from '@angular/core';
import TuiEditor from "tui-image-editor";

@Component({
  selector: 'ngx-advanced-image-editor',
  template: `<div id="editor" #tuiEditor></div>`,
  styles: [
    ":host { display: block; }",
    "#editor: {width: 100%, height: 100%;}",
  ],
  encapsulation: ViewEncapsulation.None,
})
export class NgxAdvancedImageEditorComponent {
  @ViewChild("tuiEditor") private editor: ElementRef;
  @Input() public options: any = {
    usageStatistics: false,
    includeUI: {
      menuBarPosition: 'bottom',
    },
  }
  public editorInstance: TuiEditor;

  public ngOnInit() {
    //
  }

  public ngAfterViewInit(): void {
    this.editorInstance = new TuiEditor(this.editor.nativeElement, this.options);
  }
}
