import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { LoaderPage } from './loader.page';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('LoaderPage', () => {
  let component: LoaderPage;
  let fixture: ComponentFixture<LoaderPage>;
  let router: Router;

  // beforeEach(waitForAsync()=>{
  //   TestBed.configurateTestingModule({
  //     declarations: [LoaderPage],
  //     imports: [
  //       IonicModule.forRoot()
  //       AppRoutingModule
  //     ]
  //   })
  // }
  // ).compileComponents()

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();

    router = TestBed.get(Router)
  }));

  it('should go to login page after load', () => {
    component.ngOnInit

    expect(router.navigate).toHaveBeenCalledWith(['login'])
  });
});
