import { Component, OnInit } from '@angular/core';
import { RecordsService } from "../records.service";

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css'],
  providers: [RecordsService]
})
export class EmpComponent implements OnInit {
  infoReceived1: string[] = [];

  infoReceived2: string[] = [];

  infoReceived3: string[] = [];

  getInfoFromService1() {

    this.infoReceived1 = this.rservice.getInfo1()

  }

  getInfoFromService2() {

    this.infoReceived2 = this.rservice.getInfo2()

  }

  getInfoFromService3() {

    this.infoReceived3 = this.rservice.getInfo3()

  }
  constructor(private rservice: RecordsService) { }

  ngOnInit(): void {
  }

}
