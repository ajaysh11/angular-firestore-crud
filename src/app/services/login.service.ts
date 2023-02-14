import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'; 

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private dbPath = '/logins';

  loginsRef: AngularFirestoreCollection<Login>;

  constructor(private db: AngularFirestore) {
    this.loginsRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Login> {
    return this.loginsRef;
  }

  create(login: Login): any {
    return this.loginsRef.add({ ...login });
  }

  update(id: string, data: any): Promise<void> {
    return this.loginsRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.loginsRef.doc(id).delete();
  }
}
