export interface MarketingIndexResponse {
  Dados: MarketingIndexItem[];
}

export interface MarketingIndexItem {
  Canal: string;
  Created: string;
  DataAgendamento: string;
  EnviarApenasNoPeriodo: boolean;
  Id: string;
  ImportacaoCount: number;
  Status: 4;
  Titulo: string;
}

export interface MarketingShowResponse {
  Dados: MarketingShowItem;
}

export interface MarketingShowItem {
  CampanhaRapida: boolean;
  CanaisId: string[];
  CanalId: string;
  Created: string;
  DataAgendamento: string;
  DateDeleted: string;
  Deleted: boolean;
  EncaminharParaDepartamento: string;
  EnviarApenasNoPeriodo: boolean;
  Fragmentado: boolean;
  HorarioInicial: string;
  HorarioFinal: string;
  Id: string;
  Imagem: string|null;
  Importacao: MarketingContactItem[];
  Mensagem: string;
  Mensagem2: string|null;
  Mensagem3: string|null;
  PausaAutomatica: boolean;
  Pausas: number;
  SegundosBaseParaEnvio: number;
  Status: number;
  Titulo: string;
  UsuarioId: string;
}

export interface MarketingContactItem {
  Contato: string;
  DataEnvio: string;
  Enviado: boolean;
  Status: number;
  Variaveis: string[];
}
