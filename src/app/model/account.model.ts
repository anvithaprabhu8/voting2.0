import { Injectable } from '@angular/core';

@Injectable()
export class Account {
    public username: string;
    public password: string;
    public accountType: string;
    public userID: number;

    public generateAccount() {
        this.username = Math.random().toString(36).substr(2, 8);
        this.password = Math.random().toString(36).substr(2, 8);
    }
}