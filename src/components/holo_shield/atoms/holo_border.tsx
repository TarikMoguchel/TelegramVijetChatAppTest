import "../styles/holo_shield.css"

interface IHoloBorder{
    classN:string;
    fillColor:string;
}

export const HoloBorder = ({classN,fillColor}:IHoloBorder) => {
    return (
        <svg className={classN} width="901" height="525" viewBox="0 0 901 525" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.999969 225C4.04781 179.048 7.44062 154.672 17.5 114.5H31C44.7277 60.752 54.9414 36.7859 76 1H436H730.5H816L866 114.5H879.5C908.272 236.09 906.583 297.161 879.5 396.5L866 403L816 513L480 517.768L456 518.108L76 523.5L31 403H17.5C6.66633 359.28 3.10499 334.868 0.999969 291.5L25 307C35.566 381.086 47.9377 423.659 85 502H152L164.5 513H447.5L469.5 502H810C893.145 319.559 902.248 213.689 810 14.5H739L730.5 1H436L427.5 14.5H85C53.3973 80.5514 38.6578 120.768 25 206L0.999969 225Z" fill={fillColor} />
            <path d="M730.5 1H816L866 114.5H879.5C908.272 236.09 906.583 297.161 879.5 396.5L866 403L816 513L480 517.768L456 518.108L76 523.5L31 403H17.5C6.66633 359.28 3.10499 334.868 0.999969 291.5L25 307C35.566 381.086 47.9377 423.659 85 502H152L164.5 513H447.5L469.5 502H810C893.145 319.559 902.248 213.689 810 14.5H739L730.5 1ZM730.5 1H436M436 1H76C54.9414 36.7859 44.7277 60.752 31 114.5H17.5C7.44062 154.672 4.04781 179.048 0.999969 225L25 206C38.6578 120.768 53.3973 80.5514 85 14.5H427.5L436 1Z"/>
        </svg>

    )
}