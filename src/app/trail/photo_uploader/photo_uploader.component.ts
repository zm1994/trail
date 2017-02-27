import { Component, Input, OnChanges } from '@angular/core'
import { FileUploader } from 'ng2-file-upload';

@Component({
    selector: 'photo-uploader',
    templateUrl: 'photo_uploader.component.html',
    styleUrls: ['photo_uploader.component.css']
})


export class PhotoUploaderComponent implements OnChanges {
    URL: string; //url for upload file
    public uploader: FileUploader;
    @Input() trailId: number;

    constructor() {
        this.URL = window.location.origin + '/api/upload/';
        this.uploader = new FileUploader({ url: this.URL });
    }

    ngOnChanges() {
        console.log(this.trailId)
        this.uploader.onBuildItemForm = (item, form) => {
            form.append('id', this.trailId.toString());
        };
    }
}