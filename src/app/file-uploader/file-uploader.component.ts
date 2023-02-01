import {
  HttpClient,
  HttpEvent,
  HttpRequest,
  HttpHeaders,
  HttpResponse,
} from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
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
  @Output()
  ocrResultReadyEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    /*     const x = {
      status: 'succeeded',
      createdDateTime: '2023-02-01T12:20:46Z',
      lastUpdatedDateTime: '2023-02-01T12:20:47Z',
      analyzeResult: {
        version: '3.2.0',
        modelVersion: '2022-04-30',
        readResults: [
          {
            page: 1,
            angle: 0,
            width: 1200,
            height: 1600,
            unit: 'pixel',
            lines: [
              {
                boundingBox: [373, 139, 757, 145, 756, 182, 372, 177],
                text: 'Registration Certificate',
                appearance: {
                  style: {
                    name: 'other',
                    confidence: 0.972,
                  },
                },
                words: [
                  {
                    boundingBox: [374, 140, 571, 145, 570, 181, 373, 178],
                    text: 'Registration',
                    confidence: 0.991,
                  },
                  {
                    boundingBox: [581, 145, 752, 147, 753, 182, 581, 181],
                    text: 'Certificate',
                    confidence: 0.994,
                  },
                ],
              },
              {
                boundingBox: [730, 230, 905, 234, 904, 264, 729, 259],
                text: 'K4510085 A',
                appearance: {
                  style: {
                    name: 'other',
                    confidence: 0.972,
                  },
                },
                words: [
                  {
                    boundingBox: [731, 230, 868, 233, 868, 263, 730, 260],
                    text: 'K4510085',
                    confidence: 0.996,
                  },
                  {
                    boundingBox: [876, 234, 893, 234, 894, 265, 877, 264],
                    text: 'A',
                    confidence: 0.998,
                  },
                ],
              },
              {
                boundingBox: [391, 304, 745, 310, 745, 338, 390, 333],
                text: 'REPUBLIC OF KENYA"',
                appearance: {
                  style: {
                    name: 'other',
                    confidence: 0.972,
                  },
                },
                words: [
                  {
                    boundingBox: [391, 305, 553, 308, 553, 337, 391, 333],
                    text: 'REPUBLIC',
                    confidence: 0.993,
                  },
                  {
                    boundingBox: [567, 308, 608, 308, 607, 337, 566, 337],
                    text: 'OF',
                    confidence: 0.998,
                  },
                  {
                    boundingBox: [619, 309, 746, 311, 745, 338, 619, 338],
                    text: 'KENYA"',
                    confidence: 0.277,
                  },
                ],
              },
              {
                boundingBox: [115, 357, 430, 358, 430, 383, 114, 381],
                text: 'Entry No 21MBAIM402567396',
                appearance: {
                  style: {
                    name: 'other',
                    confidence: 0.972,
                  },
                },
                words: [
                  {
                    boundingBox: [115, 358, 172, 358, 171, 382, 115, 382],
                    text: 'Entry',
                    confidence: 0.993,
                  },
                  {
                    boundingBox: [177, 358, 208, 357, 207, 382, 176, 382],
                    text: 'No',
                    confidence: 0.998,
                  },
                  {
                    boundingBox: [213, 357, 430, 361, 430, 383, 213, 382],
                    text: '21MBAIM402567396',
                    confidence: 0.986,
                  },
                ],
              },
              {
                boundingBox: [434, 340, 693, 343, 693, 368, 434, 363],
                text: 'TRAFFIC ACT (CAP 403)',
                appearance: {
                  style: {
                    name: 'other',
                    confidence: 0.972,
                  },
                },
                words: [
                  {
                    boundingBox: [438, 341, 528, 341, 528, 366, 438, 362],
                    text: 'TRAFFIC',
                    confidence: 0.994,
                  },
                  {
                    boundingBox: [536, 341, 582, 342, 582, 367, 536, 366],
                    text: 'ACT',
                    confidence: 0.998,
                  },
                  {
                    boundingBox: [587, 342, 638, 343, 638, 368, 587, 367],
                    text: '(CAP',
                    confidence: 0.988,
                  },
                  {
                    boundingBox: [644, 343, 692, 344, 692, 369, 644, 368],
                    text: '403)',
                    confidence: 0.991,
                  },
                ],
              },
              {
                boundingBox: [759, 324, 867, 327, 867, 348, 758, 345],
                text: 'K4510085A',
                appearance: {
                  style: {
                    name: 'other',
                    confidence: 0.972,
                  },
                },
                words: [
                  {
                    boundingBox: [760, 324, 865, 327, 864, 349, 759, 345],
                    text: 'K4510085A',
                    confidence: 0.993,
                  },
                ],
              },
              {
                boundingBox: [498, 369, 638, 369, 638, 396, 498, 395],
                text: '(Section 6(5))',
                appearance: {
                  style: {
                    name: 'other',
                    confidence: 0.972,
                  },
                },
                words: [
                  {
                    boundingBox: [499, 370, 580, 369, 579, 395, 499, 394],
                    text: '(Section',
                    confidence: 0.993,
                  },
                  {
                    boundingBox: [586, 369, 638, 369, 637, 397, 585, 395],
                    text: '6(5))',
                    confidence: 0.994,
                  },
                ],
              },
              {
                boundingBox: [665, 359, 987, 363, 987, 389, 665, 386],
                text: 'Original No 2021090704334',
                appearance: {
                  style: {
                    name: 'other',
                    confidence: 0.972,
                  },
                },
                words: [
                  {
                    boundingBox: [669, 360, 760, 361, 760, 388, 669, 387],
                    text: 'Original',
                    confidence: 0.903,
                  },
                  {
                    boundingBox: [769, 361, 802, 362, 802, 388, 769, 388],
                    text: 'No',
                    confidence: 0.998,
                  },
                  {
                    boundingBox: [816, 362, 988, 366, 986, 389, 816, 388],
                    text: '2021090704334',
                    confidence: 0.993,
                  },
                ],
              },
              {
                boundingBox: [286, 403, 401, 404, 400, 426, 285, 423],
                text: 'Particulars:',
                appearance: {
                  style: {
                    name: 'other',
                    confidence: 0.972,
                  },
                },
                words: [
                  {
                    boundingBox: [287, 403, 400, 405, 400, 426, 286, 424],
                    text: 'Particulars:',
                    confidence: 0.991,
                  },
                ],
              },
              {
                boundingBox: [732, 408, 838, 409, 838, 429, 731, 427],
                text: 'Particulars:',
                appearance: {
                  style: {
                    name: 'other',
                    confidence: 0.972,
                  },
                },
                words: [
                  {
                    boundingBox: [733, 409, 839, 410, 838, 430, 732, 428],
                    text: 'Particulars:',
                    confidence: 0.991,
                  },
                ],
              },
              {
                boundingBox: [124, 442, 246, 442, 246, 463, 124, 464],
                text: 'Registration:',
                appearance: {
                  style: {
                    name: 'other',
                    confidence: 0.972,
                  },
                },
                words: [
                  {
                    boundingBox: [125, 444, 247, 442, 246, 463, 125, 463],
                    text: 'Registration:',
                    confidence: 0.991,
                  },
                ],
              },
              {
                boundingBox: [282, 436, 378, 435, 378, 457, 282, 457],
                text: 'KDD677Y',
                appearance: {
                  style: {
                    name: 'other',
                    confidence: 0.972,
                  },
                },
                words: [
                  {
                    boundingBox: [282, 436, 375, 436, 375, 457, 282, 458],
                    text: 'KDD677Y',
                    confidence: 0.994,
                  },
                ],
              },
              {
                boundingBox: [569, 446, 683, 449, 682, 468, 569, 465],
                text: 'Passengers:',
                appearance: {
                  style: {
                    name: 'other',
                    confidence: 0.972,
                  },
                },
                words: [
                  {
                    boundingBox: [570, 446, 683, 449, 682, 469, 569, 466],
                    text: 'Passengers:',
                    confidence: 0.994,
                  },
                ],
              },
              {
                boundingBox: [778, 444, 791, 444, 789, 462, 777, 462],
                text: '5',
                appearance: {
                  style: {
                    name: 'other',
                    confidence: 0.972,
                  },
                },
                words: [
                  {
                    boundingBox: [777, 444, 788, 444, 788, 462, 777, 462],
                    text: '5',
                    confidence: 0.998,
                  },
                ],
              },
              {
                boundingBox: [127, 485, 401, 485, 401, 507, 127, 508],
                text: 'Chassis/Frame: SJG-026578',
                appearance: {
                  style: {
                    name: 'other',
                    confidence: 0.972,
                  },
                },
                words: [
                  {
                    boundingBox: [128, 486, 277, 485, 277, 508, 127, 508],
                    text: 'Chassis/Frame:',
                    confidence: 0.991,
                  },
                  {
                    boundingBox: [284, 485, 400, 485, 399, 508, 283, 508],
                    text: 'SJG-026578',
                    confidence: 0.995,
                  },
                ],
              },
              {
                boundingBox: [566, 488, 681, 490, 681, 510, 566, 508],
                text: 'Tare Weight:',
                appearance: {
                  style: {
                    name: 'other',
                    confidence: 0.972,
                  },
                },
                words: [
                  {
                    boundingBox: [570, 489, 608, 489, 607, 509, 570, 509],
                    text: 'Tare',
                    confidence: 0.988,
                  },
                  {
                    boundingBox: [612, 489, 681, 490, 680, 511, 612, 509],
                    text: 'Weight:',
                    confidence: 0.996,
                  },
                ],
              },
              {
                boundingBox: [779, 489, 838, 489, 837, 509, 778, 508],
                text: '1620.0',
                appearance: {
                  style: {
                    name: 'other',
                    confidence: 0.972,
                  },
                },
                words: [
                  {
                    boundingBox: [779, 490, 836, 490, 836, 510, 780, 509],
                    text: '1620.0',
                    confidence: 0.995,
                  },
                ],
              },
              {
                boundingBox: [127, 525, 186, 526, 186, 546, 127, 545],
                text: 'Make:',
                appearance: {
                  style: {
                    name: 'other',
                    confidence: 0.972,
                  },
                },
                words: [
                  {
                    boundingBox: [128, 526, 186, 526, 185, 547, 127, 545],
                    text: 'Make:',
                    confidence: 0.994,
                  },
                ],
              },
              {
                boundingBox: [286, 526, 357, 526, 356, 547, 285, 546],
                text: 'Subaru',
                appearance: {
                  style: {
                    name: 'other',
                    confidence: 0.972,
                  },
                },
                words: [
                  {
                    boundingBox: [286, 527, 352, 527, 351, 548, 286, 546],
                    text: 'Subaru',
                    confidence: 0.993,
                  },
                ],
              },
              {
                boundingBox: [570, 528, 656, 528, 655, 547, 570, 547],
                text: 'Tax class:',
                appearance: {
                  style: {
                    name: 'other',
                    confidence: 0.972,
                  },
                },
                words: [
                  {
                    boundingBox: [572, 528, 601, 529, 600, 548, 572, 547],
                    text: 'Tax',
                    confidence: 0.998,
                  },
                  {
                    boundingBox: [605, 529, 656, 529, 654, 548, 604, 548],
                    text: 'class:',
                    confidence: 0.995,
                  },
                ],
              },
              {
                boundingBox: [776, 529, 838, 529, 838, 549, 776, 548],
                text: 'Private',
                appearance: {
                  style: {
                    name: 'other',
                    confidence: 0.972,
                  },
                },
                words: [
                  {
                    boundingBox: [776, 530, 837, 530, 837, 550, 776, 548],
                    text: 'Private',
                    confidence: 0.994,
                  },
                ],
              },
              {
                boundingBox: [129, 563, 196, 563, 196, 584, 129, 585],
                text: 'Model:',
                appearance: {
                  style: {
                    name: 'other',
                    confidence: 0.972,
                  },
                },
                words: [
                  {
                    boundingBox: [130, 565, 197, 563, 196, 585, 130, 584],
                    text: 'Model:',
                    confidence: 0.997,
                  },
                ],
              },
              {
                boundingBox: [286, 564, 365, 565, 364, 585, 286, 584],
                text: 'Forester',
                appearance: {
                  style: {
                    name: 'other',
                    confidence: 0.972,
                  },
                },
                words: [
                  {
                    boundingBox: [287, 565, 365, 566, 364, 586, 288, 585],
                    text: 'Forester',
                    confidence: 0.996,
                  },
                ],
              },
              {
                boundingBox: [571, 567, 627, 567, 627, 585, 571, 585],
                text: 'Axles:',
                appearance: {
                  style: {
                    name: 'other',
                    confidence: 0.972,
                  },
                },
                words: [
                  {
                    boundingBox: [571, 567, 627, 567, 627, 586, 572, 585],
                    text: 'Axles:',
                    confidence: 0.991,
                  },
                ],
              },
              {
                boundingBox: [779, 569, 791, 568, 788, 584, 777, 585],
                text: '2',
                appearance: {
                  style: {
                    name: 'other',
                    confidence: 0.815,
                  },
                },
                words: [
                  {
                    boundingBox: [780, 569, 789, 568, 791, 583, 781, 584],
                    text: '2',
                    confidence: 0.995,
                  },
                ],
              },
              {
                boundingBox: [130, 605, 182, 605, 182, 624, 130, 624],
                text: 'Type:',
                appearance: {
                  style: {
                    name: 'other',
                    confidence: 0.972,
                  },
                },
                words: [
                  {
                    boundingBox: [131, 605, 182, 605, 182, 624, 131, 624],
                    text: 'Type:',
                    confidence: 0.997,
                  },
                ],
              },
              {
                boundingBox: [285, 603, 413, 604, 413, 626, 285, 625],
                text: 'Motor Vehicle',
                appearance: {
                  style: {
                    name: 'other',
                    confidence: 0.972,
                  },
                },
                words: [
                  {
                    boundingBox: [287, 604, 341, 604, 340, 624, 286, 624],
                    text: 'Motor',
                    confidence: 0.998,
                  },
                  {
                    boundingBox: [345, 604, 412, 604, 411, 627, 344, 625],
                    text: 'Vehicle',
                    confidence: 0.996,
                  },
                ],
              },
              {
                boundingBox: [570, 604, 737, 605, 737, 628, 570, 627],
                text: 'Load Capacity(Kg):',
                appearance: {
                  style: {
                    name: 'other',
                    confidence: 0.972,
                  },
                },
                words: [
                  {
                    boundingBox: [571, 605, 615, 605, 615, 626, 571, 627],
                    text: 'Load',
                    confidence: 0.996,
                  },
                  {
                    boundingBox: [619, 605, 738, 606, 737, 629, 619, 626],
                    text: 'Capacity(Kg):',
                    confidence: 0.993,
                  },
                ],
              },
              {
                boundingBox: [779, 605, 810, 605, 809, 622, 779, 622],
                text: '275',
                appearance: {
                  style: {
                    name: 'other',
                    confidence: 0.972,
                  },
                },
                words: [
                  {
                    boundingBox: [779, 605, 808, 605, 808, 622, 779, 622],
                    text: '275',
                    confidence: 0.998,
                  },
                ],
              },
              {
                boundingBox: [129, 644, 184, 644, 184, 664, 128, 663],
                text: 'Body:',
                appearance: {
                  style: {
                    name: 'other',
                    confidence: 0.972,
                  },
                },
                words: [
                  {
                    boundingBox: [129, 644, 184, 644, 184, 664, 129, 663],
                    text: 'Body:',
                    confidence: 0.994,
                  },
                ],
              },
              {
                boundingBox: [287, 642, 390, 642, 390, 664, 287, 664],
                text: 'S.WAGON',
                appearance: {
                  style: {
                    name: 'other',
                    confidence: 0.972,
                  },
                },
                words: [
                  {
                    boundingBox: [289, 644, 383, 644, 382, 665, 289, 665],
                    text: 'S.WAGON',
                    confidence: 0.994,
                  },
                ],
              },
              {
                boundingBox: [571, 643, 693, 644, 692, 666, 571, 663],
                text: 'Previous Reg.',
                appearance: {
                  style: {
                    name: 'other',
                    confidence: 0.972,
                  },
                },
                words: [
                  {
                    boundingBox: [571, 643, 646, 644, 647, 665, 572, 664],
                    text: 'Previous',
                    confidence: 0.993,
                  },
                  {
                    boundingBox: [651, 644, 692, 645, 692, 667, 651, 665],
                    text: 'Reg.',
                    confidence: 0.982,
                  },
                ],
              },
              {
                boundingBox: [131, 683, 178, 682, 180, 702, 130, 702],
                text: 'Fuel:',
                appearance: {
                  style: {
                    name: 'other',
                    confidence: 0.972,
                  },
                },
                words: [
                  {
                    boundingBox: [130, 682, 179, 682, 179, 701, 130, 702],
                    text: 'Fuel:',
                    confidence: 0.997,
                  },
                ],
              },
              {
                boundingBox: [286, 682, 350, 682, 350, 702, 286, 702],
                text: 'Petrol',
                appearance: {
                  style: {
                    name: 'other',
                    confidence: 0.972,
                  },
                },
                words: [
                  {
                    boundingBox: [288, 683, 349, 683, 349, 702, 287, 703],
                    text: 'Petrol',
                    confidence: 0.996,
                  },
                ],
              },
              {
                boundingBox: [571, 684, 642, 684, 642, 702, 571, 703],
                text: 'country:',
                appearance: {
                  style: {
                    name: 'other',
                    confidence: 0.972,
                  },
                },
                words: [
                  {
                    boundingBox: [573, 685, 642, 684, 642, 702, 573, 704],
                    text: 'country:',
                    confidence: 0.994,
                  },
                ],
              },
              {
                boundingBox: [129, 722, 229, 722, 229, 742, 129, 743],
                text: 'Man Year:',
                appearance: {
                  style: {
                    name: 'other',
                    confidence: 0.972,
                  },
                },
                words: [
                  {
                    boundingBox: [131, 723, 171, 723, 170, 743, 130, 743],
                    text: 'Man',
                    confidence: 0.995,
                  },
                  {
                    boundingBox: [178, 723, 229, 722, 228, 743, 177, 743],
                    text: 'Year:',
                    confidence: 0.998,
                  },
                ],
              },
              {
                boundingBox: [290, 723, 336, 721, 336, 740, 290, 741],
                text: '2015',
                appearance: {
                  style: {
                    name: 'other',
                    confidence: 0.972,
                  },
                },
                words: [
                  {
                    boundingBox: [290, 722, 335, 721, 336, 740, 291, 741],
                    text: '2015',
                    confidence: 0.993,
                  },
                ],
              },
              {
                boundingBox: [572, 718, 755, 718, 755, 740, 572, 740],
                text: 'Previous registration:',
                appearance: {
                  style: {
                    name: 'other',
                    confidence: 0.972,
                  },
                },
                words: [
                  {
                    boundingBox: [573, 720, 647, 720, 647, 740, 572, 740],
                    text: 'Previous',
                    confidence: 0.995,
                  },
                  {
                    boundingBox: [651, 720, 755, 719, 755, 741, 651, 740],
                    text: 'registration:',
                    confidence: 0.991,
                  },
                ],
              },
              {
                boundingBox: [129, 762, 201, 763, 201, 783, 129, 782],
                text: 'Rating:',
                appearance: {
                  style: {
                    name: 'other',
                    confidence: 0.972,
                  },
                },
                words: [
                  {
                    boundingBox: [131, 763, 201, 763, 201, 784, 130, 783],
                    text: 'Rating:',
                    confidence: 0.955,
                  },
                ],
              },
              {
                boundingBox: [293, 762, 340, 759, 340, 777, 294, 779],
                text: '1990',
                appearance: {
                  style: {
                    name: 'other',
                    confidence: 0.972,
                  },
                },
                words: [
                  {
                    boundingBox: [293, 761, 336, 759, 337, 777, 294, 779],
                    text: '1990',
                    confidence: 0.991,
                  },
                ],
              },
              {
                boundingBox: [693, 754, 879, 752, 879, 773, 693, 775],
                text: 'Registered Owner(s)',
                appearance: {
                  style: {
                    name: 'other',
                    confidence: 0.972,
                  },
                },
                words: [
                  {
                    boundingBox: [694, 755, 790, 753, 789, 774, 694, 775],
                    text: 'Registered',
                    confidence: 0.995,
                  },
                  {
                    boundingBox: [794, 753, 879, 753, 878, 774, 794, 774],
                    text: 'Owner(s)',
                    confidence: 0.996,
                  },
                ],
              },
              {
                boundingBox: [132, 800, 238, 799, 238, 821, 132, 822],
                text: 'Engine No:',
                appearance: {
                  style: {
                    name: 'other',
                    confidence: 0.972,
                  },
                },
                words: [
                  {
                    boundingBox: [134, 801, 198, 800, 197, 822, 133, 822],
                    text: 'Engine',
                    confidence: 0.993,
                  },
                  {
                    boundingBox: [202, 800, 238, 800, 239, 822, 202, 822],
                    text: 'No:',
                    confidence: 0.993,
                  },
                ],
              },
              {
                boundingBox: [291, 799, 424, 797, 424, 817, 291, 819],
                text: 'FA20-J988388',
                appearance: {
                  style: {
                    name: 'other',
                    confidence: 0.972,
                  },
                },
                words: [
                  {
                    boundingBox: [291, 800, 423, 798, 423, 817, 292, 820],
                    text: 'FA20-J988388',
                    confidence: 0.993,
                  },
                ],
              },
              {
                boundingBox: [578, 783, 613, 783, 612, 802, 577, 802],
                text: 'PIN:',
                appearance: {
                  style: {
                    name: 'other',
                    confidence: 0.972,
                  },
                },
                words: [
                  {
                    boundingBox: [577, 783, 612, 783, 612, 802, 577, 802],
                    text: 'PIN:',
                    confidence: 0.979,
                  },
                ],
              },
              {
                boundingBox: [693, 780, 817, 779, 818, 798, 693, 800],
                text: 'P051964383W',
                appearance: {
                  style: {
                    name: 'other',
                    confidence: 0.972,
                  },
                },
                words: [
                  {
                    boundingBox: [693, 780, 810, 780, 809, 799, 694, 800],
                    text: 'P051964383W',
                    confidence: 0.955,
                  },
                ],
              },
              {
                boundingBox: [575, 811, 633, 811, 633, 829, 575, 828],
                text: 'Name:',
                appearance: {
                  style: {
                    name: 'other',
                    confidence: 0.972,
                  },
                },
                words: [
                  {
                    boundingBox: [575, 811, 633, 812, 633, 829, 575, 829],
                    text: 'Name:',
                    confidence: 0.994,
                  },
                ],
              },
              {
                boundingBox: [692, 808, 932, 804, 933, 824, 692, 830],
                text: 'LOTA CAR SALES LIMITED',
                appearance: {
                  style: {
                    name: 'other',
                    confidence: 0.972,
                  },
                },
                words: [
                  {
                    boundingBox: [693, 809, 739, 807, 739, 829, 693, 830],
                    text: 'LOTA',
                    confidence: 0.991,
                  },
                  {
                    boundingBox: [744, 807, 783, 806, 783, 827, 743, 828],
                    text: 'CAR',
                    confidence: 0.998,
                  },
                  {
                    boundingBox: [789, 806, 851, 805, 850, 826, 789, 827],
                    text: 'SALES',
                    confidence: 0.998,
                  },
                  {
                    boundingBox: [857, 805, 931, 804, 930, 825, 856, 826],
                    text: 'LIMITED',
                    confidence: 0.995,
                  },
                ],
              },
              {
                boundingBox: [134, 840, 190, 841, 189, 860, 134, 859],
                text: 'Color:',
                appearance: {
                  style: {
                    name: 'other',
                    confidence: 0.972,
                  },
                },
                words: [
                  {
                    boundingBox: [134, 840, 190, 841, 189, 860, 134, 859],
                    text: 'Color:',
                    confidence: 0.994,
                  },
                ],
              },
              {
                boundingBox: [292, 837, 365, 837, 364, 858, 292, 857],
                text: 'BLACK',
                appearance: {
                  style: {
                    name: 'other',
                    confidence: 0.972,
                  },
                },
                words: [
                  {
                    boundingBox: [292, 838, 357, 838, 358, 859, 293, 858],
                    text: 'BLACK',
                    confidence: 0.971,
                  },
                ],
              },
              {
                boundingBox: [576, 837, 650, 837, 650, 854, 576, 855],
                text: 'Box No .:',
                appearance: {
                  style: {
                    name: 'other',
                    confidence: 0.972,
                  },
                },
                words: [
                  {
                    boundingBox: [576, 838, 608, 837, 608, 855, 576, 855],
                    text: 'Box',
                    confidence: 0.994,
                  },
                  {
                    boundingBox: [613, 837, 634, 837, 633, 855, 613, 855],
                    text: 'No',
                    confidence: 0.998,
                  },
                  {
                    boundingBox: [637, 837, 650, 838, 650, 855, 637, 855],
                    text: '.:',
                    confidence: 0.956,
                  },
                ],
              },
              {
                boundingBox: [695, 834, 746, 834, 746, 853, 695, 852],
                text: '42185',
                appearance: {
                  style: {
                    name: 'other',
                    confidence: 0.972,
                  },
                },
                words: [
                  {
                    boundingBox: [695, 834, 745, 834, 745, 853, 695, 852],
                    text: '42185',
                    confidence: 0.996,
                  },
                ],
              },
              {
                boundingBox: [295, 874, 389, 874, 390, 897, 295, 897],
                text: '06-Sep-21',
                appearance: {
                  style: {
                    name: 'other',
                    confidence: 0.972,
                  },
                },
                words: [
                  {
                    boundingBox: [296, 876, 388, 874, 389, 897, 296, 897],
                    text: '06-Sep-21',
                    confidence: 0.994,
                  },
                ],
              },
              {
                boundingBox: [578, 864, 627, 864, 626, 882, 578, 882],
                text: 'Code:',
                appearance: {
                  style: {
                    name: 'other',
                    confidence: 0.972,
                  },
                },
                words: [
                  {
                    boundingBox: [578, 864, 626, 864, 626, 882, 578, 882],
                    text: 'Code:',
                    confidence: 0.994,
                  },
                ],
              },
              {
                boundingBox: [694, 861, 747, 860, 747, 879, 694, 879],
                text: '80100',
                appearance: {
                  style: {
                    name: 'other',
                    confidence: 0.972,
                  },
                },
                words: [
                  {
                    boundingBox: [694, 860, 745, 860, 745, 879, 694, 879],
                    text: '80100',
                    confidence: 0.993,
                  },
                ],
              },
              {
                boundingBox: [132, 880, 235, 878, 236, 898, 132, 900],
                text: 'Reg. Date:',
                appearance: {
                  style: {
                    name: 'other',
                    confidence: 0.972,
                  },
                },
                words: [
                  {
                    boundingBox: [135, 880, 180, 879, 178, 900, 133, 900],
                    text: 'Reg.',
                    confidence: 0.989,
                  },
                  {
                    boundingBox: [184, 879, 236, 879, 234, 898, 182, 900],
                    text: 'Date:',
                    confidence: 0.997,
                  },
                ],
              },
              {
                boundingBox: [579, 891, 627, 892, 626, 909, 578, 909],
                text: 'Town:',
                appearance: {
                  style: {
                    name: 'other',
                    confidence: 0.972,
                  },
                },
                words: [
                  {
                    boundingBox: [579, 891, 626, 891, 626, 909, 579, 908],
                    text: 'Town:',
                    confidence: 0.997,
                  },
                ],
              },
              {
                boundingBox: [694, 888, 780, 889, 779, 908, 693, 907],
                text: 'Mombasa',
                appearance: {
                  style: {
                    name: 'other',
                    confidence: 0.972,
                  },
                },
                words: [
                  {
                    boundingBox: [694, 889, 777, 890, 777, 909, 694, 908],
                    text: 'Mombasa',
                    confidence: 0.994,
                  },
                ],
              },
              {
                boundingBox: [137, 918, 266, 917, 267, 939, 137, 941],
                text: 'Gross weight:',
                appearance: {
                  style: {
                    name: 'other',
                    confidence: 0.972,
                  },
                },
                words: [
                  {
                    boundingBox: [138, 920, 192, 919, 192, 940, 138, 940],
                    text: 'Gross',
                    confidence: 0.995,
                  },
                  {
                    boundingBox: [196, 919, 267, 918, 267, 940, 196, 940],
                    text: 'weight:',
                    confidence: 0.995,
                  },
                ],
              },
              {
                boundingBox: [297, 916, 361, 915, 361, 934, 297, 935],
                text: '1895.0',
                appearance: {
                  style: {
                    name: 'other',
                    confidence: 0.972,
                  },
                },
                words: [
                  {
                    boundingBox: [297, 917, 357, 915, 357, 935, 298, 936],
                    text: '1895.0',
                    confidence: 0.994,
                  },
                ],
              },
              {
                boundingBox: [135, 959, 186, 958, 187, 979, 135, 979],
                text: 'Duty:',
                appearance: {
                  style: {
                    name: 'other',
                    confidence: 0.972,
                  },
                },
                words: [
                  {
                    boundingBox: [136, 958, 187, 958, 187, 978, 136, 979],
                    text: 'Duty:',
                    confidence: 0.994,
                  },
                ],
              },
              {
                boundingBox: [295, 955, 338, 954, 338, 972, 295, 972],
                text: 'Paid',
                appearance: {
                  style: {
                    name: 'other',
                    confidence: 0.972,
                  },
                },
                words: [
                  {
                    boundingBox: [295, 954, 335, 954, 335, 972, 295, 972],
                    text: 'Paid',
                    confidence: 0.988,
                  },
                ],
              },
              {
                boundingBox: [138, 996, 406, 992, 406, 1014, 138, 1018],
                text: 'Number of previous owners:0',
                appearance: {
                  style: {
                    name: 'other',
                    confidence: 0.972,
                  },
                },
                words: [
                  {
                    boundingBox: [139, 998, 212, 996, 212, 1017, 139, 1018],
                    text: 'Number',
                    confidence: 0.997,
                  },
                  {
                    boundingBox: [217, 996, 235, 995, 234, 1017, 216, 1017],
                    text: 'of',
                    confidence: 0.998,
                  },
                  {
                    boundingBox: [239, 995, 317, 994, 316, 1016, 239, 1017],
                    text: 'previous',
                    confidence: 0.996,
                  },
                  {
                    boundingBox: [322, 994, 405, 993, 404, 1015, 321, 1016],
                    text: 'owners:0',
                    confidence: 0.994,
                  },
                ],
              },
              {
                boundingBox: [140, 1032, 345, 1029, 346, 1052, 140, 1054],
                text: 'For official use only :-',
                appearance: {
                  style: {
                    name: 'other',
                    confidence: 0.972,
                  },
                },
                words: [
                  {
                    boundingBox: [140, 1034, 172, 1033, 172, 1054, 140, 1054],
                    text: 'For',
                    confidence: 0.998,
                  },
                  {
                    boundingBox: [177, 1033, 245, 1032, 244, 1053, 177, 1054],
                    text: 'official',
                    confidence: 0.996,
                  },
                  {
                    boundingBox: [249, 1032, 286, 1031, 285, 1053, 248, 1053],
                    text: 'use',
                    confidence: 0.998,
                  },
                  {
                    boundingBox: [290, 1031, 328, 1030, 327, 1053, 289, 1053],
                    text: 'only',
                    confidence: 0.991,
                  },
                  {
                    boundingBox: [333, 1030, 346, 1029, 345, 1053, 332, 1053],
                    text: ':-',
                    confidence: 0.764,
                  },
                ],
              },
              {
                boundingBox: [141, 1065, 339, 1060, 339, 1084, 141, 1087],
                text: 'Authorising Signature',
                appearance: {
                  style: {
                    name: 'other',
                    confidence: 0.972,
                  },
                },
                words: [
                  {
                    boundingBox: [143, 1068, 243, 1064, 242, 1086, 142, 1087],
                    text: 'Authorising',
                    confidence: 0.991,
                  },
                  {
                    boundingBox: [247, 1064, 335, 1061, 335, 1085, 246, 1086],
                    text: 'Signature',
                    confidence: 0.995,
                  },
                ],
              },
              {
                boundingBox: [620, 1083, 990, 1080, 990, 1119, 620, 1124],
                text: 'LOTA CAR SALES LTD',
                appearance: {
                  style: {
                    name: 'other',
                    confidence: 0.972,
                  },
                },
                words: [
                  {
                    boundingBox: [622, 1084, 709, 1082, 708, 1124, 621, 1125],
                    text: 'LOTA',
                    confidence: 0.993,
                  },
                  {
                    boundingBox: [721, 1082, 790, 1081, 789, 1123, 720, 1124],
                    text: 'CAR',
                    confidence: 0.995,
                  },
                  {
                    boundingBox: [804, 1081, 913, 1080, 912, 1121, 803, 1122],
                    text: 'SALES',
                    confidence: 0.905,
                  },
                  {
                    boundingBox: [922, 1080, 986, 1080, 985, 1120, 921, 1121],
                    text: 'LTD',
                    confidence: 0.998,
                  },
                ],
              },
              {
                boundingBox: [653, 1133, 958, 1132, 959, 1165, 653, 1167],
                text: 'P.O.Box 42185 80100',
                appearance: {
                  style: {
                    name: 'other',
                    confidence: 0.945,
                  },
                },
                words: [
                  {
                    boundingBox: [654, 1134, 752, 1134, 752, 1167, 654, 1168],
                    text: 'P.O.Box',
                    confidence: 0.994,
                  },
                  {
                    boundingBox: [759, 1134, 851, 1134, 850, 1166, 758, 1167],
                    text: '42185',
                    confidence: 0.765,
                  },
                  {
                    boundingBox: [868, 1134, 956, 1133, 955, 1165, 868, 1166],
                    text: '80100',
                    confidence: 0.997,
                  },
                ],
              },
              {
                boundingBox: [144, 1257, 222, 1255, 222, 1274, 145, 1276],
                text: '07/09/21',
                appearance: {
                  style: {
                    name: 'other',
                    confidence: 0.972,
                  },
                },
                words: [
                  {
                    boundingBox: [145, 1258, 222, 1256, 221, 1274, 145, 1276],
                    text: '07/09/21',
                    confidence: 0.991,
                  },
                ],
              },
              {
                boundingBox: [578, 1241, 720, 1237, 721, 1256, 578, 1261],
                text: 'Usual signature:',
                appearance: {
                  style: {
                    name: 'other',
                    confidence: 0.972,
                  },
                },
                words: [
                  {
                    boundingBox: [578, 1242, 626, 1240, 626, 1260, 578, 1262],
                    text: 'Usual',
                    confidence: 0.993,
                  },
                  {
                    boundingBox: [630, 1240, 720, 1237, 720, 1257, 630, 1260],
                    text: 'signature:',
                    confidence: 0.991,
                  },
                ],
              },
              {
                boundingBox: [147, 1296, 257, 1291, 258, 1311, 148, 1316],
                text: 'Important :-',
                appearance: {
                  style: {
                    name: 'other',
                    confidence: 0.972,
                  },
                },
                words: [
                  {
                    boundingBox: [148, 1297, 236, 1293, 237, 1312, 149, 1316],
                    text: 'Important',
                    confidence: 0.95,
                  },
                  {
                    boundingBox: [240, 1292, 257, 1292, 258, 1312, 241, 1312],
                    text: ':-',
                    confidence: 0.996,
                  },
                ],
              },
              {
                boundingBox: [150, 1323, 987, 1290, 988, 1308, 151, 1343],
                text: 'The person in whose name a vehicle is registered shall unless the contrary be proved, be deemed',
                appearance: {
                  style: {
                    name: 'other',
                    confidence: 0.972,
                  },
                },
                words: [
                  {
                    boundingBox: [151, 1324, 183, 1323, 183, 1342, 151, 1344],
                    text: 'The',
                    confidence: 0.995,
                  },
                  {
                    boundingBox: [187, 1323, 249, 1320, 250, 1340, 187, 1342],
                    text: 'person',
                    confidence: 0.997,
                  },
                  {
                    boundingBox: [253, 1319, 271, 1319, 272, 1339, 254, 1339],
                    text: 'in',
                    confidence: 0.998,
                  },
                  {
                    boundingBox: [276, 1318, 335, 1316, 335, 1336, 276, 1339],
                    text: 'whose',
                    confidence: 0.991,
                  },
                  {
                    boundingBox: [338, 1316, 389, 1313, 389, 1334, 339, 1336],
                    text: 'name',
                    confidence: 0.987,
                  },
                  {
                    boundingBox: [393, 1313, 405, 1313, 405, 1333, 393, 1334],
                    text: 'a',
                    confidence: 0.998,
                  },
                  {
                    boundingBox: [410, 1312, 472, 1310, 471, 1331, 410, 1333],
                    text: 'vehicle',
                    confidence: 0.608,
                  },
                  {
                    boundingBox: [476, 1310, 491, 1309, 491, 1330, 475, 1331],
                    text: 'is',
                    confidence: 0.998,
                  },
                  {
                    boundingBox: [495, 1309, 583, 1305, 582, 1326, 495, 1330],
                    text: 'registered',
                    confidence: 0.993,
                  },
                  {
                    boundingBox: [587, 1305, 627, 1303, 627, 1324, 586, 1326],
                    text: 'shall',
                    confidence: 0.997,
                  },
                  {
                    boundingBox: [631, 1303, 686, 1301, 685, 1322, 631, 1324],
                    text: 'unless',
                    confidence: 0.994,
                  },
                  {
                    boundingBox: [690, 1301, 719, 1300, 718, 1320, 689, 1322],
                    text: 'the',
                    confidence: 0.998,
                  },
                  {
                    boundingBox: [723, 1300, 792, 1297, 791, 1317, 722, 1320],
                    text: 'contrary',
                    confidence: 0.994,
                  },
                  {
                    boundingBox: [796, 1297, 818, 1296, 817, 1316, 795, 1317],
                    text: 'be',
                    confidence: 0.996,
                  },
                  {
                    boundingBox: [822, 1296, 886, 1294, 885, 1313, 821, 1316],
                    text: 'proved,',
                    confidence: 0.996,
                  },
                  {
                    boundingBox: [890, 1294, 912, 1293, 911, 1312, 889, 1313],
                    text: 'be',
                    confidence: 0.996,
                  },
                  {
                    boundingBox: [916, 1293, 985, 1290, 984, 1309, 915, 1312],
                    text: 'deemed',
                    confidence: 0.996,
                  },
                ],
              },
              {
                boundingBox: [151, 1348, 955, 1316, 956, 1336, 151, 1370],
                text: 'to be the owner of the vehicle. Before you use any vehicle on the road,please ensure that your',
                appearance: {
                  style: {
                    name: 'other',
                    confidence: 0.972,
                  },
                },
                words: [
                  {
                    boundingBox: [151, 1350, 165, 1349, 165, 1369, 152, 1370],
                    text: 'to',
                    confidence: 0.991,
                  },
                  {
                    boundingBox: [169, 1349, 193, 1348, 193, 1368, 169, 1369],
                    text: 'be',
                    confidence: 0.998,
                  },
                  {
                    boundingBox: [197, 1348, 227, 1346, 227, 1367, 197, 1368],
                    text: 'the',
                    confidence: 0.998,
                  },
                  {
                    boundingBox: [231, 1346, 287, 1343, 287, 1365, 232, 1367],
                    text: 'owner',
                    confidence: 0.997,
                  },
                  {
                    boundingBox: [291, 1343, 311, 1342, 311, 1364, 291, 1365],
                    text: 'of',
                    confidence: 0.996,
                  },
                  {
                    boundingBox: [315, 1342, 342, 1341, 343, 1363, 315, 1364],
                    text: 'the',
                    confidence: 0.902,
                  },
                  {
                    boundingBox: [347, 1341, 415, 1338, 415, 1360, 347, 1362],
                    text: 'vehicle.',
                    confidence: 0.982,
                  },
                  {
                    boundingBox: [419, 1337, 477, 1335, 477, 1357, 419, 1360],
                    text: 'Before',
                    confidence: 0.656,
                  },
                  {
                    boundingBox: [481, 1335, 514, 1333, 514, 1356, 481, 1357],
                    text: 'you',
                    confidence: 0.998,
                  },
                  {
                    boundingBox: [519, 1333, 551, 1332, 551, 1354, 519, 1356],
                    text: 'use',
                    confidence: 0.998,
                  },
                  {
                    boundingBox: [555, 1332, 587, 1330, 587, 1353, 555, 1354],
                    text: 'any',
                    confidence: 0.998,
                  },
                  {
                    boundingBox: [591, 1330, 651, 1328, 651, 1350, 591, 1353],
                    text: 'vehicle',
                    confidence: 0.993,
                  },
                  {
                    boundingBox: [655, 1328, 677, 1327, 677, 1349, 655, 1350],
                    text: 'on',
                    confidence: 0.998,
                  },
                  {
                    boundingBox: [681, 1327, 709, 1325, 709, 1347, 681, 1349],
                    text: 'the',
                    confidence: 0.998,
                  },
                  {
                    boundingBox: [713, 1325, 813, 1321, 812, 1342, 713, 1347],
                    text: 'road,please',
                    confidence: 0.971,
                  },
                  {
                    boundingBox: [817, 1321, 876, 1319, 875, 1339, 817, 1342],
                    text: 'ensure',
                    confidence: 0.997,
                  },
                  {
                    boundingBox: [880, 1319, 912, 1318, 911, 1338, 879, 1339],
                    text: 'that',
                    confidence: 0.988,
                  },
                  {
                    boundingBox: [916, 1318, 955, 1316, 955, 1335, 915, 1337],
                    text: 'your',
                    confidence: 0.991,
                  },
                ],
              },
              {
                boundingBox: [147, 1375, 998, 1340, 999, 1360, 148, 1398],
                text: 'insurance against third party rish is in order. It is a serious offence to drive without proper insurance.',
                appearance: {
                  style: {
                    name: 'other',
                    confidence: 0.972,
                  },
                },
                words: [
                  {
                    boundingBox: [148, 1378, 236, 1373, 237, 1394, 150, 1399],
                    text: 'insurance',
                    confidence: 0.994,
                  },
                  {
                    boundingBox: [240, 1373, 307, 1369, 308, 1391, 242, 1394],
                    text: 'against',
                    confidence: 0.992,
                  },
                  {
                    boundingBox: [311, 1369, 349, 1367, 350, 1389, 312, 1391],
                    text: 'third',
                    confidence: 0.934,
                  },
                  {
                    boundingBox: [353, 1367, 399, 1364, 400, 1387, 355, 1389],
                    text: 'party',
                    confidence: 0.994,
                  },
                  {
                    boundingBox: [403, 1364, 434, 1363, 435, 1385, 404, 1387],
                    text: 'rish',
                    confidence: 0.785,
                  },
                  {
                    boundingBox: [438, 1362, 454, 1362, 455, 1384, 439, 1385],
                    text: 'is',
                    confidence: 0.998,
                  },
                  {
                    boundingBox: [458, 1362, 475, 1361, 476, 1383, 459, 1384],
                    text: 'in',
                    confidence: 0.997,
                  },
                  {
                    boundingBox: [479, 1360, 530, 1358, 531, 1381, 480, 1383],
                    text: 'order.',
                    confidence: 0.991,
                  },
                  {
                    boundingBox: [535, 1358, 546, 1357, 547, 1380, 535, 1381],
                    text: 'It',
                    confidence: 0.97,
                  },
                  {
                    boundingBox: [550, 1357, 566, 1357, 567, 1379, 551, 1380],
                    text: 'is',
                    confidence: 0.995,
                  },
                  {
                    boundingBox: [570, 1356, 581, 1356, 582, 1379, 571, 1379],
                    text: 'a',
                    confidence: 0.994,
                  },
                  {
                    boundingBox: [586, 1356, 648, 1353, 648, 1376, 586, 1378],
                    text: 'serious',
                    confidence: 0.994,
                  },
                  {
                    boundingBox: [652, 1353, 714, 1350, 715, 1373, 653, 1375],
                    text: 'offence',
                    confidence: 0.995,
                  },
                  {
                    boundingBox: [719, 1350, 736, 1350, 736, 1372, 719, 1372],
                    text: 'to',
                    confidence: 0.998,
                  },
                  {
                    boundingBox: [740, 1349, 781, 1348, 781, 1370, 740, 1371],
                    text: 'drive',
                    confidence: 0.993,
                  },
                  {
                    boundingBox: [785, 1348, 846, 1346, 846, 1367, 786, 1369],
                    text: 'without',
                    confidence: 0.991,
                  },
                  {
                    boundingBox: [850, 1345, 906, 1344, 906, 1364, 851, 1367],
                    text: 'proper',
                    confidence: 0.996,
                  },
                  {
                    boundingBox: [910, 1343, 998, 1341, 998, 1360, 910, 1364],
                    text: 'insurance.',
                    confidence: 0.958,
                  },
                ],
              },
            ],
          },
        ],
      },
    };
    this.ocrResultReadyEvent.emit(JSON.stringify(x)); */
  }
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
          this.ocrResultReadyEvent.emit(JSON.stringify(body));
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
