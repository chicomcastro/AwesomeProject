

export default class DataHolder {
    static isSearching = false;
    static title = "Teste";
  
    static setSearchingStatus(newStatus) {
      DataHolder.isSearching = newStatus;
    }
  }