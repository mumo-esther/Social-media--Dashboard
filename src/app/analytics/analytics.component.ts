import { Component } from '@angular/core';

interface AnalyticsData {
  platform: string;
  followers: number;
  engagements: number;
  likes: number;
  comments: number;
}

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent {
  analyticsData: AnalyticsData[] = [
    {
      platform: 'Twitter',
      followers: 10000,
      engagements: 5000,
      likes: 2000,
      comments: 300
    },
    {
      platform: 'Instagram',
      followers: 5000,
      engagements: 3000,
      likes: 1500,
      comments: 200
    },
    {
      platform: 'Facebook',
      followers: 2000,
      engagements: 1000,
      likes: 400,
      comments: 50
    }
  ];
}
