import axios from "axios";
import { baseURL } from "../config/url"

export const api = axios.create({
    baseURL
})