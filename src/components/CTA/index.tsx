import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../Button';

const CTA: React.FC = () => {
    
  const navigate = useNavigate()
  return (
    <div className='flex md:flex-row mb-5 md:w-1/4 gap-4 w-3/4'>
      <Button label='Add Doctor' onClick={() => navigate('/add-doctor')} />
      <Button label='Schedule Event' onClick={() => navigate('/add-event')} />
    </div>
  );
}

export default CTA