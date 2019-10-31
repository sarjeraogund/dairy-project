import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dairy-project';

  constructor(private titleService: Title, private meta:Meta){
      titleService.setTitle("Dairy Products");
      meta.updateTag({name:'viewport', content:'width=device-width, initial-scale=1.0'}),
      meta.addTag({name:'keywords', content:""}, true),
      meta.addTag({name:'description', content:""}, true),
      meta.addTag({name:'author', content:""}, true)
  }
}
