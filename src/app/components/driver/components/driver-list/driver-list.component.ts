import { Observable } from 'rxjs';
import { DriverListState } from './../../store/driver.reducer';
import { selectDrivers } from './../../store/driver.selectors';
import { getDataActions } from './../../store/driver.actions';
import { Store } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { DriverResponseModel } from './../../models/response-models/driver-response-model';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.scss'],
  providers: [MessageService]
})
export class DriverListComponent implements OnInit, OnDestroy {

  selectedDrivers: DriverResponseModel[]
  drivers$: Observable<DriverListState> = this.store.select(selectDrivers)

  constructor(private store: Store,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.retrieveAll();
    this.isRetrieveAllFail()
  }

  deleteAll() {
    console.log(this.selectedDrivers);
  }

  clearFilter(driversTable: Table) {
    driversTable.clear();
  }

  retrieveAll() {
    this.store.dispatch(getDataActions.invokeRetrieveAll());
  }

  isRetrieveAllFail() {
    this.drivers$.subscribe(state => {
      if (!state.loaded && !state.loading)
        this.messageService.add({ severity: 'error', summary: 'Service Message', detail: 'Retrieve All Failure !' });
    })
  }

  ngOnDestroy(): void {
    this.store.dispatch(getDataActions.retrieveAllCanceled())
  }

}
