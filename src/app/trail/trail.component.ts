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
                console.log(res);
                this.trail = <Trail> res[0];
            }, (error) => console.log(error))
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}