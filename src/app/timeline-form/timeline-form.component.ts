import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-timeline-form',
  templateUrl: './timeline-form.component.html',
  styleUrls: ['./timeline-form.component.css']
})
export class TimelineFormComponent implements OnInit{
  isLoading: boolean = true;
  projectForm: FormGroup;
  statusOption: any[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.isLoading = true
    this.statusOption = ['Not Started', 'In Progress', 'Completed'];
    this.route.queryParams.subscribe((queryParams) => {
      console.log(queryParams);
      // Use this when we can store the data for making either new form or edit form
    });

    this.projectForm = new FormGroup({
      ProjectNameFC: new FormControl('', Validators.required),
      StatusFC: new FormControl('Not Started', Validators.required),
      SponsorFC: new FormControl('', Validators.required),
      StartFC: new FormControl(null, Validators.required),
      EndFC: new FormControl(null, Validators.required),
    });

    this.isLoading = false
  }

  onSubmit() {
    const item = {
      projctName: this.projectForm?.controls?.['ProjectNameFC']?.value,
      status: this.projectForm?.controls?.['StatusFC']?.value,
      sponsor: this.projectForm?.controls?.['SponsorFC']?.value,
      start: this.projectForm?.controls?.['StartFC']?.value,
      end: this.projectForm?.controls?.['EndFC']?.value,
    }
    console.log(item);
  }

}
