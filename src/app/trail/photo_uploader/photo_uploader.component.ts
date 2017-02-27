import { Component, Input, OnInit, OnChanges, EventEmitter, Output, AfterViewInit } from '@angular/core'
import { FileUploader, FileUploaderOptions } from 'ng2-file-upload';

@Component({
    selector: 'photo-uploader',
    templateUrl: 'photo_uploader.component.html',
    styleUrls: ['photo_uploader.component.css']
})


export class PhotoUploaderComponent implements OnChanges, OnInit, AfterViewInit {
    URL: string; //url for upload file
    public uploader: FileUploader;
    @Input() trailId: number;
    @Input() contentUploadLink: string;
    @Output() photoUpload: EventEmitter<string>;

    constructor() {
        this.URL = window.location.origin + '/api/upload/';
        this.uploader = new FileUploader({ 
            url: this.URL,
            allowedMimeType: ['image/png', 'image/jpg', 'image/jpeg', 'image/gif'],
            maxFileSize: 10*1024*1024, // 10 MB,
            autoUpload: true,
            queueLimit: 1,
            removeAfterUpload: true
        });
        this.photoUpload = new EventEmitter<string>();
    }

    ngOnInit() {
        //emit name downloaded file to parent component
        this.uploader.onSuccessItem = (item:any, response:any, status:any, headers:any) => {
            this.photoUpload.emit(JSON.parse(response)[0].upload_photo_trail);
        };
    }

    ngAfterViewInit() {
        console.log(this.contentUploadLink)
    }

    ngOnChanges() {
        this.uploader.onBuildItemForm = (item, form) => {
            form.append('id', this.trailId.toString());
        };
    }

    uploadPhoto() {
        this.uploader.uploadItem(this.uploader.queue[0])
    }
}