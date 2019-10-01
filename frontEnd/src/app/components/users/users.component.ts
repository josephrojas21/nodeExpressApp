import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';

declare var M:any;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.getUser();
  }

  addUser(form: NgForm){
    if(form.value._id){
      this.userService.putUser(form.value)
        .subscribe(res => {
          this.resetForm(form);
          M.toast({html: 'Editado exitosamente'});
          this.getUser();
        })
    }else{
      this.userService.postUser(form.value)
      .subscribe(res => {
        this.resetForm(form);
        M.toast({html: 'Guardado exitosamente'});
        this.getUser();
      });
    }
    
    
  }

  getUser(){
    this.userService.getUsers()
      .subscribe(res => {
        this.userService.users = res as User[];
        console.log(res);
        
        
      })
  }

  editUser(user: User){
    this.userService.selectedUser = user;
  }

  deleteUser(_id: string){
    if(confirm('¿Esta seguro  que desea elminarlo? ')){
      this.userService.deleteUser(_id)
      .subscribe(res => {
        this.getUser();
        M.toast({html: 'Eliminado exitosamente'});
      })
    }
    
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.userService.selectedUser = new User();
    }

  }

}
