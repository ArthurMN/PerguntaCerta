import { resposta } from "./resposta.d"

export type pergunta = {
    id: number
    pergunta: string
    respostas: resposta[]
}