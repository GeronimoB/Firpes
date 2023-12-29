import '../../styles/stylePlanes.css';
import PlanM from '../molecules/Planes/PlanM'
import PlanA from '../molecules/Planes/PlanA'
import PlanD from '../molecules/Planes/PlanD'
const Planes = () => {
return (
    <div className='contentPlans'>
        <div className='Backplans'>
            <PlanD/>
            <PlanM/>
            <PlanA/>
        </div>
    </div>
);
};

export default Planes;