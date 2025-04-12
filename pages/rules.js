import { useState } from 'react';

const rules = [
  {
    title: '1. Support & Reporting',
    sections: [
      'Support System',
      'Types of Tickets',
      'Reporting Protocol',
    ],
  },
  {
    title: '2. Community Conduct',
    sections: [
      'Discord Rules',
      'Voice Chat Rules',
      'Hate Speech & Discrimination',
    ],
  },
  {
    title: '3. Roleplay Standards',
    sections: [
      'RDM & VDM',
      'Breaking Character',
      'Combat Logging',
      'Fail RP',
      'Metagaming',
      'Gun Fear & Valuing Life',
    ],
  },
  {
    title: '4. EMS, NLR & Death',
    sections: [
      'EMS Revives & New Life Rule',
      'Suicide RP',
    ],
  },
  {
    title: '5. Zone & Location Rules',
    sections: [
      'Revealing Locations',
      'Green Zone',
    ],
  },
  {
    title: '6. Criminal RP & Heists',
    sections: [
      'General Heist Rules',
      'Hostage Rules',
      'Negotiations',
      'Escape & Chases',
      'PD Limitations',
      'Cooldowns',
      'Interference',
      'Final Word',
    ],
  },
  {
    title: '7. Gangs & Turf',
    sections: [
      'Gang Creation Requirements',
      'Gang Structure',
      'Gang Wars',
      'Bleeding Out & Switching Gangs',
      'Interaction with PD',
      'Gang Disbandment',
    ],
  },
  {
    title: '8. Staff & Developer Conduct',
    sections: [
      'Developer Rules',
    ],
  },
  {
    title: '9. AFK & Queue Holding',
    sections: [
      'AFK & Queue Abuse',
    ],
  },
  {
    title: '10. Key RP Terms',
    sections: [
      'Fail RP',
      'Bleed Out',
      'Powergaming',
      'On-sight',
      'Combat Logging',
      'Stream Sniping',
    ],
  },
];

export default function RulesPage() {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <div className="flex h-screen bg-gradient-to-b from-black via-zinc-900 to-zinc-950 text-white">
      <aside className="w-72 bg-black bg-opacity-80 border-r border-purple-600 shadow-lg overflow-y-auto">
        <div className="p-5 text-2xl font-bold tracking-wide text-purple-300">Rules</div>
        <nav className="space-y-1 px-4 pb-8">
          {rules.map((category, index) => (
            <div key={index}>
              <div className="text-sm text-purple-500 uppercase font-bold mt-4 mb-2 tracking-widest">
                {category.title}
              </div>
              {category.sections.map((section, sIndex) => (
                <button
                  key={sIndex}
                  onClick={() => setActiveSection(`${category.title} - ${section}`)}
                  className="w-full text-left px-3 py-2 text-sm font-medium rounded-md hover:bg-purple-900/40 transition"
                >
                  {section}
                </button>
              ))}
            </div>
          ))}
        </nav>
      </aside>
      <main className="flex-1 p-10 overflow-y-auto backdrop-blur-md">
        {activeSection ? (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-purple-300 mb-6 drop-shadow">{activeSection}</h2>
            <p className="text-base leading-relaxed text-zinc-200/90">
              (This is placeholder content for <span className="text-purple-400">{activeSection}</span>. Paste the full rule text here.)
            </p>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto text-center mt-20">
            <h1 className="text-4xl font-bold text-purple-400 mb-4">Welcome to the Abyssal RP Rulebook</h1>
            <p className="text-lg text-zinc-300">Choose a category from the left to view detailed server rules.</p>
          </div>
        )}
      </main>
    </div>
  );
}