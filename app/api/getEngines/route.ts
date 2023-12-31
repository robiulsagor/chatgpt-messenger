import openai from "@/lib/chatgpt";

type Option = {
    value: string;
    label: string
}

type Data = {
    modelOptions: Option[]
}

export async function GET(request: Request) {
    const models = await openai.models.list().then(res => res.data)

    const modelOptions = models.map(model => ({
        value: model.id,
        label: model.id
    }))
    return new Response(JSON.stringify(modelOptions))

}