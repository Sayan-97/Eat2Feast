type ButtonTypes = {
    name: string;
    type?: 'submit' | 'button' | 'reset';
}

export default function Button(props: ButtonTypes) {
    return (
        <button
            type={props.type}
            className="bg-custom-gradient px-6 py-3 rounded-xl text-custom-primaryText font-bold"
        >
            {props.name}
        </button>
    )
}
