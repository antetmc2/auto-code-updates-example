export enum WebPRJobNames {
  NODE_10 = 'create-web-PR-node-10',
  NODE_12 = 'create-web-PR-node-12',
  NODE_14 = 'create-web-PR-node-14',
  NODE_16 = 'create-web-PR-node-16',
}

export type WebPRJobParams = {
  GIT_URL: string;
  GIT_BRANCH: string;
  BRANCH_NAME: string;
  JOB_COMMAND: string;
  PR_TITLE: string;
  TASK_ID: string;
  PUSH_FORSE?: boolean;
};
