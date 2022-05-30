import { Attendee, Event } from "../../pages/Events";
import Button from "../Button";

interface ListProps {
   items: [ Event | Attendee | []]
}

const List: React.FC<ListProps> = ({items}) =>  {
  return (
    <div className='bg-white shadow overflow-hidden sm:rounded-md'>
      <ul className='divide-y divide-gray-200'>
        {items.length > 0 && items.map((item, index) => (
          <li key={index} className='px-4 py-4 sm:px-6'>
            {/* Your content */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List