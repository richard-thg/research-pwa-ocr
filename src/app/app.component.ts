import { Component } from '@angular/core';
interface IOcrWord {
  boundingBox: number[];
  text: string;
  confidence: number;
}
interface IOcrLine {
  boundingBox: number[];
  text: string;
  appearance: {
    style: {
      name: string;
      confidence: number;
    };
  };
  words: IOcrWord[];
}
interface IOcrReadResults {
  page: number;
  angle: number;
  width: number;
  height: number;
  unit: string;
  lines: IOcrLine[];
}
interface IOcrResult {
  status: string;
  createdDateTime: string;
  lastUpdatedDateTime: string;
  analyzeResult: {
    version: string;
    modelVersion: string;
    readResults: IOcrReadResults[];
  };
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'research-pwa-ocr';
  readResultsKeys: string[] = [];
  documentType: string = '';
  documentTypeLogBook: string = 'LOGBOOK_DOCUMENT';
  documentTypeKraPin: string = 'KRA_PIN_DOCUMENT';
  documentTypeNA: string = 'NA';

  processOcrResult($event: string) {
    let ocrResult: IOcrResult = JSON.parse($event);
    let readResults = ocrResult.analyzeResult.readResults.at(0); //Page 1
    let lines = readResults?.lines;
    const firstLine = lines?.at(0)?.text;
    const logbookFistLinetext = 'Registration Certificate';
    const kraPinFistLinetext = 'For General Tax Questions';
    switch (firstLine) {
      case logbookFistLinetext:
        this.documentType = 'LOGBOOK_DOCUMENT';
        break;

      case kraPinFistLinetext:
        this.documentType = 'KRA_PIN_DOCUMENT';
        break;

      default:
        this.documentType = 'NA';
        break;
    }
  }
}
