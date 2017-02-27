import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Trail } from '../models/trail.model'
import { TrailService } from '../services/trail.service'

@Component({
    selector: 'trail',
    templateUrl: 'trail.component.html',
    styleUrls: ['trail.component.css']
})

export class TrailComponent {
    id: number;
    private sub: any;
    trail: Trail;

    constructor(
        private route: ActivatedRoute,
        private trailServ: TrailService) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number
            this.trailServ.getTrailById(this.id).subscribe((res) => {
                this.trail = <Trail> res[0];
                if (!this.trail.images) this.trail.images = [];
            }, (error) => console.log(error))
        });
    }

     onPhotoUpload(photoName: string) {
        console.log(photoName)
        this.trail.images.push(photoName)
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    sendUploadLinkText() {
        return  this.trail.images.length == 0 ? 'this thrail has no photos, you can add some' :
                                                'Add photos to trail'
    }
}