import { Directive,Output,
  EventEmitter,
  HostBinding,
  HostListener } from '@angular/core';

@Directive({
  selector: '[appFileupload]'
})
export class FileuploadDirective {
  @HostBinding('class.fileover') fileOver: boolean=false;
  @Output() fileDropped = new EventEmitter<any>();
  constructor() { }

  @HostListener('dragover',['$event'])onDragOver(evt:any) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = true;
  }

  @HostListener('dragleave',['$event'])ondragleave(evt:any) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = true;
  }

  @HostListener('drop',['$event'])ondrop(evt:any) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = true;
    let files = evt.dataTransfer.files;
    console.log('files', files);
    this.fileDropped.emit(files);
  }

}
