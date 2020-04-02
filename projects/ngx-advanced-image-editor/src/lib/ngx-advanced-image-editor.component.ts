import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ViewEncapsulation } from '@angular/core';
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
  public editorInstance: TuiEditor;
  public options: any = {
    usageStatistics: false,
    includeUI: {
      menuBarPosition: 'bottom',
      hideHeader: true,
    },
  }

  public ngOnInit() {
    console.log("Now Inited!")
  }

  public ngAfterViewInit(): void {
    console.log(this.editor);
    this.editorInstance = new TuiEditor(this.editor.nativeElement, this.options);
    console.log(this.editorInstance);
  }
}
