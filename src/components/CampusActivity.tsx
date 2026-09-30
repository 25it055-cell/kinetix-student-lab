import React, { useState } from "react";
import { CampusEvent } from "../types/fitness";
import { 
  Users, 
  MapPin, 
  Clock, 
  CheckCircle, 
  Plus
} from "lucide-react";

interface CampusActivityProps {
  events: CampusEvent[];
}

export const CampusActivity: React.FC<CampusActivityProps> = ({ 
  events: initialEvents 
}) => {
  const [events, setEvents] = useState<CampusEvent[]>(initialEvents);
  const [filterCategory, setFilterCategory] = useState<string>("All");

  const toggleRsvp = (id: string) => {
    setEvents((prev) =>
      prev.map((ev) => {
        if (ev.id === id) {
          const isAttending = !ev.isUserRsvp;
          return {
            ...ev,
            isUserRsvp: isAttending,
            attendeesCount: isAttending ? ev.attendeesCount + 1 : ev.attendeesCount - 1,
          };
        }
        return ev;
      })
    );
  };

  const categories = ["All", "Running", "Calisthenics", "Mind & Mobility", "HIIT"];

  const filteredEvents = events.filter(
    (ev) => filterCategory === "All" || ev.category === filterCategory
  );

  return (
    <section id="campus" className="py-20 relative bg-[#F8FAFC] border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-mono mb-3 shadow-xs">
              <Users className="w-3.5 h-3.5 text-sky-600" />
              <span className="font-semibold text-slate-800">PEER-ORGANIZED POP-UPS</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-slate-900 tracking-tight">
              Campus Activity & Pop-Up Meetups
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-xl mt-2 font-normal leading-relaxed">
              Free, informal, student-led movement sessions across campus lawns, stairwells, and lounges. No gym memberships or gear needed.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="mt-4 md:mt-0 flex items-center space-x-2 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  filterCategory === cat
                    ? "bg-sky-600 text-white font-bold shadow-xs shadow-sky-600/20"
                    : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200 shadow-xs"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredEvents.map((ev) => (
            <div
              key={ev.id}
              className="silver-card rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-sky-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-sky-50 text-sky-700 border border-sky-200">
                    {ev.category}
                  </span>

                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full uppercase font-bold bg-slate-100 text-slate-700 border border-slate-200">
                    {ev.intensity} Intensity
                  </span>
                </div>

                <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900">
                  {ev.title}
                </h3>

                <div className="mt-4 space-y-1.5 text-xs text-slate-600 font-sans">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-3.5 h-3.5 text-sky-600" />
                    <span>{ev.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-3.5 h-3.5 text-sky-600" />
                    <span>{ev.location} ({ev.campusZone})</span>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-400">
                    <Users className="w-3.5 h-3.5" />
                    <span>Hosted by {ev.organizer}</span>
                  </div>
                </div>

                {/* Capacity Bar */}
                <div className="mt-5 space-y-1.5">
                  <div className="flex justify-between text-xs font-mono text-slate-500">
                    <span>Spot availability</span>
                    <span className="text-slate-900 font-bold">
                      {ev.attendeesCount} / {ev.maxCapacity} Going
                    </span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-sky-400 to-sky-600 rounded-full transition-all"
                      style={{
                        width: `${Math.min(100, (ev.attendeesCount / ev.maxCapacity) * 100)}%`,
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-mono">
                  Drop-ins welcome
                </span>

                <button
                  onClick={() => toggleRsvp(ev.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center space-x-1.5 shadow-xs ${
                    ev.isUserRsvp
                      ? "bg-sky-50 text-sky-700 border border-sky-200"
                      : "bg-sky-600 hover:bg-sky-500 text-white shadow-sky-600/20"
                  }`}
                >
                  {ev.isUserRsvp ? (
                    <>
                      <CheckCircle className="w-3.5 h-3.5 text-sky-600" />
                      <span>RSVP Confirmed</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-3.5 h-3.5 text-white" />
                      <span>RSVP Free</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
