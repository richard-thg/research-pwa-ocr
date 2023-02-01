import { Component } from '@angular/core';
interface IKeyValue {
  key: string;
  value?: any;
}

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
  logbookDetails: IKeyValue[] = [];

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
        if (lines) {
          this.readLogbook(lines);
        }
        break;

      case kraPinFistLinetext:
        this.documentType = 'KRA_PIN_DOCUMENT';
        if (lines) {
          this.readKraPin(lines);
        }
        break;

      default:
        this.documentType = 'NA';
        break;
    }
  }

  readLogbook(lines: IOcrLine[]) {
    let logbookNumber = lines.at(1)?.text;
    this.pushLogbookDetails('Logbook Number', logbookNumber);

    let entryNumber = lines.at(3)?.words.at(2)?.text;
    this.pushLogbookDetails('Entry Number', entryNumber);

    let originalNumber = lines.at(7)?.words.at(2)?.text;
    this.pushLogbookDetails('Original Number', originalNumber);

    let registration = this.getNextValue(lines, 'Registration:');
    this.pushLogbookDetails('Registration', registration);

    let passengers = this.getNextValue(lines, 'Passengers:');
    this.pushLogbookDetails('Passengers', passengers);

    let chassisFrame = this.getNextValueContains(lines, 'Chassis/Frame:', 1);
    this.pushLogbookDetails('Chassis/Frame', chassisFrame);

    let tareWeight = this.getNextValue(lines, 'Tare Weight:');
    this.pushLogbookDetails('Tare Weight', tareWeight);

    let make = this.getNextValue(lines, 'Make:');
    this.pushLogbookDetails('Make', make);

    let taxClass = this.getNextValue(lines, 'Tax class:');
    this.pushLogbookDetails('Tax class', taxClass);

    let vmodel = this.getNextValue(lines, 'Model:');
    this.pushLogbookDetails('Model', vmodel);

    let axles = this.getNextValue(lines, 'Axles:');
    this.pushLogbookDetails('Axles', axles);

    let vtype = this.getNextValue(lines, 'Type:');
    this.pushLogbookDetails('Type', vtype);

    let loadCapacity = this.getNextValue(lines, 'Load Capacity(Kg):');
    this.pushLogbookDetails('Load Capacity(Kg)', loadCapacity);

    let vbody = this.getNextValue(lines, 'Body:');
    this.pushLogbookDetails('Body', vbody);

    let previousReg = this.getNextValue(lines, 'Previous Reg.', 'Fuel:');
    this.pushLogbookDetails('Previous Reg', previousReg);

    let fuel = this.getNextValue(lines, 'Fuel:');
    this.pushLogbookDetails('Fuel', fuel);

    let country = this.getNextValue(lines, 'country:', 'Man Year:');
    this.pushLogbookDetails('country', country);

    let manYear = this.getNextValue(lines, 'Man Year:');
    this.pushLogbookDetails('Man Year', manYear);

    let rating = this.getNextValue(lines, 'Rating:');
    this.pushLogbookDetails('Rating', rating);

    let engineNo = this.getNextValue(lines, 'Engine No:');
    this.pushLogbookDetails('Engine No', engineNo);

    let color = this.getNextValue(lines, 'Color:');
    this.pushLogbookDetails('Color', color);

    let regDate = this.getNextValue(lines, 'Reg. Date:');
    this.pushLogbookDetails('Reg. Date', regDate);

    let grossWeight = this.getNextValue(lines, 'Gross weight:');
    this.pushLogbookDetails('Gross weight', grossWeight);

    let duty = this.getNextValue(lines, 'Duty:');
    this.pushLogbookDetails('Duty', duty);

    let previousOwners = this.getNextValueContains(
      lines,
      'Number of previous owners:',
      3
    );
    this.pushLogbookDetails('Number of previous owners', previousOwners);
  }

  pushLogbookDetails(key: string, value: any) {
    this.logbookDetails.push({ key: key, value: value });
  }

  getNextValue(lines: IOcrLine[], searchTerm: string, nextValue?: string) {
    let itemIndex = lines.findIndex((aLine) => {
      return aLine.text === searchTerm;
    });
    let s = lines.at(itemIndex + 1)?.text;
    if (s === nextValue) {
      return '';
    }
    return s;
  }

  getNextValueContains(lines: IOcrLine[], searchTerm: string, index: number) {
    let item = lines.filter((aLine) => {
      return aLine.text.includes(searchTerm);
    })[0];
    let itemIndex = lines.indexOf(item);
    let s = lines.at(itemIndex)?.words.at(index)?.text;
    if (s?.includes(':')) {
      return s.split(':')[1];
    }
    return s;
  }

  readKraPin(lines: IOcrLine[]) {}
}
