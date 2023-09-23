import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline-grid',
  templateUrl: './timeline-grid.component.html',
  styleUrls: ['./timeline-grid.component.css']
})

export class TimelineGridComponent implements OnInit{
  data: Object[] = [];
  isLoading: boolean = true;
  displayedColumns = ['Project Name', 'Status', 'Sponsor', 'Start', 'End'];

  constructor() { }

  ngOnInit(): void {
    this.data = [
      {'Project Name': 'Virtual Care program', Status: 'Complete', Sponsor: 'Dr. Gaurav', Start: 'May 23', End: 'Oct 23'},
      {'Project Name': 'Virtual Care program', Status: 'Complete', Sponsor: 'Dr. Gaurav', Start: 'May 23', End: 'Oct 23'},
      {'Project Name': 'Virtual Care program', Status: 'Complete', Sponsor: 'Dr. Gaurav', Start: 'May 23', End: 'Oct 23'},
      {'Project Name': 'Virtual Care program', Status: 'Complete', Sponsor: 'Dr. Gaurav', Start: 'May 23', End: 'Oct 23'},
      {'Project Name': 'Virtual Care program', Status: 'Complete', Sponsor: 'Dr. Gaurav', Start: 'May 23', End: 'Oct 23'},
    ];
    
    this.activate();
  }

  activate() {
    this.isLoading = false;
  }
}
