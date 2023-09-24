import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-timeline-grid',
  templateUrl: './timeline-grid.component.html',
  styleUrls: ['./timeline-grid.component.css']
})

export class TimelineGridComponent implements OnInit{
  data: Object[] = [];
  isLoading: boolean = true;
  displayedColumns = ['Project Name', 'Status', 'Sponsor', 'Start', 'End'];

  constructor(
    private router: Router
  ) { }

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

  addNewProject() {
    this.router.navigate(['/new-project']);
  }
  
  editProject() {
    this.router.navigate(['/new-project'], {queryParams: {id:'001'}});
  }
}
