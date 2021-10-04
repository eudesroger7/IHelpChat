export interface CrudIndex {
  dataSource: any[];
  getDataSource: (params: string) => void;
}

export interface CrudShow {
  dataSource: any;
  getDataSource: (params: string) => void;
}
