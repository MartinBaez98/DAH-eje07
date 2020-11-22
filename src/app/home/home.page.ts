import { Component } from '@angular/core';
import { profile } from 'console';
import { Users } from '../models/users';
import { UsersService } from '../services/users.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public profiles = [];
  public profilesSpp = [];
  search: string;
  alert: AlertController;

  constructor(private usersService: UsersService) {
    this.profiles.push({
      photo: 'https://images-na.ssl-images-amazon.com/images/I/416NOFLk1dL._AC_.jpg',
      name: 'Martín Báez',
      place: 'Guasave, Sin',
      loveCount: 0,
      likeCount: 0,
      interests: [{description: 'Tricking', color: '#010110'},
                  {description: 'Música', color: '#010101'},
                  {description: 'Deportes', color: '#011100'}]
    });
    this.profiles.push({
      photo: 'https://scontent.fgdl5-2.fna.fbcdn.net/v/t1.0-9/105041189_3371542942889786_1718442896032453481_o.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=gFqoTgtiADEAX88C8jU&_nc_ht=scontent.fgdl5-2.fna&oh=52746b6da5b6bb9e76b0c4cdc0c6a53a&oe=5FDA2D99',
      name: 'Martin Jimenez',
      place: 'Tepic, Nay',
      loveCount: 10,
      likeCount: 15,
      interests: [{description: 'Música', color: '#!10100'},
                  {description: 'Ajedrez', color: '#010100'},
                  {description: 'Futbol', color: '#110110'}]
    });

    this.profilesSpp = this.profiles;
  }

  increseCount(type: number, position: number): void {
    if (type === 0) {
      this.profiles[position].loveCount ++;
    } else{
      this.profiles[position].likeCount ++;
    }
  }

  filter(): void{
    this.profiles = this.profilesSpp;
    if (this.search && this.search.trim()){
      this.profiles = this.profiles.filter((profile) => {
        return (profile.name.toLocaleLowerCase().indexOf(this.search.toLocaleLowerCase()) > -1)
      });
    }
  }

  delete(position: number): void{
    this.profiles.splice(position, 1);
  }


  async showAlert(pos: number){
    const al = await this.alert.create({
      header: 'Alerta',
      message: '¿Convencido de querer eliminar?',
      buttons: [{text: 'No'},
      {text: 'Sí', handler: () => {
          this.delete(pos);
        }
      }]
    });
    await al.present();
  }

}
