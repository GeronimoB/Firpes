import '../../../styles/stylePlanes.css';

const PlanA = () => {
return (
    <div className='plansCards'>
        <h1 className='titleplans'>Pase anual</h1>
        <div className='benefits'>
            <svg width="20" height="20" viewBox="0 0 20 20" className='svgplans' xmlns="http://www.w3.org/2000/svg">
                <path d="M10.0001 9.15527e-05C4.48612 9.15527e-05 0.00012207 4.48609 0.00012207 10.0001C0.00012207 15.5141 4.48612 20.0001 10.0001 20.0001C15.5141 20.0001 20.0001 15.5141 20.0001 10.0001C20.0001 4.48609 15.5141 9.15527e-05 10.0001 9.15527e-05ZM8.00112 14.4131L4.28812 10.7081L5.70012 9.29209L7.99912 11.5871L13.2931 6.29309L14.7071 7.70709L8.00112 14.4131Z" />
            </svg>
            <p className='plansbene'>8 horas de uso de nuestro espacio de coworking</p>
        </div>
        <div className='benefits'>
            <svg width="20" height="20" viewBox="0 0 20 20" className='svgplans' xmlns="http://www.w3.org/2000/svg">
                <path d="M10.0001 9.15527e-05C4.48612 9.15527e-05 0.00012207 4.48609 0.00012207 10.0001C0.00012207 15.5141 4.48612 20.0001 10.0001 20.0001C15.5141 20.0001 20.0001 15.5141 20.0001 10.0001C20.0001 4.48609 15.5141 9.15527e-05 10.0001 9.15527e-05ZM8.00112 14.4131L4.28812 10.7081L5.70012 9.29209L7.99912 11.5871L13.2931 6.29309L14.7071 7.70709L8.00112 14.4131Z" />
            </svg>
            <p>Acceso a todas nuestras salas</p>
        </div>
        <div className='benefits'>
            <svg width="20" height="20" viewBox="0 0 20 20" className='svgplans' xmlns="http://www.w3.org/2000/svg">
                <path d="M10.0001 9.15527e-05C4.48612 9.15527e-05 0.00012207 4.48609 0.00012207 10.0001C0.00012207 15.5141 4.48612 20.0001 10.0001 20.0001C15.5141 20.0001 20.0001 15.5141 20.0001 10.0001C20.0001 4.48609 15.5141 9.15527e-05 10.0001 9.15527e-05ZM8.00112 14.4131L4.28812 10.7081L5.70012 9.29209L7.99912 11.5871L13.2931 6.29309L14.7071 7.70709L8.00112 14.4131Z" />
            </svg>
            <p>Escritorio dedicado</p>
        </div>
        <div className='benefits'>
            <svg width="20" height="20" viewBox="0 0 20 20" className='svgplans' xmlns="http://www.w3.org/2000/svg">
                <path d="M10.0001 9.15527e-05C4.48612 9.15527e-05 0.00012207 4.48609 0.00012207 10.0001C0.00012207 15.5141 4.48612 20.0001 10.0001 20.0001C15.5141 20.0001 20.0001 15.5141 20.0001 10.0001C20.0001 4.48609 15.5141 9.15527e-05 10.0001 9.15527e-05ZM8.00112 14.4131L4.28812 10.7081L5.70012 9.29209L7.99912 11.5871L13.2931 6.29309L14.7071 7.70709L8.00112 14.4131Z" />
            </svg>
            <p>Dirección comercial gratuita</p>
        </div>
        <div className='benefits'>
            <svg width="20" height="20" viewBox="0 0 20 20" className='svgplans' xmlns="http://www.w3.org/2000/svg">
                <path d="M10.0001 9.15527e-05C4.48612 9.15527e-05 0.00012207 4.48609 0.00012207 10.0001C0.00012207 15.5141 4.48612 20.0001 10.0001 20.0001C15.5141 20.0001 20.0001 15.5141 20.0001 10.0001C20.0001 4.48609 15.5141 9.15527e-05 10.0001 9.15527e-05ZM8.00112 14.4131L4.28812 10.7081L5.70012 9.29209L7.99912 11.5871L13.2931 6.29309L14.7071 7.70709L8.00112 14.4131Z" />
            </svg>
            <p>1 almuerzo al dia</p>
        </div>
        <div class="linea-cortada"></div>

        <p className='priceplans'>$480 <span>/dia</span></p>
        <button className='butonpursh'>Elegir</button>
    </div>
);
};

export default PlanA;