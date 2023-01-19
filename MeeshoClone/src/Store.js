import {makeAutoObservable,runInAction} from 'mobx';

class MyStore{

    constructor(){
        makeAutoObservable(this)
      }
}

export default Store=new MyStore();