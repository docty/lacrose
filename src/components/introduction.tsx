import { IIntroduction } from "@/types" 

const Introduction = ({ title }: IIntroduction) => {
    return (
        <>
            <h4 className="font-bold text-4xl"> {title} </h4>
            <p className="w-full">
                This collection contains a variety of {title}  that can be used in your next project. From components to more complex ones, this collection has everything you need to get started.
            </p>
        </>
    )
}

export default Introduction