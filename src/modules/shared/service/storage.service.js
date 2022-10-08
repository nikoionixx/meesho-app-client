class Storage {

    setItem(key,value){
        sessionStorage.setItem(key,JSON.stringify(value));
    }

    getItem(key){
        return JSON.parse(sessionStorage.getItem(key));
    }

    clearItem(){
        sessionStorage.clear();
    }
}

export default Storage;