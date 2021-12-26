class IndexedDB{
    constructor(){
        this._db = null;
        this._verze = 1;
        this.pripoj();
    }




        pripoj(){
            const request = indexedDB.open('wwwapp2021KS', this._verze);
            request.onsuccess = (ev) => {
                ///this._db = ev. target.result;
                this._db = request.result;
                console.log('DB', this._db);
            }

            request.onupgradeneeded = (ev) => {
                /// vytvareni a aktualizace DB
                console.log(ev);
                switch (ev.oldVersion) {
                    /// zcela nova DB
                    case 0:
                        break;
                    /// upgrade z 1 na novou strukturu
                    case 1:
                        /// ev.target.result je reference na DB
                        const os = ev.target.result.createObjectStore('uzivatele', {keyPath : 'id', autoIncrement: true})
                        os.createIndex('prijmeniIndex', 'prijmeni');
                        os.createIndex('jmenoIndex', 'jmeno');

                        os.add({jmeno: 'Tereza', prijmeni: 'Kotyzová'});
                        break;

                }


            }








    const DB = new IndexedDB();
}
}



