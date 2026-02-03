type ButtonProps = {
    variant?: 'primary' | 'secondary';
    text: string;
}

export function Button({ variant = 'primary', text }: ButtonProps){
    return <button >{text}</button>
}