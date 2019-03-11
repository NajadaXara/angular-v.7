import { Component, OnInit } from '@angular/core';

import { User } from '../../models';
import { UserService } from '../../services';
import { Leave } from '../../models';
import { LeaveService } from '../../services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  currentUser: User;
  users: User[] = [];
  leaves: Leave[] = [];

  constructor(private leaveService: LeaveService) {
  }

  ngOnInit() {
    this.loadAllLeaves();
  }
  private loadAllLeaves() {
    this.leaveService.getAll().subscribe(leaves => { this.leaves = leaves; });
  }
}
