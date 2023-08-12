import React from 'react';
import {Response} from "next/dist/compiled/@edge-runtime/primitives";


async function getTickets(): Promise {
    const response: Response = await fetch('http://localhost:4000/tickets', {
        next: {
            revalidate: 0 //use 0 to opt out of using cache
        }
    });
    return response.json();
}

export default async function TicketList(): Promise {
    const tickets = await getTickets()

    return (
        <>
            {tickets.map((ticket) => (
                    <div key={ticket.id} className="card my-5">
                        <h3>{ticket.title}</h3>
                        <p>{ticket.body.slice(0, 200)}...</p>
                        <div className={`pill ${ticket.priority}`}>{ticket.priority} priority</div>
                    </div>
                )
            )
            }
            {tickets.length === 0 && (
                <p className="text-center">There are no open tickets, yay!</p>
            )}
        </>
    );
};