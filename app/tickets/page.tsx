import {ReactElement} from "react";
import TicketList from "@/app/tickets/TicketList";

export default function Tickets(): ReactElement {
    return (
        <main>
            <nav>
                <div>
                    <h2>Tickets</h2>
                    <p><small>Currently open tickets.</small></p>
                </div>
            </nav>

            <TicketList/>
        </main>
    );
}