import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';
import { AuthSericeService, UserDetails  } from 'src/app/services/auth-serice.service';

declare var M:any;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  details: UserDetails;

  constructor(public userService: UserService,private auth: AuthSericeService) { }

  ngOnInit() {
    
    this.auth.profile().subscribe(user => {
      this.details = user;
    }, (err) => {
      console.error('hola',err);
    });
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
    this.auth.getUsers()
      .subscribe(res => {
        this.auth.users = res as User[];
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
