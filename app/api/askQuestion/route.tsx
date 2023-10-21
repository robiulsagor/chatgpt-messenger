

export async function POST(req: Request) {
    const { prompt, chatId, model, session } = await req.json()

    if (!prompt) return new Response(JSON.stringify({ answer: "Please provide a prompt!" }))

    if (!chatId) return new Response(JSON.stringify({ answer: "Please provide a chat ID!" }))

    return new Response(JSON.stringify({ answer: "Everything I need is provided!" }))
}

// export async function POST(req: Request) {
//     return new Response(JSON.stringify("hello world"), {
//         status: 201
//     })
// }