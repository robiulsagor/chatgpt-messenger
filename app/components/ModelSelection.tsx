"use client"
import axios from "axios"
import useSWR from "swr"
import Select from 'react-select';

const fetcher = async (url: any) => {
    const res = await fetch(url).then(res => res.json())
    return res
};


const ModelSelection = () => {
    const { data: models, isLoading } = useSWR("/api/getEngines", fetcher)
    const { data: model, mutate: setModel } = useSWR("model", {
        fallbackData: 'text-davinci-003'
    })

    return (
        <div>
            <Select className="my-2 bg-[#24f11d] border-[#f31f1f]"
                options={models}
                defaultValue={model}
                placeholder={model}
                isSearchable
                isLoading={isLoading}
                menuPosition="fixed"
                classNames={{
                    control: (state) =>
                        isLoading ? 'border-red-600' : 'border-grey-300',
                }}
                onChange={e => setModel(e.value)}
            />
        </div>
    )
}

export default ModelSelection