import { useEffect, useRef } from "react";


export default function Reloj() {
    const h1 = useRef();
    const ti = () => {
        const fechahora = new Date();
        const hora = fechahora.getHours();
        const minuto = fechahora.getMinutes();

        if (hora < 10) { hora = '0' + hora; }
        if (minuto < 10) { minuto = '0' + minuto; }

        return `${hora}:${minuto}`;
    };
    useEffect(() => {
        const cl = setInterval(() => {
            h1.current.innerHTML = `${ti()}`;
        }, 1000);
        console.log("asd");
        return () => clearInterval(cl);
    }, []);
    console.log("asdsss");
    return (
        <div className="Reloj">
            <h3 ref={h1}>{ti()}</h3>
        </div>
    );
}