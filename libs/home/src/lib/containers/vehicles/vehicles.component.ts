import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { List } from 'immutable';
import { MatButtonToggleGroup, MatPaginator, MatSort, MatTableDataSource, PageEvent } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

import { CoordBikeshare, CoordBikeshareService } from '../../services/coord-bikeshare.service';

@Component({
  selector: 'ngx-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit, OnDestroy {
  @ViewChild('vehiclesView') public vehiclesView: MatButtonToggleGroup;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  crumbs = List([
    { name: 'Dashboard', link: '/dashboard' },
    { name: 'Grid', link: '/dashboard/grid' },
    { name: 'Grid List' }
  ]);

  vehiclesDataSource: MatTableDataSource<Partial<CoordBikeshare>>;
  renderData: BehaviorSubject<Partial<CoordBikeshare>[]>;
  selection = new SelectionModel<Partial<CoordBikeshare>>(false, []);

  constructor(private router: Router, private accountService: CoordBikeshareService) {}

  ngOnInit() {
    this.accountService.getAll().toPromise().then( accounts => {
      this.vehiclesDataSource = new MatTableDataSource<Partial<CoordBikeshare>>(accounts);
      this.vehiclesDataSource.paginator = this.paginator;
      this.renderData = this.vehiclesDataSource.connect();
    })
  }

  ngOnDestroy() {}

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.vehiclesDataSource.filter = filterValue;
  }

  async onClick(account: Partial<CoordBikeshare>) {
    this.selection.toggle(account);
    const _account = await this.accountService.getById(account.id.value).toPromise();
    console.log(_account)
  }
}
