import { TestBed, inject } from '@angular/core/testing';

import { SuccessReportService } from './success-report.service';

describe('SuccessReportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SuccessReportService]
    });
  });

  it('should be created', inject([SuccessReportService], (service: SuccessReportService) => {
    expect(service).toBeTruthy();
  }));
});
