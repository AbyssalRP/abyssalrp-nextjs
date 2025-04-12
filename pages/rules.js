const rules = [
  {
    title: '1. Support & Reporting',
    sections: [
      {
        name: 'Support System',
        content: `All server support is handled exclusively through our Discord ticket system. Staff will not respond to in-game chat or direct messages under any circumstances.

Open tickets in the #support-center channel.

Choose the correct category for your issue.`
      },
      {
        name: 'Ticket Requirements',
        content: `All tickets must include a fully completed form.

Incomplete or vague tickets may be closed without review.`
      },
      {
        name: 'Transcripts',
        content: `Ticket transcripts are automatically sent via DM.

Make sure your privacy settings allow DMs:
- Click the server name > Privacy Settings
- Enable Direct Messages from server members.`
      },
      {
        name: 'Types of Tickets',
        content: `In-City Rule Breach Ticket — Report serious rule violations during RP (must include video evidence and player IDs).

General Inquiry Ticket — Questions about server rules, support perks, businesses, etc.

Staff Assistance Ticket — Used when directed by staff or for complex issues.

Purchases and Donations Ticket — For support with VIPs, tiers, or purchases.`
      },
      {
        name: 'Reporting Protocol',
        content: `Evidence Guidelines
- Video must show 2 minutes prior to and the violation itself.
- Must include clear audio of both game and microphone.
- Player ID (visible above the head) must be captured.
- Reports must be submitted within 24 hours of the incident.

Streaming Evidence
- Streaming clips are accepted if:
  - You were involved in the scene.
  - Timestamp and VOD link are provided.

Metagaming Notice
- Watching any stream while in-character, even casually, is a bannable offense.
- Sharing support ticket screenshots or staff responses IC is a violation and will be treated as metagaming.`
      }
    ]
  },
  {
    title: '2. Community Conduct',
    sections: [
      {
        name: 'Discord Rules',
        content: `Respect everyone. Harassment or hate speech = instant ban.

Use English only in public channels.

Do not share in-character info in OOC channels.

Do not ping or DM staff unless prompted.

Nicknames must be in English.

Keep chat friendly, drama-free, and non-toxic.`
      },
      {
        name: 'Voice Chat Rules',
        content: `A working microphone is required.

Push-to-Talk must be enabled.

English must be spoken at all times.

Voice changers are allowed only if clear and realistic.`
      }
    ]
  },
  {
    title: '3. RP Rules & Definitions',
    sections: [
      {
        name: 'Breaking Character',
        content: `Always stay in character.

Don’t reference server mechanics, rules, or OOC terms like "bible" or "prayer."

Don’t mention rule violations during scenes.

Post-scene conversations after respawning are prohibited.`
      },
      {
        name: 'Hate Speech, Slurs, and Discrimination',
        content: `Racism, hate speech, discrimination of any kind is strictly prohibited.

Trash talk is permitted only if kept in character and not personal.`
      },
      {
        name: 'Gun Fear & Valuing Life',
        content: `If a gun is pointed at you, you must comply.

The person aiming the gun first controls the RP.

You must show fear, even if it results in death.

Hostage-taking must be realistic — no using friends, volunteers, or gang members.

Graphic, extreme, or torture RP is prohibited unless all players involved give clear OOC consent beforehand.`
      },
      {
        name: 'RDM & VDM',
        content: `You must initiate RP before shooting or using vehicles as weapons.

“On-sight” kills are not allowed.

Each VDM or RDM counts as 2 warnings.

Hit man RP is not allowed.

Example of RDM: Killing someone without any dialogue or interaction.`
      },
      {
        name: 'Combat Logging',
        content: `Logging out to avoid consequences is prohibited.

Disconnects during RP must be reported via Discord ticket.

Combat logging = 2 warnings.`
      },
      {
        name: 'Fail RP',
        content: `RP must be realistic within a criminal RP environment.

Do not sprint, jump, or fight immediately after being revived by EMS.

Example: Getting up after a shootout and running full speed with no injury RP.`
      },
      {
        name: 'Metagaming',
        content: `Don’t use OOC info (Discord, streams, Twitch chat, etc.) for in-character gain.

Watching streams while in city is a violation.

Stream sniping = permanent ban.`
      }
    ]
  },
  {
    title: '4. EMS & New Life Rule (NLR)',
    sections: [
      {
        name: 'EMS Revives',
        content: `After a revive:

- Leave the scene immediately.
- No looting or re-engaging for 15 minutes.
- No pulling dead bodies from the scene or robbing involved vehicles.

EMS may refuse to revive if the RP is unsafe or lacks interaction.`
      },
      {
        name: 'New Life Rule',
        content: `If you respawn or are declared dead:

- Forget the events that led to your death.
- Do not return to the area for 15 minutes.
- Do not interact with involved players unless reminded through RP.

You cannot leave yourself notes, send yourself texts, or store messages to recall the scene.`
      }
    ]
  },
  {
    title: '5. Zone & Location Rules',
    sections: [
      {
        name: 'Green Zone',
        content: `Hospital is a crime-free zone unless RP is initiated outside.

- No camping, trolling EMS, or robbing players exiting the hospital.
- Bringing conflict into the hospital must be a natural RP extension.`
      },
      {
        name: 'Revealing Locations',
        content: `Do not leak secret spots (drugs, black market, etc.) via social media or public chat.

- Selling/discussing locations IC is allowed.`
      },
      {
        name: 'Suicide RP',
        content: `Not permitted under any circumstances.

- Being forced to jump (e.g., at gunpoint) is not considered suicide RP.`
      }
    ]
  },
  {
    title: '6. Gangs & Turf',
    sections: [
      {
        name: 'Gang Creation Requirements',
        content: `A minimum of 4 active members is required to apply for gang status.

All 4 must be in the city and active for at least 7 days prior to application.

Once accepted, gangs enter a 1-week probationary period where staff will observe RP quality and group conduct.`
      },
      {
        name: 'Gang Structure',
        content: `Max: 12 full members + 3 hangarounds

Leaders are fully responsible for their members' actions. Poor RP or repeated violations can result in warnings or disbandment.

Gang members must wear a visible item that clearly identifies them as part of their gang at all times.

Includes flags, kuttes, custom chains, or gang-specific accessories.

Simply wearing clothing in your gang's colors does not qualify.`
      },
      {
        name: 'Gang Wars',
        content: `All wars must have significant RP buildup — no “spur-of-the-moment” shootouts.

A ticket must be submitted to staff with:
- RP reason for the war
- Proposed terms and limits (zones, weapons, etc.)

Once a war ends, both gangs enter a 2-week cooldown before initiating or joining another.`
      },
      {
        name: 'Bleeding Out & Switching Gangs',
        content: `If your character is “bled out” (removed from the gang IC), you must:

- Forget all gang knowledge (locations, stash spots, alliances, etc.)
- Wait 14 days before becoming a hangaround for another gang
- Wait an additional 14 days before becoming a full member

If the gang does not RP the bleed-out within 7 days, the character is still considered bled out but retains memory.

If you leave a gang and do not log in for 7 consecutive days, you are auto-bled out and must forget gang knowledge.`
      },
      {
        name: 'Interaction with PD',
        content: `Gangs must engage in quality RP with law enforcement:

- No instant shootouts or getaways during every traffic stop.
- Not every police encounter should escalate into violence.
- Use police RP to build story and character arcs.`
      },
      {
        name: 'Gang Disbandment',
        content: `Staff may disband gangs for:

- Repeated rule violations
- Poor quality RP
- Toxic or non-compliant leadership
- OOC drama spilling into RP`
      }
    ]
  },
  {
    title: '7. Staff & Developer Conduct',
    sections: [
      {
        name: 'Staff Behavior',
        content: `Staff and devs must act professionally and lead by example.

- No spawning items, money, or vehicles for personal use or friends.
- On-duty staff may not roleplay while resolving issues.`
      },
      {
        name: 'Accountability Clause',
        content: `Staff may not punish players for rules they themselves violate.

Abuse of authority, favoritism, or selective enforcement will result in removal or discipline by ownership.`
      },
      {
        name: 'Reporting Staff Abuse',
        content: `Reports of staff abuse will be investigated by ownership.

All players have the right to report misconduct through a support ticket.`
      }
    ]
  },
  {
    title: '8. AFK & Queue Holding',
    sections: [
      {
        name: 'AFK Limits',
        content: `You may not AFK in city for longer than 10 minutes — you will be kicked.`
      },
      {
        name: 'Queue Abuse',
        content: `Do not hold queue spots for friends, alt accounts, or to avoid waiting.

Repeated AFK or queue abuse will result in a warning or temporary suspension.`
      }
    ]
  },
  {
    title: '9. Key RP Terms',
    sections: [
      {
        name: 'Fail RP',
        content: `Unrealistic or immersion-breaking behavior that wouldn't happen in real life.`
      },
      {
        name: 'Bleed Out',
        content: `IC removal from a gang that requires the character to forget gang knowledge.`
      },
      {
        name: 'Powergaming',
        content: `Forcing outcomes or using unrealistic actions to gain an advantage.`
      },
      {
        name: 'On-sight',
        content: `Killing a player immediately without RP interaction.`
      },
      {
        name: 'Combat Logging',
        content: `Logging out mid-scene to avoid consequences.`
      },
      {
        name: 'Stream Sniping',
        content: `Using stream info to gain an in-game advantage.`
      }
    ]
  }
];
export default function RulesPage() {
  const [activeSection, setActiveSection] = useState(null);
  const [openCategories, setOpenCategories] = useState({});
  const [search, setSearch] = useState('');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [mobileRulesOpen, setMobileRulesOpen] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let stars = [];
    const createStars = () => {
      stars = Array.from({ length: 300 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.2,
        alpha: Math.random(),
        delta: Math.random() * 0.015 + 0.005,
      }));
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createStars();
    };

    const animateStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();
        star.alpha += star.delta;
        if (star.alpha <= 0 || star.alpha >= 1) star.delta = -star.delta;
      });
      requestAnimationFrame(animateStars);
    };

    resizeCanvas();
    animateStars();
    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  const toggleCategory = (idx) => {
    setOpenCategories(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const getRuleContent = (titleAndSection) => {
    for (const category of rules) {
      for (const section of category.sections) {
        const fullName = `${category.title} - ${section.name}`;
        if (fullName === titleAndSection) {
          return section.content;
        }
      }
    }
    return null;
  };

  const filteredRules = rules.filter(cat =>
    cat.title.toLowerCase().includes(search.toLowerCase()) ||
    cat.sections.some(sec => sec.name.toLowerCase().includes(search.toLowerCase()))
  );

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Join Us', href: '/join' },
    { name: 'Rules', href: '/rules' },
  ];
  return (
    <div className="relative w-full min-h-screen flex flex-col bg-black overflow-hidden">
      <canvas ref={canvasRef} className="fixed inset-0 z-0" />
      <div className="fixed inset-0 z-10 bg-gradient-to-br from-purple-900 via-blue-900 to-black opacity-60" />

      {/* Top Navigation */}
      <nav className="absolute top-0 z-30 w-full px-6 py-3 text-xl font-semibold">
        <div className="flex justify-between items-center md:hidden">
          <button
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            className="text-white bg-purple-800 hover:bg-purple-700 px-3 py-2 rounded"
          >
            ☰ Menu
          </button>
        </div>
        <div className="hidden md:flex justify-center space-x-10">
          {navLinks.map((link, i) => (
            <Link key={i} href={link.href}>
              <a className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 text-transparent bg-clip-text hover:opacity-80 transition-opacity">
                {link.name}
              </a>
            </Link>
          ))}
        </div>

        {/* Mobile Dropdown Nav + Rules Index */}
        {mobileNavOpen && (
          <div className="md:hidden mt-4 space-y-3 bg-black/80 p-4 rounded-lg">
            {navLinks.map((link, i) => (
              <Link key={i} href={link.href}>
                <a
                  onClick={() => {
                    setMobileNavOpen(false);
                    setMobileRulesOpen(false);
                  }}
                  className="block text-purple-300 hover:text-white transition"
                >
                  {link.name}
                </a>
              </Link>
            ))}
            <button
              onClick={() => setMobileRulesOpen(!mobileRulesOpen)}
              className="w-full text-left text-pink-400 font-bold uppercase text-sm mt-2"
            >
              {mobileRulesOpen ? 'Hide Rules Index' : 'Show Rules Index'}
            </button>
            {mobileRulesOpen && (
              <div className="mt-2 space-y-4">
                {rules.map((category, idx) => (
                  <div key={idx}>
                    <button
                      onClick={() => toggleCategory(idx)}
                      className="text-left w-full text-purple-300 font-medium"
                    >
                      {category.title}
                    </button>
                    <div className={`overflow-hidden transition-all ${openCategories[idx] ? 'max-h-[300px]' : 'max-h-0'}`}>
                      {category.sections.map((section, sIdx) => (
                        <button
                          key={sIdx}
                          onClick={() => {
                            setActiveSection(`${category.title} - ${section.name}`);
                            setMobileNavOpen(false);
                            setMobileRulesOpen(false);
                          }}
                          className={`block text-left text-sm px-2 py-1 w-full rounded ${
                            activeSection === `${category.title} - ${section.name}`
                              ? 'bg-purple-700 text-white font-semibold'
                              : 'text-purple-200 hover:bg-purple-900'
                          }`}
                        >
                          {section.name}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </nav>

      {/* Page Layout */}
      <div className="relative z-20 flex-1 flex flex-col md:flex-row pt-20 pb-20">
        {/* Desktop Sidebar */}
        <aside className="hidden md:block bg-black/70 border-r border-purple-800 p-4 md:w-72 sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto">
          <h2 className="text-xl text-purple-300 font-bold mb-4">Rule Categories</h2>
          {filteredRules.map((category, idx) => (
            <div key={idx} className="mb-4">
              <button
                onClick={() => toggleCategory(idx)}
                className="w-full text-left font-semibold text-pink-400 hover:text-white uppercase text-sm mb-2"
              >
                {category.title}
              </button>
              <div
                className={`ml-2 overflow-hidden transition-all duration-300 ease-in-out ${
                  openCategories[idx] ? 'max-h-[500px]' : 'max-h-0'
                }`}
              >
                {category.sections.map((section, sIdx) => (
                  <button
                    key={sIdx}
                    onClick={() => {
                      setActiveSection(`${category.title} - ${section.name}`);
                    }}
                    className={`block w-full text-left px-3 py-1 text-sm rounded transition ${
                      activeSection === `${category.title} - ${section.name}`
                        ? 'bg-purple-700 text-white font-semibold'
                        : 'text-purple-100 hover:text-white hover:bg-purple-800/30'
                    }`}
                  >
                    {section.name}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 px-6 pt-6 pb-10">
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search rules..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full max-w-lg px-4 py-2 bg-black border border-purple-600 text-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-purple-400"
            />
          </div>

          {activeSection ? (
            <>
              <h1 className="mb-6 text-5xl font-extrabold uppercase bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 text-transparent bg-clip-text">
                {activeSection}
              </h1>
              <p className="text-lg whitespace-pre-line text-zinc-300 max-w-3xl">
                {getRuleContent(activeSection)}
              </p>
            </>
          ) : (
            <>
              <h1 className="mb-6 text-5xl font-extrabold uppercase bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 text-transparent bg-clip-text">
                Welcome to the Abyssal RP Rulebook
              </h1>
              <p className="text-lg text-zinc-300 max-w-2xl">
                Use the sidebar or search to explore detailed server rules.
              </p>
            </>
          )}
        </main>
      </div>

      {/* Footer */}
      <footer className="relative z-20 w-full py-4 text-center text-sm text-white bg-black bg-opacity-60">
        © 2025 Abyssal RP. Designed for storytellers, built by players.
      </footer>
    </div>
  );
}