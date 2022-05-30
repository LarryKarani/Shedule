import Empty from '../components/EmptyState/empty';
import List from '../components/LIst/list';

export type Doctor = {
  id: string;
  name: string;
  email: string;
  isAttending: boolean;
};

interface DoctorsProps {
  doctors?: [Doctor | []];
}

const Doctors: React.FC<DoctorsProps> = ({ doctors }) => {

  return (
    <div>
      {!doctors || doctors.length <= 0 ? (
        <Empty message='No doctors Exist' />
      ) : (
        <List items={doctors} />
      )}
    </div>
  );
};

export default Doctors;
