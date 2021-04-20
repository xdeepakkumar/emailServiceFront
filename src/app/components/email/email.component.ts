import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmailService } from 'src/app/service/email.service';


@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  data = {
    to : "",
    subject : "",
    message : ""
  }

  flag = true;

  constructor(private email: EmailService, private snack: MatSnackBar) { }

  ngOnInit(): void {
  }

  doSubmitForm(){

    if(this.data.to == '' || this.data.message == '' || this.data.subject == ''){
      this.snack.open("fields connot be blank!! ", "OK");
      return ;
    }else{

    this.flag = false;
    this.email.sendEmail(this.data).subscribe(
      response => {
        this.flag = true;
        console.log(response);
        this.snack.open("Email send success!!", "OK");
      },
      error => {
        console.log(error);
        this.snack.open("Email send failed!!", "OK");
      }
    )
    }

  }
}
