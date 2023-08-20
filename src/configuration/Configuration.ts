import axios from 'axios';
import {Core, CoreConfiguration} from "../core/build";
const API_URL = 'https://localhost/';

export const coreConfig: CoreConfiguration = {
    httpClient: axios.create({baseURL: API_URL}),
    realDependencies: false,
};


export const core = Core(coreConfig);
