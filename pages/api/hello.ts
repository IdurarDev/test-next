import { NextApiRequest, NextApiResponse } from "next";
// req = HTTP incoming message, res = HTTP server response
// req = un instance de http.IncomingMessage, plus quelques middlewares pré-construits.
// req = un instance de http.IncomingMessage, plus quelques fonctions d'assistances.
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({ text: 'Hello' });
}