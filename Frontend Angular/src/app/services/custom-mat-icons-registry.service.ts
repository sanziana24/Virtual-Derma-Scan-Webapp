import {Injectable} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class CustomMatIconsRegistryService {

  constructor(private readonly matIconRegistry: MatIconRegistry,
              private readonly domSanitizer: DomSanitizer) {
  }

  public loadCustomMatIcons(): void {
    const icons: SvgIcon[] = [

     {iconName: ':et-accepted', filePath: 'accepted.svg'},
     {iconName: ':et-circle-up-arrow-icon', filePath: 'circle-up-arrow-icon.svg'},

    ];

    icons.forEach(icon => this.matIconRegistry.addSvgIcon(
      icon.iconName,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/images/${icon.filePath}`)
    ));
  }
}

interface SvgIcon {
  iconName: string;
  filePath: string;
}
