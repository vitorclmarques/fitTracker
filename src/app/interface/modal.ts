export interface ModalField {
  key: string;
  label: string;
  type: string;
  options?: string[]; // opcional, porque nem todos os campos terão uma lista de opções (ex: o campo 'expiracao' não tem 'options')
}
