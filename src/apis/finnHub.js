import axios from "axios"

const TOKEN = "chn98f9r01qsjpubf3q0chn98f9r01qsjpubf3qg"

export default axios.create ({
  baseURL: "https://finnhub.io/api/v1",
  params: {
    token: TOKEN
  }
})