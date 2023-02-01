import {
  HttpClient,
  HttpEvent,
  HttpRequest,
  HttpHeaders,
  HttpResponse,
} from '@angular/common/http';
import { Component } from '@angular/core';
import { map, Observable, of, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment.development';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Ocp-Apim-Subscription-Key': environment.AZURE_COMPUTER_VISION_KEY,
  }),
  observe: 'response' as 'body',
};
@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss'],
})
export class FileUploaderComponent {
  fileDetails: any;
  isLoading: boolean = false;
  fileBlobUrl: string = '';

  constructor(private http: HttpClient) {}
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

      let fileExtension = this.getFileExtension(file.type);

      let fileName = this.generateFileName(10, fileExtension);

      //Upload to Azure Blob Storage; get URL back
      let folderPath = '00000-OCR';
      this.fileBlobUrl = `${environment.AZURE_STORAGE_CONTAINER_URL}/${folderPath}/${fileName}${environment.AZURE_STORAGE_SAS_TOKEN}`;

      //Submit to Azure Computer Vision; get URL back
      this.isLoading = true;
      this.uploadAzureImages(
        this.fileBlobUrl,
        file,
        fileName,
        this.fileDetails.type
      ).subscribe((event) => {
        if (event instanceof HttpResponse) {
          let res = event.status;
          if (res == 201) {
            console.log(`File uploaded successfully!`);
            this.submitToComputerVision();
          } else {
            console.log(`Operation return status ${event.status}`);
          }
        }
      });
    }
  }

  submitToComputerVision() {
    this.http
      .post(
        `${environment.AZURE_COMPUTER_VISION_ENDPOINT}/vision/v3.2/read/analyze`,
        { url: this.fileBlobUrl },
        httpOptions
      )
      .subscribe((res) => {
        if (res instanceof HttpResponse) {
          let headers = res.headers;
          let analyzeUrl = headers.get('operation-location') + ''.trim();
          this.analyzeOcrResponse(analyzeUrl);
        }
      });
  }

  analyzeOcrResponse(analyzeUrl: string) {
    this.http.get(analyzeUrl, httpOptions).subscribe((res) => {
      if (res instanceof HttpResponse) {
        let body = res.body;
        if (body.status !== 'succeeded') {
          this.analyzeOcrResponse(analyzeUrl);
        } else {
          console.log(res.body);
          this.isLoading = false;
        }
      }
    });
  }

  uploadAzureImages(
    url: string,
    file: File,
    formFileName: string,
    contentType: string
  ): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append(formFileName, file);
    var blob = new Blob([file], { type: contentType });
    const req = new HttpRequest('PUT', url, blob, {
      headers: new HttpHeaders({
        'x-ms-blob-type': 'BlockBlob',
        'Content-Type': contentType,
      }),
      reportProgress: true,
      responseType: 'json',
    });
    return this.http.request(req);

    /* .pipe((event) => {
        if (event instanceof HttpResponse) {
          let res = event.status;
          if (res == 201) {
            this.allDataLoaded = true;
            this.emitFileUploadedEvent.emit(url);
            this.appService.showToastMessage(
              AppEnums.ToastTypeInfo,
              '',
              `File uploaded successfully!`
            );
          } else {
            this.allDataLoaded = true;

            this.appService.showToastMessage(
              AppEnums.ToastTypeWarning,
              '',
              `Operation return status ${event.status}`
            );
          }
        }
      }); */
  }

  generateFileName(length: number, fileExtension: string) {
    var randomChars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    var result = '';

    for (var i = 0; i < length; i++) {
      result += randomChars.charAt(
        Math.floor(Math.random() * randomChars.length)
      );
    }

    return `${result}.${fileExtension}`;
  }

  getFileExtension(fileName: string): string {
    let arr = fileName.split('/');
    return arr[arr.length - 1];
  }

  cancelUpload() {}
}
