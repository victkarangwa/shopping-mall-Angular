import { CoursesService } from './course/course.service';
import { Component } from "@angular/core";

@Component({
    selector: 'courses',
    template: `<h2>{{ "title:" + title }}
    <ul>
    <li *ngFor=" let course of courses">{{course}}</li>
    </ul>
    </h2>`
})
export class CoursesComponent {
    title = "List of courses";
    courses;

    constructor(service: CoursesService) {

        this.courses = service.getCourses();
    }

}