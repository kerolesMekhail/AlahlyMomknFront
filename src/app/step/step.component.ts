import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Router } from '@angular/router';
import { StepService } from '../Services/step.service';


@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent implements OnInit {
  public steps:any[]=[];
  public selectedIndex:any=0;
  public item:any={};
  public isEdit:boolean=false;
  public done:boolean=false;

  constructor(private Step:StepService,private router:Router) { }

  ngOnInit(): void {
    this.getAllSteps();
  }

  //----------------------------------------------StepPart----------------------------------
  getAllSteps(){
    this.Step.getAllSteps().subscribe((data) => {
    if (data) {
                this.steps=data;
                if(this.steps.length>0)
                {
                  this.done=true;
                }
              }
            });
      } 

  addNewStep(){
    let number=this.steps.length ;
    let step={'stepName':'Step' ,'stepNumber': number}
    this.isEdit=false;
    this.Step.addStep(step).subscribe((data) => {
    if (data) {
          this.steps.push(data);
           this.selectedIndex=this.steps.length-1;
           console.log("selectedIndex",this.selectedIndex);
              }
            });
   }    

  deleteStep(Id:any,index:any){
    let obj=this.steps.find(x=>x.Id == Id);
    this.Step.deleteStep(obj.Id).subscribe((data) => {
    if (data) 
    {
      this.steps.splice(index);
      this.selectedIndex=this.steps.length-1;
    }
  });
}

//-----------------------------------------ItemPart-------------------------------------------------
  
Add_EditItem()
{
  if(this.isEdit)
  {
    this.Step.addAndEditItem(this.item).subscribe((data) => {
    if (data) {
      for(let x=0; x<  this.steps[this.selectedIndex]["items"].length; x++)
      {
        if(this.steps[this.selectedIndex]["items"][x].Id==this.item.Id)
        {
          this.steps[this.selectedIndex]["items"][x]=data;
        }
      }
      this.ClearForm();
      this.getAllSteps();

    }
  });
 }
 else{
  this.item.stepId=this.steps[this.selectedIndex]["Id"];
  console.log("itemsssssss",this.item);
  console.log(this.steps[this.selectedIndex]["Id"]);
  this.Step.addItem(this.item).subscribe((data) => {
  if (data) 
  {
    console.log(data);
    this.steps[this.selectedIndex]["items"].push(data);
    this.getAllSteps();
    this.ClearForm();
  }
  });
}  
}

deleteItem(Id:any,index:any)
{
  this.Step.deleteItem(Id).subscribe((data) => {
    if (data) 
    {
      this.steps[this.selectedIndex]['items'].splice(index);
      this.getAllSteps();
      this.ClearForm();
    }
});
}

fillForm(item:any)
  {
    console.log("item",item);
    this.item.title=item.Title;
    this.item.description=item.Description;
    this.item.Id=item.Id;
    this.item.stepId=item.StepId;
    this.isEdit=true;
  }

ClearForm()
  {
    this.item.title="";
    this.item.description="";
    this.isEdit=false;
  }

Next(index:any)
  {  
    this.isEdit=false;
    this.selectedIndex=index+1;
  }

Pervious(index:any)
  {
    this.selectedIndex=index-1;
    this.isEdit=false;
  }
 
  
}
