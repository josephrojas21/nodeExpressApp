import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router} from '@angular/router';
import { User } from 'src/app/models/user';


declare var M:any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  confirmPassword = "";

  constructor(public userService: UserService, private route: Router) { }

  ngOnInit() {

  }

  addUser(form: NgForm){
    if(this.confirmPassword === form.value.password && form){
      this.userService.postUser(form.value)
      .subscribe(res => {
        this.resetForm(form);
        M.toast({html: 'registrado exitosamente'});
        this.route.navigateByUrl('/users')
      });
        
    }else{
      M.toast({html: 'las contraseñas no coniciden'});
    }
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.userService.selectedUser = new User();
    }

  }

}
