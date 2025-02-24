import axios from "axios"
import { baseURL } from "src/config/url.config"

export const api = axios.create({
	baseURL
})
