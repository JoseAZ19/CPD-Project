// CPD i18n dictionary — English (default) and Spanish
const translations = {
    en: {
        nav: {
            home: "Home",
            programs: "Programs",
            gallery: "Gallery",
            testimonials: "Testimonials",
            about: "About",
            contact: "Contact",
            instagram: "Instagram"
        },
        hero: {
            kicker: "Personal Development",
            t1: "Train.",
            t2: "Learn.",
            t3: "Grow.",
            sub: "Elite soccer development, native-speaker Spanish tutoring, and personalized coaching for athletes who believe in their potential.",
            applyNow: "Apply Now",
            explore: "Explore Programs",
            stat1Val: "1-on-1",
            stat1Lbl: "Personalized coaching",
            stat2Val: "4",
            stat2Lbl: "Programs available",
            stat3Val: "Native",
            stat3Lbl: "Spanish tutors"
        },
        programs: {
            kicker: "What we offer",
            title: "Programs",
            sub: "Four pathways to growth — start with what fits you.",
            availableTag: "Available",
            soonTag: "Coming Soon",
            soonShort: "Soon",
            applyLink: "Apply",
            joinWaitlist: "Join waitlist",
            joinWaitlistDesc: "Join the waitlist",
            soccer: {
                title: "Soccer Training",
                desc: "Personal sessions for groups and individuals. Sessions focus on technique, conditioning, and confidence — tailored to each player's needs."
            },
            tutoring: {
                title: "Spanish Tutoring",
                desc: "Unlimited 1-on-1 video classes with native teachers. Beginner to advanced — geared to your goals and schedule."
            },
            basketball: {
                title: "Basketball",
                desc: "Skills, drills, and team play. We're building it — join the waitlist to be the first to know when we launch."
            },
            fitness: {
                title: "Fitness",
                desc: "Strength, conditioning, and overall athletic development for any sport. Launching soon."
            }
        },
        gallery: {
            kicker: "Training in action",
            title: "Gallery",
            sub: "Moments from our sessions, players, and programs.",
            s1: { tag: "Soccer · Training", title: "Group Sessions", desc: "Personalized coaching for groups of any level." },
            s2: { tag: "Field · Practice", title: "On the Pitch", desc: "Drills focused on technique, vision, and confidence." },
            s3: { tag: "Skills · Development", title: "Technical Work", desc: "Dribbling, defending, and ball mastery for any position." },
            s4: { tag: "Team · Moments", title: "Building Players", desc: "Discipline, faith, and consistency — on and off the field." },
            s5: { tag: "Coaching · Mentorship", title: "Team Talks", desc: "Every session starts with focus, presence, and connection." },
            s6: { tag: "Indoor · Training", title: "Year-Round Work", desc: "Indoor sessions keep the work going through every season." },
            s7: { tag: "The Team", title: "Your Coaches", desc: "Experienced, committed, and invested in your growth." }
        },
        testimonials: {
            kicker: "What people say",
            title: "Voices from our community",
            sub: "Real words from athletes, students, and families.",
            t1: {
                quote: "My son's confidence and technique have transformed since we started training with CPD. The personalized attention is something we couldn't find anywhere else.",
                name: "Maria R.",
                role: "Parent · Soccer player"
            },
            t2: {
                quote: "In six months I went from barely speaking Spanish to holding real conversations with my teammates. The tutors are patient, native, and they know what they're doing.",
                name: "James T.",
                role: "Spanish tutoring student"
            },
            t3: {
                quote: "What sets CPD apart is the focus on the whole player — not just skills, but discipline, faith, and consistency. That's rare in youth coaching today.",
                name: "Daniel C.",
                role: "Coach · Local club"
            }
        },
        about: {
            kicker: "Our story",
            title: "Built on belief, hard work, and faith.",
            quote: "\"We believe in your potential.\"",
            quoteAttr: "— Our slogan",
            who: { title: "Who we are", desc: "CPD provides elite soccer development to athletes who need personalized guidance — building confidence, technical skill, and discipline." },
            mission: { title: "Our mission", desc: "Bring out the very best in aspiring athletes. Help them visualize their abilities and pursue greatness on and off the field." },
            vision: { title: "Our vision", desc: "Develop participants as athletes and as people — chasing their dreams with consistency, passion, and faith." }
        },
        contact: {
            kicker: "Get in touch",
            title: "Let's talk",
            sub: "Reach out — we'll get back to you within 24 hours.",
            location: "Location",
            email: "Email",
            phone: "Phone"
        },
        modal: {
            pickerKicker: "Apply",
            pickerTitle: "Choose your program",
            pickerSub: "Which one are you applying for?",
            pickerFoot: "Basketball & Fitness aren't open for applications yet — click them to join the waitlist.",
            soccerTitle: "Soccer",
            soccerDesc: "Personal training & group sessions",
            tutoringTitle: "Spanish Tutoring",
            tutoringDesc: "1-on-1 with native tutors"
        },
        waitlist: {
            kicker: "Waitlist",
            title: "Be the first to know",
            sub: "Drop your email — we'll let you know the moment we launch.",
            nameLabel: "Name",
            namePlaceholder: "Your name",
            emailLabel: "Email",
            emailPlaceholder: "your@email.com",
            submit: "Join waitlist",
            successTitle: "You're on the list!",
            successDesc: "We'll email you the moment this program launches. Thanks for the interest.",
            successClose: "Close"
        },
        floating: {
            apply: "Apply",
            applyAria: "Apply to a program",
            whatsappAria: "Chat on WhatsApp"
        },
        footer: {
            tagline: "Clarke's Personal Development — elite soccer development, Spanish tutoring, and coaching that believes in your potential.",
            copyright: "© 2026 Clarke's Personal Development. All rights reserved."
        },
        apply: {
            soccerKicker: "Soccer Training",
            tutoringKicker: "Spanish Tutoring",
            title: "Apply",
            titleAccent: "Now",
            soccerSub: "Tell us about yourself and we'll get back to you with rates and schedule.",
            tutoringSub: "Tell us about your goals and we'll match you with a native tutor.",
            required: "All fields marked",
            requiredEnd: "are required.",
            sections: {
                personal: "Personal Information",
                player: "Player Profile",
                program: "Program & Preferences",
                contact: "Contact Information",
                goals: "Your Goals"
            },
            fields: {
                fullName: "Full name",
                fullNamePh: "Player full name",
                email: "Email",
                mobile: "Mobile number",
                dob: "Date of birth",
                address: "Address",
                addressPh: "Street, city, state",
                nationality: "Nationality",
                nationalityPh: "Nationality",
                height: "Height",
                weight: "Weight",
                dominantFoot: "Dominant foot",
                position: "Position",
                program: "Program",
                tshirtSize: "T-shirt size",
                instagram: "Instagram",
                commitment: "Commitment level",
                history: "Background & goals",
                historyPh: "Tell us about your soccer background, any injuries, and what you want to achieve...",
                name: "Name",
                namePh: "Your name",
                phone: "Phone",
                level: "Spanish level",
                message: "Goals & schedule preferences",
                messagePh: "Tell us what you want to achieve, your availability, and any context that helps us match you with the right tutor..."
            },
            select: "Select...",
            selectPosition: "Select position...",
            selectProgram: "Select program...",
            submit: "Submit Application",
            foot: { right: "Right", left: "Left", both: "Both" },
            positions: {
                gk: "Goalkeeper", cb: "Center Back", lb: "Left Back", rb: "Right Back",
                dm: "Defensive Midfielder", cm: "Central Midfielder", am: "Attacking Midfielder",
                lw: "Left Winger", rw: "Right Winger", fw: "Forward / Striker"
            },
            programs: {
                group: "Group Sessions",
                private: "Private 1-on-1 Sessions",
                semi: "Semi-private (2-4 players)",
                technical: "Technical Skills Program",
                strength: "Strength & Conditioning"
            },
            level: { beginner: "Beginner", intermediate: "Intermediate", advanced: "Advanced" },
            commitment: { low: "Low", medium: "Medium", high: "High" }
        }
    },
    es: {
        nav: {
            home: "Inicio",
            programs: "Programas",
            gallery: "Galería",
            testimonials: "Testimonios",
            about: "Nosotros",
            contact: "Contacto",
            instagram: "Instagram"
        },
        hero: {
            kicker: "Desarrollo Personal",
            t1: "Entrená.",
            t2: "Aprendé.",
            t3: "Crecé.",
            sub: "Desarrollo de fútbol de élite, tutorías de español con profesores nativos y coaching personalizado para atletas que creen en su potencial.",
            applyNow: "Aplicar ahora",
            explore: "Ver programas",
            stat1Val: "1 a 1",
            stat1Lbl: "Coaching personalizado",
            stat2Val: "4",
            stat2Lbl: "Programas disponibles",
            stat3Val: "Nativos",
            stat3Lbl: "Tutores de español"
        },
        programs: {
            kicker: "Lo que ofrecemos",
            title: "Programas",
            sub: "Cuatro caminos para crecer — empezá con el que mejor se adapte a vos.",
            availableTag: "Disponible",
            soonTag: "Próximamente",
            soonShort: "Pronto",
            applyLink: "Aplicar",
            joinWaitlist: "Sumate a la lista",
            joinWaitlistDesc: "Sumate a la lista de espera",
            soccer: {
                title: "Entrenamiento de Fútbol",
                desc: "Sesiones personales para grupos e individuos. Cada sesión se enfoca en técnica, condición física y confianza — adaptada a las necesidades del jugador."
            },
            tutoring: {
                title: "Tutoría de Español",
                desc: "Clases ilimitadas 1 a 1 por video con profesores nativos. Desde principiante hasta avanzado — adaptado a tus objetivos y horario."
            },
            basketball: {
                title: "Basketball",
                desc: "Habilidades, drills y juego en equipo. Estamos construyéndolo — sumate a la lista de espera para enterarte cuando lancemos."
            },
            fitness: {
                title: "Fitness",
                desc: "Fuerza, condición física y desarrollo atlético integral para cualquier deporte. Lanzamiento próximo."
            }
        },
        gallery: {
            kicker: "Entrenamiento en acción",
            title: "Galería",
            sub: "Momentos de nuestras sesiones, jugadores y programas.",
            s1: { tag: "Fútbol · Entrenamiento", title: "Sesiones Grupales", desc: "Coaching personalizado para grupos de cualquier nivel." },
            s2: { tag: "Cancha · Práctica", title: "En el Campo", desc: "Drills enfocados en técnica, visión y confianza." },
            s3: { tag: "Habilidades · Desarrollo", title: "Trabajo Técnico", desc: "Gambeta, defensa y dominio del balón para cualquier posición." },
            s4: { tag: "Equipo · Momentos", title: "Formando Jugadores", desc: "Disciplina, fe y consistencia — dentro y fuera de la cancha." },
            s5: { tag: "Coaching · Mentoría", title: "Charlas de Equipo", desc: "Cada sesión empieza con foco, presencia y conexión." },
            s6: { tag: "Indoor · Entrenamiento", title: "Trabajo Todo el Año", desc: "Las sesiones indoor mantienen el ritmo en cualquier temporada." },
            s7: { tag: "El Equipo", title: "Tus Coaches", desc: "Experimentados, comprometidos y enfocados en tu crecimiento." }
        },
        testimonials: {
            kicker: "Lo que dicen",
            title: "Voces de nuestra comunidad",
            sub: "Palabras reales de atletas, estudiantes y familias.",
            t1: {
                quote: "La confianza y la técnica de mi hijo se transformaron desde que empezamos a entrenar con CPD. La atención personalizada es algo que no encontramos en ningún otro lado.",
                name: "María R.",
                role: "Madre · Jugador de fútbol"
            },
            t2: {
                quote: "En seis meses pasé de apenas hablar español a tener conversaciones reales con mis compañeros. Los tutores son pacientes, nativos y saben lo que hacen.",
                name: "James T.",
                role: "Estudiante de español"
            },
            t3: {
                quote: "Lo que distingue a CPD es el enfoque en el jugador completo — no solo las habilidades, también la disciplina, la fe y la consistencia. Eso es raro en el coaching juvenil hoy.",
                name: "Daniel C.",
                role: "Entrenador · Club local"
            }
        },
        about: {
            kicker: "Nuestra historia",
            title: "Construido sobre fe, esfuerzo y creer.",
            quote: "\"Creemos en tu potencial.\"",
            quoteAttr: "— Nuestro lema",
            who: { title: "Quiénes somos", desc: "CPD ofrece desarrollo de fútbol de élite a atletas que necesitan guía personalizada — construyendo confianza, técnica y disciplina." },
            mission: { title: "Nuestra misión", desc: "Sacar lo mejor de cada atleta. Ayudarles a visualizar sus capacidades y perseguir la grandeza dentro y fuera de la cancha." },
            vision: { title: "Nuestra visión", desc: "Desarrollar a nuestros participantes como atletas y como personas — persiguiendo sus sueños con consistencia, pasión y fe." }
        },
        contact: {
            kicker: "Contactanos",
            title: "Hablemos",
            sub: "Escribinos — respondemos en menos de 24 horas.",
            location: "Ubicación",
            email: "Email",
            phone: "Teléfono"
        },
        modal: {
            pickerKicker: "Aplicar",
            pickerTitle: "Elegí tu programa",
            pickerSub: "¿A cuál querés aplicar?",
            pickerFoot: "Basketball y Fitness aún no están abiertos para aplicar — clickealos para sumarte a la lista de espera.",
            soccerTitle: "Fútbol",
            soccerDesc: "Entrenamiento personal y sesiones grupales",
            tutoringTitle: "Tutoría de Español",
            tutoringDesc: "1 a 1 con profesores nativos"
        },
        waitlist: {
            kicker: "Lista de espera",
            title: "Sé el primero en enterarte",
            sub: "Dejanos tu email — te avisamos en cuanto lancemos.",
            nameLabel: "Nombre",
            namePlaceholder: "Tu nombre",
            emailLabel: "Email",
            emailPlaceholder: "tu@email.com",
            submit: "Sumarme a la lista",
            successTitle: "¡Estás en la lista!",
            successDesc: "Te vamos a escribir en cuanto lancemos este programa. Gracias por el interés.",
            successClose: "Cerrar"
        },
        floating: {
            apply: "Aplicar",
            applyAria: "Aplicar a un programa",
            whatsappAria: "Chatear por WhatsApp"
        },
        footer: {
            tagline: "Clarke's Personal Development — desarrollo de fútbol de élite, tutorías de español y coaching que cree en tu potencial.",
            copyright: "© 2026 Clarke's Personal Development. Todos los derechos reservados."
        },
        apply: {
            soccerKicker: "Entrenamiento de Fútbol",
            tutoringKicker: "Tutoría de Español",
            title: "Aplicar",
            titleAccent: "Ahora",
            soccerSub: "Contanos sobre vos y te respondemos con tarifas y horarios.",
            tutoringSub: "Contanos tus objetivos y te asignamos un tutor nativo.",
            required: "Los campos marcados con",
            requiredEnd: "son obligatorios.",
            sections: {
                personal: "Información Personal",
                player: "Perfil del Jugador",
                program: "Programa y Preferencias",
                contact: "Información de Contacto",
                goals: "Tus Objetivos"
            },
            fields: {
                fullName: "Nombre completo",
                fullNamePh: "Nombre completo del jugador",
                email: "Email",
                mobile: "Número de celular",
                dob: "Fecha de nacimiento",
                address: "Dirección",
                addressPh: "Calle, ciudad, estado",
                nationality: "Nacionalidad",
                nationalityPh: "Nacionalidad",
                height: "Altura",
                weight: "Peso",
                dominantFoot: "Pie dominante",
                position: "Posición",
                program: "Programa",
                tshirtSize: "Talle de remera",
                instagram: "Instagram",
                commitment: "Nivel de compromiso",
                history: "Historia y objetivos",
                historyPh: "Contanos sobre tu historia en el fútbol, lesiones y qué querés lograr...",
                name: "Nombre",
                namePh: "Tu nombre",
                phone: "Teléfono",
                level: "Nivel de español",
                message: "Objetivos y horarios disponibles",
                messagePh: "Contanos qué querés lograr, tu disponibilidad y cualquier contexto que ayude a asignarte el tutor correcto..."
            },
            select: "Seleccionar...",
            selectPosition: "Seleccionar posición...",
            selectProgram: "Seleccionar programa...",
            submit: "Enviar aplicación",
            foot: { right: "Derecho", left: "Izquierdo", both: "Ambos" },
            positions: {
                gk: "Arquero", cb: "Defensor Central", lb: "Lateral Izquierdo", rb: "Lateral Derecho",
                dm: "Volante Defensivo", cm: "Volante Central", am: "Volante Ofensivo",
                lw: "Extremo Izquierdo", rw: "Extremo Derecho", fw: "Delantero"
            },
            programs: {
                group: "Sesiones Grupales",
                private: "Sesiones Privadas 1 a 1",
                semi: "Semi-privadas (2-4 jugadores)",
                technical: "Programa de Habilidades Técnicas",
                strength: "Fuerza y Acondicionamiento"
            },
            level: { beginner: "Principiante", intermediate: "Intermedio", advanced: "Avanzado" },
            commitment: { low: "Bajo", medium: "Medio", high: "Alto" }
        }
    }
};

// Helper: read nested key like "hero.sub" from translations[lang]
function getTranslation(lang, key) {
    const parts = key.split('.');
    let value = translations[lang];
    for (const p of parts) {
        if (!value) return null;
        value = value[p];
    }
    return value;
}

// Apply translations to all [data-i18n] elements
function applyLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dataset.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const val = getTranslation(lang, el.dataset.i18n);
        if (typeof val === 'string') el.textContent = val;
    });

    // data-i18n-attr="placeholder:waitlist.namePlaceholder,aria-label:..."
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
        el.dataset.i18nAttr.split(',').forEach(pair => {
            const [attr, key] = pair.split(':').map(s => s.trim());
            const val = getTranslation(lang, key);
            if (typeof val === 'string') el.setAttribute(attr, val);
        });
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
        const val = getTranslation(lang, el.dataset.i18nAria);
        if (typeof val === 'string') el.setAttribute('aria-label', val);
    });

    // Update lang toggle visual state
    document.querySelectorAll('[data-lang-toggle]').forEach(btn => {
        const flags = btn.querySelectorAll('.lang-flag');
        flags.forEach(f => {
            const isActive = f.textContent.toLowerCase() === lang;
            f.classList.toggle('inactive', !isActive);
        });
    });

    try { localStorage.setItem('cpd-lang', lang); } catch (e) {}
}

// Init i18n on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    let saved;
    try { saved = localStorage.getItem('cpd-lang'); } catch (e) {}
    const browserLang = (navigator.language || 'en').toLowerCase().startsWith('es') ? 'es' : 'en';
    const initial = saved || browserLang;
    applyLanguage(initial);

    document.querySelectorAll('[data-lang-toggle]').forEach(btn => {
        btn.addEventListener('click', () => {
            const current = document.documentElement.dataset.lang || 'en';
            applyLanguage(current === 'en' ? 'es' : 'en');
        });
    });
});
