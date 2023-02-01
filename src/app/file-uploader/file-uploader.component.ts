import { Component } from '@angular/core';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss'],
})
export class FileUploaderComponent {
  fileDetails: any;
  isLoading: boolean = false;
  constructor() {}
  onFileSelected(evt: any) {
    const file: File = evt.target.files[0];
    if (file) {
      this.fileDetails = {
        lastModified: file.lastModified,
        name: file.name,
        size: file.size,
        type: file.type,
        webkitRelativePath: file.webkitRelativePath,
      };

      /*  const formData = new FormData();

      formData.append('thumbnail', file);

      const upload$ = this.http.post('/api/thumbnail-upload', formData);

      upload$.subscribe(); */
    }
  }

  cancelUpload() {}
}
