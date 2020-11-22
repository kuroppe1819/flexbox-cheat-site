/// <reference types="node" />

declare namespace NodeJS {
    interface ProcessEnv {
        readonly NODE_ENV: 'development' | 'production' | 'test';
        readonly ROOT_PATH: string;
    }
}

type TypeOfValues<T> = T[keyof T];
