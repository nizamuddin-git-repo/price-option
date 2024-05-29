import PropTypes from 'prop-types';
import { FiCheck } from "react-icons/fi";
const Feature = ({feature}) => {
    return (
        <div>
            <p className='flex items-center'><FiCheck className='text-green-500 mr-2'></FiCheck> {feature}</p>
        </div>
    );
};

Feature.propTypes ={
    feature: PropTypes.string
}
export default Feature;