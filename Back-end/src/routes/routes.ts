import { Express } from 'express';
import express from 'express'
import pokemon from './pokemon.ts';

export default function (app: Express) {
    app
    .use(express.json())
    .use('/pokemon', pokemon)
}