export enum FilterResult {
  TRUE = 'true',
  FALSE = 'false',
}

export interface JobOptions<N, P> {
  name: N;
  params: P;
}
