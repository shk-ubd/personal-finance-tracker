import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, inject, PLATFORM_ID } from '@angular/core';
import { ChartModule } from 'primeng/chart';
@Component({
  selector: 'app-dashboard',
  imports: [ChartModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  data: any;

  options: any;

  platformId = inject(PLATFORM_ID);


  constructor(private cd: ChangeDetectorRef) {}

  
  ngOnInit() {
      this.initChart();
  }

  initChart() {
      if (isPlatformBrowser(this.platformId)) {
          const documentStyle = getComputedStyle(document.documentElement);
          const textColor = documentStyle.getPropertyValue('--p-text-color');
          const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
          const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

          this.data = {
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [
                  {
                      label: 'First Dataset',
                      data: [65, 59, 80, 81, 56, 55, 40],
                      fill: false,
                      borderColor: documentStyle.getPropertyValue('--primary-red'),
                      tension: 0
                  },
                  {
                      label: 'Second Dataset',
                      data: [28, 48, 40, 19, 86, 27, 90],
                      fill: false,
                      borderColor: documentStyle.getPropertyValue('--primary-green'),
                      tension: 0
                  }
              ]
          };

          this.options = {
              maintainAspectRatio: false,
              aspectRatio: 0.6,
              plugins: {
                  legend: {
                      labels: {
                          color: textColor
                      }
                  }
              },
              scales: {
                  x: {
                      ticks: {
                          color: textColorSecondary
                      },
                  },
                  y: {
                      ticks: {
                          color: textColorSecondary
                      },
                  }
              }
          };
          this.cd.markForCheck()
      }
  }

}
