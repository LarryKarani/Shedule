import Empty from "../components/EmptyState/empty"
import List from "../components/LIst/list"

export type Event = {
  id: string
  title: string
  description: string
  attendees: [Attendee],
  startTime: string
  endTime: string
}

export type Attendee = {
  id: string
  name: string
  email: string
  isAttending: boolean
}

interface EventsProps {
   events?: [Event | [] ]
}


const Events: React.FC<EventsProps> = ({events}) => {

  return (
    <div>
      {
        !events || events.length<= 0 ? <Empty message="You do not have any Events" /> : <List items={events}/>
      }
    </div>
  )
}

export default Events