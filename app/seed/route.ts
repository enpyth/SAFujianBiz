import { db } from '@vercel/postgres';

const client = await db.connect();

export interface Event {
  id: number
  title: string
  date: string
  time: string
  description: string
  location: string
  address: string
  price: string
  image: string
  registeredCount: number
  maxCapacity: number
  organizer: string
  contactEmail: string
  contactPhone: string
  status: "upcoming" | "past"
}

const eventsData: Event[] = [
  {
    id: 1,
    title: "Summer Music Festival",
    date: "2023-07-15",
    time: "12:00 PM - 10:00 PM",
    description: "Join us for a day of amazing music performances across multiple stages.",
    location: "Central Park, New York",
    address: "Central Park, 5th Ave, New York, NY 10022",
    price: "$50",
    image: "/placeholder.svg?height=300&width=600",
    registeredCount: 1500,
    maxCapacity: 2000,
    organizer: "NYC Events Co.",
    contactEmail: "info@nycevents.com",
    contactPhone: "+1 (555) 123-4567",
    status: "upcoming",
  },
  {
    id: 2,
    title: "Tech Conference 2023",
    date: "2023-08-22",
    time: "9:00 AM - 5:00 PM",
    description: "Learn about the latest technologies and network with industry professionals.",
    location: "Convention Center, San Francisco",
    address: "123 Convention Center Dr, San Francisco, CA 94103",
    price: "$200",
    image: "/placeholder.svg?height=300&width=600",
    registeredCount: 800,
    maxCapacity: 1000,
    organizer: "TechCon",
    contactEmail: "info@techcon.com",
    contactPhone: "+1 (555) 987-6543",
    status: "upcoming",
  },
  {
    id: 3,
    title: "Charity Run",
    date: "2023-09-10",
    time: "8:00 AM",
    description: "Run for a cause! All proceeds go to local charities.",
    location: "Downtown, Chicago",
    address: "100 N Michigan Ave, Chicago, IL 60601",
    price: "$25",
    image: "/placeholder.svg?height=300&width=600",
    registeredCount: 350,
    maxCapacity: 500,
    organizer: "Chicago Charity Run",
    contactEmail: "info@chicagorun.com",
    contactPhone: "+1 (555) 555-5555",
    status: "upcoming",
  },
  {
    id: 4,
    title: "Winter Art Exhibition",
    date: "2023-01-05",
    time: "10:00 AM - 6:00 PM",
    description: "Explore beautiful artworks from local and international artists.",
    location: "Metropolitan Museum, New York",
    address: "1000 5th Ave, New York, NY 10028",
    price: "$20",
    image: "/placeholder.svg?height=300&width=600",
    registeredCount: 5000,
    maxCapacity: 5000,
    organizer: "Metro Art Society",
    contactEmail: "info@metroart.com",
    contactPhone: "+1 (555) 111-2222",
    status: "past",
  },
  {
    id: 5,
    title: "Spring Food Festival",
    date: "2023-04-20",
    time: "11:00 AM - 8:00 PM",
    description: "Taste delicious cuisines from around the world.",
    location: "City Park, Los Angeles",
    address: "200 N Grand Ave, Los Angeles, CA 90012",
    price: "$30",
    image: "/placeholder.svg?height=300&width=600",
    registeredCount: 2000,
    maxCapacity: 2500,
    organizer: "LA Food Lovers",
    contactEmail: "info@lafoodlovers.com",
    contactPhone: "+1 (555) 333-4444",
    status: "past",
  },
]

async function seedEventsData() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS FJSH_events (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      date VARCHAR(50) NOT NULL,
      time VARCHAR(50) NOT NULL,
      description TEXT NOT NULL,
      location VARCHAR(255) NOT NULL,
      address VARCHAR(255) NOT NULL,
      price VARCHAR(50) NOT NULL,
      image VARCHAR(255) NOT NULL,
      registeredCount INT DEFAULT 0,
      maxCapacity INT NOT NULL,
      organizer VARCHAR(255) NOT NULL,
      contactEmail VARCHAR(255) NOT NULL,
      contactPhone VARCHAR(20) NOT NULL,
      status VARCHAR(10) CHECK (status IN ('upcoming', 'past')) NOT NULL
    );
  `;
  const insertedEvents = await Promise.all(
    eventsData.map(async (event) => {
      // Log the event data to check formats
      console.log('Inserting event:', {
        title: event.title,
        date: event.date,
        time: event.time,
        description: event.description,
        location: event.location,
        address: event.address,
        price: event.price,
        image: event.image,
        registeredCount: event.registeredCount,
        maxCapacity: event.maxCapacity,
        organizer: event.organizer,
        contactEmail: event.contactEmail,
        contactPhone: event.contactPhone,
        status: event.status,
      });

      return client.sql`
        INSERT INTO FJSH_events (
            title, date, time, description, location, address, price, image, 
            registeredCount, maxCapacity, organizer, contactEmail, contactPhone, status
        ) VALUES (
            ${event.title}, ${event.date}, ${event.time}, ${event.description}, 
            ${event.location}, ${event.address}, ${event.price}, ${event.image}, 
            ${event.registeredCount}, ${event.maxCapacity}, ${event.organizer}, 
            ${event.contactEmail}, ${event.contactPhone}, ${event.status}
        )
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );

  return insertedEvents;
}

async function getEventById(id: number) {
  const result = await client.sql`
    SELECT * FROM FJSH_events WHERE id = ${id};
  `;

  // Ensure the result is typed correctly
  const event = result.rows[0] as {
    id: number;
    title: string;
    date: string;
    time: string;
    description: string;
    location: string;
    address: string;
    price: string;
    image: string;
    registeredCount: number;
    maxCapacity: number;
    organizer: string;
    contactEmail: string;
    contactPhone: string;
    status: string;
  };

  return event || undefined; // Return the event or undefined if not found
}

export async function GET() {
  try {
    await client.sql`BEGIN`;
    // Uncomment the following line to seed the database
    // await seedEventsData();

    // Query an event by ID (for example, ID 2)
    const event = await getEventById(2);
    
    await client.sql`COMMIT`;

    if (event) {
      return Response.json({ message: 'Event retrieved successfully', event });
    } else {
      return Response.json({ message: 'Event not found' }, { status: 404 });
    }
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}
