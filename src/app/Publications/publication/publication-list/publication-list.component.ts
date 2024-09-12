
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import { Member } from 'src/Model/Member';
import { MemberService } from 'src/app/service/member.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { CreateEditPublicationComponent } from '../create-edit-publication/create-edit-publication.component';
import { DeletePublicationDialogComponent } from '../create-edit-publication/delete-publication-dialog/delete-publication-dialog.component';
import { Publication } from 'src/Model/Publication';
import { PublicationService } from 'src/app/service/publication.service';

@Component({
  selector: 'app-publication-list',
  templateUrl: './publication-list.component.html',
  styleUrls: ['./publication-list.component.css']
})
export class PublicationListComponent implements OnInit, AfterViewInit{

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  
  datasource!:Publication[];
  members:Member[]=[];
  displayedColumns: string[] = ['id', 'type', 'title', 'lien','date','sourcepdf','member','action'];
  sortedData!: [];
  datasourcefilter=new MatTableDataSource(this.datasource);
  constructor(public dialog: MatDialog , private pubService:PublicationService, private memberservice: MemberService) {  }
  
  ngAfterViewInit(): void {
    this.datasourcefilter.paginator = this.paginator;
    this.datasourcefilter.sort = this.sort;
    throw new Error('Method not implemented.');
  }

  
  ngOnInit()
  {
     this.pubService.getPublications().subscribe((a)=>{
      this.datasource=a;
      console.log("the list of publications",this.datasource);
      this.datasourcefilter= new MatTableDataSource(this.datasource);
      console.log("ngOnInit datasource filter",this.datasourcefilter.data);
    });

  }
 


  deletePublication(id:string): void {
    console.log(id)
    this.pubService.deletePublication(id).subscribe(()=>{
      console.log("publication deleted")});
      this.pubService.getPublications().subscribe((a)=>{
        this.datasource = a;
      });      
  }

  opencreate_editDialog(id:string |null): void {
    const dialogRef = this.dialog.open(CreateEditPublicationComponent, {
      width: '500px',
      data: {  publication_id: id }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if(id){
          this.pubService.updatePublication(id,result).subscribe(()=>{console.log("publication update");
            location.reload();
          })
        }
        else{
          this.pubService.addPublication(result).subscribe(()=>{console.log("publication added")});
          location.reload();

        }
      } else {
        console.log('Error occured');
      }
    });
  }

  openDeleteDialog(id:string): void {
    const dialogRef = this.dialog.open(DeletePublicationDialogComponent, {
      width: '300px',
      data: { message: 'Are you sure you want to delete this publication?'}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Execute delete action
        this.deletePublication(id);
        location.reload();

      } else {
        console.log('Delete action canceled');
      }
    });
  }

  applyFilter(event: Event ) {    
    console.log(this.datasourcefilter.data)
    const filterValue = (event.target as HTMLInputElement).value;
    this.datasourcefilter.filter = filterValue.trim().toLowerCase();

    if (this.datasourcefilter.paginator) {
      this.datasourcefilter.paginator.firstPage();
    }
  }


  
}