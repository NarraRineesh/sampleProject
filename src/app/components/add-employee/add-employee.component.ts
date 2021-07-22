import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employee : Employee
  submitted = false;
  employeeCreateForm: FormGroup;
  constructor(private employeeService: EmployeeService,
     private fb: FormBuilder,
     private toastr: ToastrService) { }
  ngOnInit(): void {
    this.initForm();
  }
  private initForm() {
    this.employeeCreateForm = this.fb.group({
        name: ['', [Validators.required]],
        employeeId: ['', [Validators.required,Validators.min(5)]],
    }
    )
    
}
// getting form controls for validation
get f() {
    return this.employeeCreateForm.controls;
}

  saveEmployee(): void {
    this.submitted = true;
    if(this.employeeCreateForm.valid){
    this.employeeService.create(this.employeeCreateForm.value)
      .subscribe(
        response => {
          console.log(response);
          this.toastr.success('Employee created success.');
          this.employeeCreateForm.reset();
        },
        error => {
          this.toastr.warning(error.error.message)
        });
      }
  }

  

}
