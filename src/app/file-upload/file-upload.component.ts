import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  files: any[] = [];

  files1:any[]=[]
  
  totfiles:any[]=[]
  constructor() { }

  ngOnInit(): void {
  }

  filesDropped(pFileList: File[]){
    this.files = Object.keys(pFileList).map((key:any) => pFileList[key]);
  }
}
