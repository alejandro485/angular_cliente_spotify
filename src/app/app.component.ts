import { Component } from '@angular/core';
import { container, injectSymbols, NewReleaseSrv } from "core_cliente_spotify";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularClienteSpotify';

  public login(): void {
    const newReleaseSrv = container.get<NewReleaseSrv>(injectSymbols.M_BROWSE.NEW_RELEASE);
    newReleaseSrv.getNewReleases()
    .then((data) => {
    })
    .catch((err) => {
    });
  }
}
