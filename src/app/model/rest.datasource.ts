import { HttpClient } from '@angular/common/http';
import { Users } from './users.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Candidate } from './candidate.model';

const PROTOCOL = "http";
const PORT = 8088;

@Injectable()
export class RestDataSource {

    baseUrl: string;

    constructor(private http: HttpClient) {
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }

    registerUser(user: Users): Observable<Users> {
        return this.http.post<Users>(this.baseUrl + "/register", user);
    }

    getCandidateDetails(): Observable<Candidate[]> {
        return this.http.get<Candidate[]>(this.baseUrl + "/viewcand");
    }

    getUserDetails(): Observable<Users[]> {
        return this.http.get<Users[]>(this.baseUrl + "/viewuser");

    }

    getAllDetails(): Observable<[]> {
        return this.http.get<[]>(this.baseUrl + "/viewall");
    }

    getUnapprovedUsers(): Observable<[]> {
        return this.http.get<[]>(this.baseUrl + "/viewunapproved");
    }

    getUsersByAadhar(aadhar: string): Observable<Users> {
        return this.http.get<Users>(this.baseUrl + "/viewaadhar/"+aadhar);
    }
    getAllAreas():Observable<[]>{
        return this.http.get<[]>(this.baseUrl + "/viewarea");
    }

    getCandidatesByRegion(area:string):Observable<[]>{
        return this.http.get<[]>(this.baseUrl+"/candibyregion"+area);
    }

}