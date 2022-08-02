import {Component, OnInit, ViewChild} from '@angular/core';
import {FeedbackService} from "../../services/feedback.service";
import {Feedback} from "../../models/feedback";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  feedbacks: Feedback[] = [];
  dataSource: MatTableDataSource<Feedback>;
  displayedColumns = ['feedbackDate', 'username', 'ratingValue', 'feedbackMessage'];

  constructor(private feedbackService: FeedbackService) { }

  ngOnInit(): void {
    this.feedbackService.getFeedbacks().subscribe((feedbacks) => {
      console.log(feedbacks);
      this.dataSource = new MatTableDataSource(feedbacks);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
