type ButtonProps = {
    variant?: 'primary' | 'secondary';
    text: string;
}

export function Button({ text }: ButtonProps){
    return <button >{text}</button>
}