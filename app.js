const VOICE_STORAGE_KEYS = {
    male: "maVoixMaleVoiceName",
    female: "maVoixFemaleVoiceName",
    active: "maVoixActiveVoiceType"
};

const LANGUAGE_STORAGE_KEYS = {
    patient: "maVoixPatientLanguage",
    caregiver: "maVoixCaregiverLanguage"
};

const SUPPORTED_LANGUAGES = [
    "fr",
    "en",
    "de",
    "it"
];

const LANGUAGE_LOCALES = {
    fr: "fr-FR",
    en: "en-GB",
    de: "de-DE",
    it: "it-IT"
};


const QUICK_PHRASES = {

    yes: {
        fr: {
            label: "OUI",
            speech: "Oui"
        },
        en: {
            label: "YES",
            speech: "Yes"
        },
        de: {
            label: "JA",
            speech: "Ja"
        },
        it: {
            label: "SÌ",
            speech: "Sì"
        }
    },

    no: {
        fr: {
            label: "NON",
            speech: "Non"
        },
        en: {
            label: "NO",
            speech: "No"
        },
        de: {
            label: "NEIN",
            speech: "Nein"
        },
        it: {
            label: "NO",
            speech: "No"
        }
    },

    stop: {
        fr: {
            label: "STOP",
            speech: "Stop, s’il vous plaît"
        },
        en: {
            label: "STOP",
            speech: "Stop, please"
        },
        de: {
            label: "STOPP",
            speech: "Stopp, bitte"
        },
        it: {
            label: "STOP",
            speech: "Stop, per favore"
        }
    }

};

/* =========================================
   ÉCRAN PRINCIPAL — TRADUCTIONS
   ========================================= */

const HOME_TRANSLATIONS = {

    fr: {
        title: "Je veux vous dire…",
        respiration: "RESPIRATION /<br>GORGE",
        pain: "J'AI MAL",
        position: "POSITION",
        care: "BESOIN DE SOINS",
        hygiene: "TOILETTES",
        environment: "MA CHAMBRE",
        questions: "QUESTIONS<br>MÉDECIN",
        understand: "COMPRENDRE",
        talk: "FAMILLE / AMIS",
        emotions: "ÉMOTIONS",
        recharge: "RECHARGEZ<br>MON TÉLÉPHONE",
        rechargeSpeech: "Rechargez mon téléphone, s’il vous plaît",
        phrases: "MES PHRASES",
        voice: "VOIX",
        about: "À PROPOS"
    },

    en: {
        title: "I want to tell you…",
        respiration: "BREATHING /<br>THROAT",
        pain: "I'M IN PAIN",
        position: "POSITION",
        care: "I NEED CARE",
        hygiene: "TOILET /<br>HYGIENE",
        environment: "MY ROOM",
        questions: "QUESTIONS<br>FOR THE DOCTOR",
        understand: "UNDERSTAND",
        talk: "FAMILY / FRIENDS",
        emotions: "EMOTIONS",
        recharge: "CHARGE<br>MY PHONE",
        rechargeSpeech: "Please charge my phone",
        phrases: "MY PHRASES",
        voice: "VOICE",
        about: "ABOUT"
    },

    de: {
        title: "Ich möchte Ihnen sagen…",
        respiration: "ATMUNG /<br>HALS",
        pain: "ICH HABE SCHMERZEN",
        position: "POSITION",
        care: "ICH BRAUCHE PFLEGE",
        hygiene: "TOILETTE /<br>HYGIENE",
        environment: "MEIN ZIMMER",
        questions: "FRAGEN AN<br>DEN ARZT",
        understand: "VERSTEHEN",
        talk: "FAMILIE / FREUNDE",
        emotions: "GEFÜHLE",
        recharge: "BITTE MEIN<br>HANDY LADEN",
        rechargeSpeech: "Bitte laden Sie mein Handy auf",
        phrases: "MEINE SÄTZE",
        voice: "STIMME",
        about: "ÜBER DIE APP"
    },

    it: {
        title: "Vorrei dirle…",
        respiration: "RESPIRAZIONE /<br>GOLA",
        pain: "HO DOLORE",
        position: "POSIZIONE",
        care: "HO BISOGNO DI CURE",
        hygiene: "TOILETTE /<br>IGIENE",
        environment: "LA MIA STANZA",
        questions: "DOMANDE<br>AL MEDICO",
        understand: "CAPIRE",
        talk: "FAMIGLIA / AMICI",
        emotions: "EMOZIONI",
        recharge: "CARICATE<br>IL MIO TELEFONO",
        rechargeSpeech: "Per favore, caricate il mio telefono",
        phrases: "LE MIE FRASI",
        voice: "VOCE",
        about: "INFORMAZIONI"
    }

};

/* =========================================
   RESPIRATION — TRADUCTIONS
   ========================================= */

const RESPIRATION_TRANSLATIONS = {

    fr: {

        title: "Respiration",

        breathing: {
            label: "J'AI DU MAL<br>À RESPIRER",
            speech: "J’ai du mal à respirer"
        },

        suction: {
            label: "J'AI BESOIN<br>D'ÊTRE ASPIRÉ",
            speech: "J’ai besoin d’être aspiré"
        },

        secretions: {
            label: "SÉCRÉTIONS",
            speech: "J’ai des sécrétions qui me gênent"
        },

        blocked: {
            label: "ÇA SEMBLE<br>BOUCHÉ",
            speech: "J’ai l’impression que quelque chose est bouché"
        },

        tracheostomyPain: {
            label: "DOULEUR AUTOUR<br>DE LA TRACHÉOTOMIE",
            speech: "J’ai mal autour de ma trachéotomie"
        },

        dryThroat: {
            label: "GORGE SÈCHE",
            speech: "J’ai la gorge sèche"
        },

        dryMouth: {
            label: "BOUCHE SÈCHE",
            speech: "J’ai la bouche très sèche"
        },

        better: {
            label: "ÇA VA MIEUX",
            speech: "Ça va mieux maintenant"
        },

        notBetter: {
            label: "ÇA NE VA<br>PAS MIEUX",
            speech: "Ça ne va toujours pas mieux"
        },

        stay: {
            label: "RESTEZ<br>AVEC MOI",
            speech: "Restez avec moi, s’il vous plaît"
        }
    },


    en: {

        title: "Breathing",

        breathing: {
            label: "I'M HAVING TROUBLE<br>BREATHING",
            speech: "I'm having trouble breathing"
        },

        suction: {
            label: "I NEED<br>SUCTION",
            speech: "I need to be suctioned"
        },

        secretions: {
            label: "SECRETIONS",
            speech: "I have secretions that are bothering me"
        },

        blocked: {
            label: "IT FEELS<br>BLOCKED",
            speech: "It feels like something is blocked"
        },

        tracheostomyPain: {
            label: "PAIN AROUND<br>TRACHEOSTOMY",
            speech: "I have pain around my tracheostomy"
        },

        dryThroat: {
            label: "DRY THROAT",
            speech: "My throat is dry"
        },

        dryMouth: {
            label: "DRY MOUTH",
            speech: "My mouth is very dry"
        },

        better: {
            label: "I FEEL BETTER",
            speech: "I feel better now"
        },

        notBetter: {
            label: "STILL NOT<br>BETTER",
            speech: "I still don't feel better"
        },

        stay: {
            label: "STAY<br>WITH ME",
            speech: "Please stay with me"
        }
    },


    de: {

        title: "Atmung",

        breathing: {
            label: "ICH BEKOMME<br>SCHLECHT LUFT",
            speech: "Ich bekomme schlecht Luft"
        },

        suction: {
            label: "BITTE<br>ABSAUGEN",
            speech: "Ich muss abgesaugt werden"
        },

        secretions: {
            label: "SEKRET",
            speech: "Ich habe Sekret, das mich stört"
        },

        blocked: {
            label: "ETWAS IST<br>BLOCKIERT",
            speech: "Ich habe das Gefühl, dass etwas blockiert ist"
        },

        tracheostomyPain: {
            label: "SCHMERZEN AN DER<br>TRACHEOSTOMIE",
            speech: "Ich habe Schmerzen im Bereich der Tracheostomie"
        },

        dryThroat: {
            label: "TROCKENER HALS",
            speech: "Mein Hals ist trocken"
        },

        dryMouth: {
            label: "TROCKENER MUND",
            speech: "Mein Mund ist sehr trocken"
        },

        better: {
            label: "ES GEHT<br>BESSER",
            speech: "Jetzt geht es mir besser"
        },

        notBetter: {
            label: "NOCH NICHT<br>BESSER",
            speech: "Es geht mir immer noch nicht besser"
        },

        stay: {
            label: "BLEIBEN SIE<br>BEI MIR",
            speech: "Bitte bleiben Sie bei mir"
        }
    },


    it: {

        title: "Respirazione",

        breathing: {
            label: "FACCIO FATICA<br>A RESPIRARE",
            speech: "Faccio fatica a respirare"
        },

        suction: {
            label: "HO BISOGNO<br>DI ASPIRAZIONE",
            speech: "Ho bisogno di essere aspirato"
        },

        secretions: {
            label: "SECREZIONI",
            speech: "Ho delle secrezioni che mi danno fastidio"
        },

        blocked: {
            label: "SEMBRA<br>OSTRUITO",
            speech: "Ho l'impressione che ci sia qualcosa di ostruito"
        },

        tracheostomyPain: {
            label: "DOLORE INTORNO<br>ALLA TRACHEOSTOMIA",
            speech: "Ho dolore intorno alla tracheostomia"
        },

        dryThroat: {
            label: "GOLA SECCA",
            speech: "Ho la gola secca"
        },

        dryMouth: {
            label: "BOCCA SECCA",
            speech: "Ho la bocca molto secca"
        },

        better: {
            label: "ORA VA MEGLIO",
            speech: "Adesso va meglio"
        },

        notBetter: {
            label: "NON VA<br>ANCORA MEGLIO",
            speech: "Non va ancora meglio"
        },

        stay: {
            label: "RESTI<br>CON ME",
            speech: "Rimanga con me, per favore"
        }
    }

};

/* =========================================
   DOULEUR — TRADUCTIONS
   ========================================= */

const PAIN_TRANSLATIONS = {

    fr: {
        title: "Douleur",
        where: "Où avez-vous mal ?",
        intensity: "Quelle intensité ?",
        changeLocation: "← CHANGER L'ENDROIT"
    },

    en: {
        title: "Pain",
        where: "Where does it hurt?",
        intensity: "How severe is the pain?",
        changeLocation: "← CHANGE LOCATION"
    },

    de: {
        title: "Schmerzen",
        where: "Wo haben Sie Schmerzen?",
        intensity: "Wie stark sind die Schmerzen?",
        changeLocation: "← ANDERE STELLE"
    },

    it: {
        title: "Dolore",
        where: "Dove ha dolore?",
        intensity: "Quanto è forte il dolore?",
        changeLocation: "← CAMBIA ZONA"
    }

};

/* =========================================
   DOULEUR — LOCALISATIONS
   ========================================= */

const PAIN_LOCATIONS = {

    head: {

        fr: {
            label: "TÊTE",
            speech: "J’ai mal à la tête"
        },

        en: {
            label: "HEAD",
            speech: "My head hurts"
        },

        de: {
            label: "KOPF",
            speech: "Ich habe Kopfschmerzen"
        },

        it: {
            label: "TESTA",
            speech: "Ho mal di testa"
        }
    },


    neck: {

        fr: {
            label: "COU",
            speech: "J’ai mal au cou"
        },

        en: {
            label: "NECK",
            speech: "I have pain in my neck"
        },

        de: {
            label: "NACKEN",
            speech: "Ich habe Schmerzen im Nacken"
        },

        it: {
            label: "COLLO",
            speech: "Ho dolore al collo"
        }
    },


    throat: {

        fr: {
            label: "GORGE",
            speech: "J’ai mal à la gorge"
        },

        en: {
            label: "THROAT",
            speech: "I have pain in my throat"
        },

        de: {
            label: "HALS",
            speech: "Ich habe Schmerzen im Hals"
        },

        it: {
            label: "GOLA",
            speech: "Ho dolore alla gola"
        }
    },


    chest: {

        fr: {
            label: "POITRINE",
            speech: "J’ai mal à la poitrine"
        },

        en: {
            label: "CHEST",
            speech: "I have pain in my chest"
        },

        de: {
            label: "BRUST",
            speech: "Ich habe Schmerzen in der Brust"
        },

        it: {
            label: "PETTO",
            speech: "Ho dolore al petto"
        }
    },


    back: {

        fr: {
            label: "DOS",
            speech: "J’ai mal au dos"
        },

        en: {
            label: "BACK",
            speech: "I have pain in my back"
        },

        de: {
            label: "RÜCKEN",
            speech: "Ich habe Schmerzen im Rücken"
        },

        it: {
            label: "SCHIENA",
            speech: "Ho dolore alla schiena"
        }
    },


    abdomen: {

        fr: {
            label: "VENTRE",
            speech: "J’ai mal au ventre"
        },

        en: {
            label: "ABDOMEN",
            speech: "I have pain in my abdomen"
        },

        de: {
            label: "BAUCH",
            speech: "Ich habe Schmerzen im Bauch"
        },

        it: {
            label: "PANCIA",
            speech: "Ho dolore alla pancia"
        }
    },


    leftShoulder: {

        fr: {
            label: "ÉPAULE<br>GAUCHE",
            speech: "J’ai mal à l’épaule gauche"
        },

        en: {
            label: "LEFT<br>SHOULDER",
            speech: "I have pain in my left shoulder"
        },

        de: {
            label: "LINKE<br>SCHULTER",
            speech: "Ich habe Schmerzen in der linken Schulter"
        },

        it: {
            label: "SPALLA<br>SINISTRA",
            speech: "Ho dolore alla spalla sinistra"
        }
    },


    rightShoulder: {

        fr: {
            label: "ÉPAULE<br>DROITE",
            speech: "J’ai mal à l’épaule droite"
        },

        en: {
            label: "RIGHT<br>SHOULDER",
            speech: "I have pain in my right shoulder"
        },

        de: {
            label: "RECHTE<br>SCHULTER",
            speech: "Ich habe Schmerzen in der rechten Schulter"
        },

        it: {
            label: "SPALLA<br>DESTRA",
            speech: "Ho dolore alla spalla destra"
        }
    },


    leftArm: {

        fr: {
            label: "BRAS<br>GAUCHE",
            speech: "J’ai mal au bras gauche"
        },

        en: {
            label: "LEFT<br>ARM",
            speech: "I have pain in my left arm"
        },

        de: {
            label: "LINKER<br>ARM",
            speech: "Ich habe Schmerzen im linken Arm"
        },

        it: {
            label: "BRACCIO<br>SINISTRO",
            speech: "Ho dolore al braccio sinistro"
        }
    },


    rightArm: {

        fr: {
            label: "BRAS<br>DROIT",
            speech: "J’ai mal au bras droit"
        },

        en: {
            label: "RIGHT<br>ARM",
            speech: "I have pain in my right arm"
        },

        de: {
            label: "RECHTER<br>ARM",
            speech: "Ich habe Schmerzen im rechten Arm"
        },

        it: {
            label: "BRACCIO<br>DESTRO",
            speech: "Ho dolore al braccio destro"
        }
    },


    leftHand: {

        fr: {
            label: "MAIN<br>GAUCHE",
            speech: "J’ai mal à la main gauche"
        },

        en: {
            label: "LEFT<br>HAND",
            speech: "I have pain in my left hand"
        },

        de: {
            label: "LINKE<br>HAND",
            speech: "Ich habe Schmerzen in der linken Hand"
        },

        it: {
            label: "MANO<br>SINISTRA",
            speech: "Ho dolore alla mano sinistra"
        }
    },


    rightHand: {

        fr: {
            label: "MAIN<br>DROITE",
            speech: "J’ai mal à la main droite"
        },

        en: {
            label: "RIGHT<br>HAND",
            speech: "I have pain in my right hand"
        },

        de: {
            label: "RECHTE<br>HAND",
            speech: "Ich habe Schmerzen in der rechten Hand"
        },

        it: {
            label: "MANO<br>DESTRA",
            speech: "Ho dolore alla mano destra"
        }
    },


    leftHip: {

        fr: {
            label: "HANCHE<br>GAUCHE",
            speech: "J’ai mal à la hanche gauche"
        },

        en: {
            label: "LEFT<br>HIP",
            speech: "I have pain in my left hip"
        },

        de: {
            label: "LINKE<br>HÜFTE",
            speech: "Ich habe Schmerzen in der linken Hüfte"
        },

        it: {
            label: "ANCA<br>SINISTRA",
            speech: "Ho dolore all’anca sinistra"
        }
    },


    rightHip: {

        fr: {
            label: "HANCHE<br>DROITE",
            speech: "J’ai mal à la hanche droite"
        },

        en: {
            label: "RIGHT<br>HIP",
            speech: "I have pain in my right hip"
        },

        de: {
            label: "RECHTE<br>HÜFTE",
            speech: "Ich habe Schmerzen in der rechten Hüfte"
        },

        it: {
            label: "ANCA<br>DESTRA",
            speech: "Ho dolore all’anca destra"
        }
    },


    leftLeg: {

        fr: {
            label: "JAMBE<br>GAUCHE",
            speech: "J’ai mal à la jambe gauche"
        },

        en: {
            label: "LEFT<br>LEG",
            speech: "I have pain in my left leg"
        },

        de: {
            label: "LINKES<br>BEIN",
            speech: "Ich habe Schmerzen im linken Bein"
        },

        it: {
            label: "GAMBA<br>SINISTRA",
            speech: "Ho dolore alla gamba sinistra"
        }
    },


    rightLeg: {

        fr: {
            label: "JAMBE<br>DROITE",
            speech: "J’ai mal à la jambe droite"
        },

        en: {
            label: "RIGHT<br>LEG",
            speech: "I have pain in my right leg"
        },

        de: {
            label: "RECHTES<br>BEIN",
            speech: "Ich habe Schmerzen im rechten Bein"
        },

        it: {
            label: "GAMBA<br>DESTRA",
            speech: "Ho dolore alla gamba destra"
        }
    },


    leftFoot: {

        fr: {
            label: "PIED<br>GAUCHE",
            speech: "J’ai mal au pied gauche"
        },

        en: {
            label: "LEFT<br>FOOT",
            speech: "I have pain in my left foot"
        },

        de: {
            label: "LINKER<br>FUSS",
            speech: "Ich habe Schmerzen im linken Fuß"
        },

        it: {
            label: "PIEDE<br>SINISTRO",
            speech: "Ho dolore al piede sinistro"
        }
    },


    rightFoot: {

        fr: {
            label: "PIED<br>DROIT",
            speech: "J’ai mal au pied droit"
        },

        en: {
            label: "RIGHT<br>FOOT",
            speech: "I have pain in my right foot"
        },

        de: {
            label: "RECHTER<br>FUSS",
            speech: "Ich habe Schmerzen im rechten Fuß"
        },

        it: {
            label: "PIEDE<br>DESTRO",
            speech: "Ho dolore al piede destro"
        }
    }

};

/* =========================================
   POSITION / CONFORT — TRADUCTIONS
   ========================================= */

const POSITION_TRANSLATIONS = {

    fr: {

        title: "Position / Confort",

        bed: {
            label: "COUCHEZ-MOI",
            speech: "Remettez-moi dans le lit, s’il vous plaît"
        },

        chair: {
            label: "ASSEYEZ-MOI",
            speech: "Mettez-moi sur le fauteuil, s’il vous plaît"
        },

        moveUp: {
            label: "REMONTEZ-MOI",
            speech: "Remontez-moi dans le lit, s’il vous plaît"
        },

        moveDown: {
            label: "DESCENDEZ-MOI",
            speech: "Descendez-moi un peu, s’il vous plaît"
        },

        turnLeft: {
            label: "TOURNEZ-MOI<br>À GAUCHE",
            speech: "Tournez-moi à gauche, s’il vous plaît"
        },

        turnRight: {
            label: "TOURNEZ-MOI<br>À DROITE",
            speech: "Tournez-moi à droite, s’il vous plaît"
        },

        sitUp: {
            label: "REDRESSEZ-MOI",
            speech: "Redressez-moi, s’il vous plaît"
        },

        flatter: {
            label: "ALLONGEZ-MOI",
            speech: "Allongez-moi davantage, s’il vous plaît"
        },

        headUp: {
            label: "MONTEZ<br>LA TÊTE DU LIT",
            speech: "Montez la tête du lit, s’il vous plaît"
        },

        headDown: {
            label: "BAISSEZ<br>LA TÊTE DU LIT",
            speech: "Baissez la tête du lit, s’il vous plaît"
        },

        legsUp: {
            label: "MONTEZ<br>MES JAMBES",
            speech: "Montez mes jambes, s’il vous plaît"
        },

        legsDown: {
            label: "BAISSEZ<br>MES JAMBES",
            speech: "Baissez mes jambes, s’il vous plaît"
        },

        pillow: {
            label: "OREILLER",
            speech: "J’ai besoin d’un oreiller"
        },

        removePillow: {
            label: "ENLEVEZ<br>L'OREILLER",
            speech: "Enlevez cet oreiller, s’il vous plaît"
        },

        hot: {
            label: "J'AI CHAUD",
            speech: "J’ai chaud"
        },

        cold: {
            label: "J'AI FROID",
            speech: "J’ai froid"
        },

        blanket: {
            label: "COUVERTURE",
            speech: "Mettez-moi une couverture, s’il vous plaît"
        },

        removeBlanket: {
            label: "ENLEVEZ<br>LA COUVERTURE",
            speech: "Enlevez la couverture, s’il vous plaît"
        },

        positionHurts: {
            label: "CETTE POSITION<br>ME FAIT MAL",
            speech: "Cette position me fait mal"
        },

        comfortable: {
            label: "JE SUIS BIEN<br>COMME ÇA",
            speech: "Je suis bien comme ça"
        }
    },


    en: {

        title: "Position / Comfort",

        bed: {
            label: "PUT ME<br>BACK IN BED",
            speech: "Please put me back in bed"
        },

        chair: {
            label: "SIT ME<br>IN THE CHAIR",
            speech: "Please sit me in the chair"
        },

        moveUp: {
            label: "MOVE ME<br>UP IN BED",
            speech: "Please move me up in the bed"
        },

        moveDown: {
            label: "MOVE ME<br>DOWN A LITTLE",
            speech: "Please move me down a little"
        },

        turnLeft: {
            label: "TURN ME<br>TO THE LEFT",
            speech: "Please turn me to the left"
        },

        turnRight: {
            label: "TURN ME<br>TO THE RIGHT",
            speech: "Please turn me to the right"
        },

        sitUp: {
            label: "SIT ME UP",
            speech: "Please sit me more upright"
        },

        flatter: {
            label: "LAY ME<br>FLATTER",
            speech: "Please lay me flatter"
        },

        headUp: {
            label: "RAISE THE<br>HEAD OF THE BED",
            speech: "Please raise the head of the bed"
        },

        headDown: {
            label: "LOWER THE<br>HEAD OF THE BED",
            speech: "Please lower the head of the bed"
        },

        legsUp: {
            label: "RAISE<br>MY LEGS",
            speech: "Please raise my legs"
        },

        legsDown: {
            label: "LOWER<br>MY LEGS",
            speech: "Please lower my legs"
        },

        pillow: {
            label: "PILLOW",
            speech: "I need a pillow"
        },

        removePillow: {
            label: "REMOVE<br>THE PILLOW",
            speech: "Please remove this pillow"
        },

        hot: {
            label: "I'M HOT",
            speech: "I'm hot"
        },

        cold: {
            label: "I'M COLD",
            speech: "I'm cold"
        },

        blanket: {
            label: "BLANKET",
            speech: "Please give me a blanket"
        },

        removeBlanket: {
            label: "REMOVE<br>THE BLANKET",
            speech: "Please remove the blanket"
        },

        positionHurts: {
            label: "THIS POSITION<br>HURTS",
            speech: "This position hurts"
        },

        comfortable: {
            label: "I'M COMFORTABLE<br>LIKE THIS",
            speech: "I'm comfortable like this"
        }
    },


    de: {

        title: "Position / Komfort",

        bed: {
            label: "INS BETT<br>LEGEN",
            speech: "Bitte legen Sie mich wieder ins Bett"
        },

        chair: {
            label: "IN DEN SESSEL<br>SETZEN",
            speech: "Bitte setzen Sie mich in den Sessel"
        },

        moveUp: {
            label: "IM BETT<br>HÖHER",
            speech: "Bitte schieben Sie mich im Bett höher"
        },

        moveDown: {
            label: "ETWAS<br>TIEFER",
            speech: "Bitte schieben Sie mich etwas tiefer"
        },

        turnLeft: {
            label: "NACH LINKS<br>DREHEN",
            speech: "Bitte drehen Sie mich nach links"
        },

        turnRight: {
            label: "NACH RECHTS<br>DREHEN",
            speech: "Bitte drehen Sie mich nach rechts"
        },

        sitUp: {
            label: "AUFRICHTEN",
            speech: "Bitte richten Sie mich auf"
        },

        flatter: {
            label: "FLACHER<br>LEGEN",
            speech: "Bitte legen Sie mich flacher"
        },

        headUp: {
            label: "KOPFTEIL<br>HÖHER",
            speech: "Bitte stellen Sie das Kopfteil höher"
        },

        headDown: {
            label: "KOPFTEIL<br>TIEFER",
            speech: "Bitte stellen Sie das Kopfteil tiefer"
        },

        legsUp: {
            label: "BEINE<br>HÖHER",
            speech: "Bitte lagern Sie meine Beine höher"
        },

        legsDown: {
            label: "BEINE<br>TIEFER",
            speech: "Bitte lagern Sie meine Beine tiefer"
        },

        pillow: {
            label: "KISSEN",
            speech: "Ich brauche ein Kissen"
        },

        removePillow: {
            label: "KISSEN<br>ENTFERNEN",
            speech: "Bitte nehmen Sie dieses Kissen weg"
        },

        hot: {
            label: "MIR IST WARM",
            speech: "Mir ist warm"
        },

        cold: {
            label: "MIR IST KALT",
            speech: "Mir ist kalt"
        },

        blanket: {
            label: "DECKE",
            speech: "Bitte geben Sie mir eine Decke"
        },

        removeBlanket: {
            label: "DECKE<br>ENTFERNEN",
            speech: "Bitte nehmen Sie die Decke weg"
        },

        positionHurts: {
            label: "DIESE POSITION<br>TUT WEH",
            speech: "Diese Position tut mir weh"
        },

        comfortable: {
            label: "SO IST<br>ES GUT",
            speech: "So ist es gut"
        }
    },


    it: {

        title: "Posizione / Comfort",

        bed: {
            label: "RIMETTETEMI<br>A LETTO",
            speech: "Rimettetemi a letto, per favore"
        },

        chair: {
            label: "METTETEMI<br>IN POLTRONA",
            speech: "Mettetemi in poltrona, per favore"
        },

        moveUp: {
            label: "SPOSTATEMI<br>PIÙ IN ALTO",
            speech: "Spostatemi più in alto nel letto, per favore"
        },

        moveDown: {
            label: "SPOSTATEMI<br>PIÙ IN BASSO",
            speech: "Spostatemi un po’ più in basso, per favore"
        },

        turnLeft: {
            label: "GIRATEMI<br>A SINISTRA",
            speech: "Giratemi a sinistra, per favore"
        },

        turnRight: {
            label: "GIRATEMI<br>A DESTRA",
            speech: "Giratemi a destra, per favore"
        },

        sitUp: {
            label: "RADDRIZZATEMI",
            speech: "Raddrizzatemi, per favore"
        },

        flatter: {
            label: "SDRAIATEMI<br>DI PIÙ",
            speech: "Sdraiami di più, per favore"
        },

        headUp: {
            label: "ALZATE<br>LA TESTIERA",
            speech: "Alzate la testiera del letto, per favore"
        },

        headDown: {
            label: "ABBASSATE<br>LA TESTIERA",
            speech: "Abbassate la testiera del letto, per favore"
        },

        legsUp: {
            label: "ALZATE<br>LE MIE GAMBE",
            speech: "Alzate le mie gambe, per favore"
        },

        legsDown: {
            label: "ABBASSATE<br>LE MIE GAMBE",
            speech: "Abbassate le mie gambe, per favore"
        },

        pillow: {
            label: "CUSCINO",
            speech: "Ho bisogno di un cuscino"
        },

        removePillow: {
            label: "TOGLIETE<br>IL CUSCINO",
            speech: "Togliete questo cuscino, per favore"
        },

        hot: {
            label: "HO CALDO",
            speech: "Ho caldo"
        },

        cold: {
            label: "HO FREDDO",
            speech: "Ho freddo"
        },

        blanket: {
            label: "COPERTA",
            speech: "Mettetemi una coperta, per favore"
        },

        removeBlanket: {
            label: "TOGLIETE<br>LA COPERTA",
            speech: "Togliete la coperta, per favore"
        },

        positionHurts: {
            label: "QUESTA POSIZIONE<br>MI FA MALE",
            speech: "Questa posizione mi fa male"
        },

        comfortable: {
            label: "STO BENE<br>COSÌ",
            speech: "Sto bene così"
        }
    }

};

function updatePositionLanguage() {

    const translation =
        POSITION_TRANSLATIONS[
            patientLanguage
        ];

    if (!translation) {
        return;
    }

    const title =
        document.getElementById(
            "positionTitle"
        );

    if (title) {
        title.textContent =
            translation.title;
    }

    const elements = {

        positionBedButton:
            translation.bed.label,

        positionChairButton:
            translation.chair.label,

        positionMoveUpButton:
            translation.moveUp.label,

        positionMoveDownButton:
            translation.moveDown.label,

        positionTurnLeftButton:
            translation.turnLeft.label,

        positionTurnRightButton:
            translation.turnRight.label,

        positionSitUpButton:
            translation.sitUp.label,

        positionFlatterButton:
            translation.flatter.label,

        positionHeadUpButton:
            translation.headUp.label,

        positionHeadDownButton:
            translation.headDown.label,

        positionLegsUpButton:
            translation.legsUp.label,

        positionLegsDownButton:
            translation.legsDown.label,

        positionPillowButton:
            translation.pillow.label,

        positionRemovePillowButton:
            translation.removePillow.label,

        positionHotButton:
            translation.hot.label,

        positionColdButton:
            translation.cold.label,

        positionBlanketButton:
            translation.blanket.label,

        positionRemoveBlanketButton:
            translation.removeBlanket.label,

        positionHurtsButton:
            translation.positionHurts.label,

        positionComfortableButton:
            translation.comfortable.label
    };

    Object.entries(elements).forEach(
        function(entry) {

            const element =
                document.getElementById(
                    entry[0]
                );

            if (element) {
                element.innerHTML =
                    entry[1];
            }
        }
    );
}


function speakPositionPhrase(phraseKey) {

    const translation =
        POSITION_TRANSLATIONS[
            caregiverLanguage
        ];

    if (!translation) {
        return;
    }

    const phrase =
        translation[phraseKey];

    if (!phrase) {
        return;
    }

    speak(
        phrase.speech,
        caregiverLanguage
    );
}

function updatePainLanguage() {

    const translation =
        PAIN_TRANSLATIONS[
            patientLanguage
        ];

    if (!translation) {
        return;
    }


    const title =
        document.getElementById(
            "painTitle"
        );

    if (title) {
        title.textContent =
            translation.title;
    }


    const whereTitle =
        document.getElementById(
            "painWhereTitle"
        );

    if (whereTitle) {
        whereTitle.textContent =
            translation.where;
    }


    const changeButton =
        document.getElementById(
            "painChangeLocationButton"
        );

    if (changeButton) {
        changeButton.textContent =
            translation.changeLocation;
    }


    const locationElements = {

        painLocationHead:
            "head",

        painLocationNeck:
            "neck",

        painLocationThroat:
            "throat",

        painLocationChest:
            "chest",

        painLocationBack:
            "back",

        painLocationAbdomen:
            "abdomen",

        painLocationLeftShoulder:
            "leftShoulder",

        painLocationRightShoulder:
            "rightShoulder",

        painLocationLeftArm:
            "leftArm",

        painLocationRightArm:
            "rightArm",

        painLocationLeftHand:
            "leftHand",

        painLocationRightHand:
            "rightHand",

        painLocationLeftHip:
            "leftHip",

        painLocationRightHip:
            "rightHip",

        painLocationLeftLeg:
            "leftLeg",

        painLocationRightLeg:
            "rightLeg",

        painLocationLeftFoot:
            "leftFoot",

        painLocationRightFoot:
            "rightFoot"
    };


    Object.entries(locationElements).forEach(
        function(entry) {

            const elementId =
                entry[0];

            const locationKey =
                entry[1];

            const element =
                document.getElementById(
                    elementId
                );

            const location =
                PAIN_LOCATIONS[
                    locationKey
                ];

            if (
                element &&
                location &&
                location[patientLanguage]
            ) {

                element.innerHTML =
                    location[
                        patientLanguage
                    ].label;
            }

        }
    );


    updatePainIntensityTitle();
}

function updatePainIntensityTitle() {

    const title =
        document.getElementById(
            "painLocationTitle"
        );

    if (!title) {
        return;
    }


    const translation =
        PAIN_TRANSLATIONS[
            patientLanguage
        ];

    if (!translation) {
        return;
    }


    title.textContent =
        translation.intensity;
}

function updateRespirationLanguage() {

    const translation =
        RESPIRATION_TRANSLATIONS[
            patientLanguage
        ];

    if (!translation) {
        return;
    }


    const title =
        document.getElementById(
            "respirationTitle"
        );

    if (title) {
        title.textContent =
            translation.title;
    }


    const elements = {

        respirationBreathingButton:
            translation.breathing.label,

        respirationSuctionButton:
            translation.suction.label,

        respirationSecretionsButton:
            translation.secretions.label,

        respirationBlockedButton:
            translation.blocked.label,

        respirationTracheostomyPainButton:
            translation.tracheostomyPain.label,

        respirationDryThroatButton:
            translation.dryThroat.label,

        respirationDryMouthButton:
            translation.dryMouth.label,

        respirationBetterButton:
            translation.better.label,

        respirationNotBetterButton:
            translation.notBetter.label,

        respirationStayButton:
            translation.stay.label
    };


    Object.entries(elements).forEach(
        function(entry) {

            const elementId =
                entry[0];

            const html =
                entry[1];

            const element =
                document.getElementById(
                    elementId
                );

            if (element) {
                element.innerHTML =
                    html;
            }

        }
    );
}


function speakRespirationPhrase(phraseKey) {

    const translation =
        RESPIRATION_TRANSLATIONS[
            caregiverLanguage
        ];

    if (!translation) {
        return;
    }


    const phrase =
        translation[phraseKey];

    if (!phrase) {
        return;
    }


    speak(
        phrase.speech,
        caregiverLanguage
    );
}

function updateHomeLanguage() {

    const translation =
        HOME_TRANSLATIONS[patientLanguage];

    if (!translation) {
        return;
    }


    const title =
        document.getElementById("homeTitleText");

    if (title) {
        title.textContent =
            translation.title;
    }


    const elements = {

        homeRespirationButton:
            translation.respiration,

        homePainButton:
            translation.pain,

        homePositionButton:
            translation.position,

        homeCareButton:
            translation.care,

        homeHygieneButton:
            translation.hygiene,

        homeEnvironmentButton:
            translation.environment,

        homeQuestionsButton:
            translation.questions,

        homeUnderstandButton:
            translation.understand,

        homeTalkButton:
            translation.talk,

        homeEmotionButton:
            translation.emotions,

        homeRechargeButton:
            translation.recharge,

        homePhrasesButton:
            translation.phrases,

        homeVoiceButton:
            translation.voice,

        homeAboutButton:
            translation.about
    };


    Object.entries(elements).forEach(
        function(entry) {

            const elementId =
                entry[0];

            const html =
                entry[1];

            const element =
                document.getElementById(
                    elementId
                );

            if (element) {
                element.innerHTML =
                    html;
            }

        }
    );
}


function speakHomePhrase(phraseKey) {

    const translation =
        HOME_TRANSLATIONS[
            caregiverLanguage
        ];

    if (!translation) {
        return;
    }


    const speechKey =
        phraseKey + "Speech";


    const text =
        translation[speechKey];

    if (!text) {
        return;
    }


    speak(
        text,
        caregiverLanguage
    );
}

function readLocalSetting(key, fallbackValue = "") {

    try {
        const value = localStorage.getItem(key);
        return value !== null ? value : fallbackValue;
    }
    catch (error) {
        return fallbackValue;
    }
}


function writeLocalSetting(key, value) {

    try {
        localStorage.setItem(key, value);
    }
    catch (error) {
        console.warn(
            "Impossible d’enregistrer le réglage local :",
            key,
            error
        );
    }
}


let availableVoices = [];
let availableFrenchVoices = [];

let maleVoiceName = readLocalSetting(
    VOICE_STORAGE_KEYS.male,
    ""
);

let femaleVoiceName = readLocalSetting(
    VOICE_STORAGE_KEYS.female,
    ""
);

let activeVoiceType = readLocalSetting(
    VOICE_STORAGE_KEYS.active,
    "male"
);

if (activeVoiceType !== "male" && activeVoiceType !== "female") {
    activeVoiceType = "male";
}

let patientLanguage = readLocalSetting(
    LANGUAGE_STORAGE_KEYS.patient,
    "fr"
);

let caregiverLanguage = readLocalSetting(
    LANGUAGE_STORAGE_KEYS.caregiver,
    "fr"
);


if (!SUPPORTED_LANGUAGES.includes(patientLanguage)) {
    patientLanguage = "fr";
}

if (!SUPPORTED_LANGUAGES.includes(caregiverLanguage)) {
    caregiverLanguage = "fr";
}


function getLanguagePairLabel() {

    return (
        patientLanguage.toUpperCase() +
        " → " +
        caregiverLanguage.toUpperCase()
    );
}

function getVoicesForLanguage(language) {

    return availableVoices.filter(
        function(voice) {

            return voice.lang
                .toLowerCase()
                .startsWith(
                    language.toLowerCase()
                );
        }
    );
}


function getAutomaticVoice(language) {

    const voices =
        getVoicesForLanguage(language);

    if (voices.length === 0) {
        return null;
    }


    const expectedLocale =
        (
            LANGUAGE_LOCALES[language] ||
            language
        ).toLowerCase();


    /*
       Priorité 1 :
       bonne langue + bon pays + voix locale
    */

    const exactLocalVoice =
        voices.find(
            function(voice) {

                return (
                    voice.localService === true &&
                    voice.lang.toLowerCase() ===
                        expectedLocale
                );
            }
        );

    if (exactLocalVoice) {
        return exactLocalVoice;
    }


    /*
       Priorité 2 :
       n'importe quelle voix locale
       dans la bonne langue
    */

    const localVoice =
        voices.find(
            function(voice) {
                return voice.localService === true;
            }
        );

    if (localVoice) {
        return localVoice;
    }


    /*
       Priorité 3 :
       bonne langue + bon pays
    */

    const exactVoice =
        voices.find(
            function(voice) {

                return (
                    voice.lang.toLowerCase() ===
                    expectedLocale
                );
            }
        );

    if (exactVoice) {
        return exactVoice;
    }


    /*
       Dernier recours :
       première voix trouvée dans la langue
    */

    return voices[0];
}

function updateQuickBarLanguage() {

    const yesButton =
        document.getElementById(
            "quickYesButton"
        );

    const noButton =
        document.getElementById(
            "quickNoButton"
        );

    const stopButton =
        document.getElementById(
            "quickStopButton"
        );


    if (yesButton) {
        yesButton.textContent =
            QUICK_PHRASES.yes[
                patientLanguage
            ].label;
    }


    if (noButton) {
        noButton.textContent =
            QUICK_PHRASES.no[
                patientLanguage
            ].label;
    }


    if (stopButton) {
        stopButton.textContent =
            QUICK_PHRASES.stop[
                patientLanguage
            ].label;
    }
}


function speakQuickPhrase(phraseKey) {

    const phrase =
        QUICK_PHRASES[phraseKey];

    if (!phrase) {
        return;
    }


    const translation =
        phrase[caregiverLanguage];

    if (!translation) {
        return;
    }


    speak(
        translation.speech,
        caregiverLanguage
    );
}

function speak(text, language = "fr") {

    if (!text) {
        return;
    }

    window.speechSynthesis.cancel();

    const message =
        new SpeechSynthesisUtterance(text);


    const locale =
        LANGUAGE_LOCALES[language] ||
        "fr-FR";


    message.lang =
        locale;

    message.rate =
        0.9;


    /*
       Pour l'instant, les voix choisies manuellement
       dans Ma Voix sont encore les voix françaises.

       Elles sont donc utilisées uniquement pour
       les phrases françaises.
    */

let selectedVoice = null;


/*
   En français, on conserve le choix
   masculin / féminin déjà configuré.
*/

	if (language === "fr") {

		let selectedVoiceName = "";

		if (activeVoiceType === "male") {

			selectedVoiceName =
				maleVoiceName;

		}
		else {

			selectedVoiceName =
				femaleVoiceName;

		}


		selectedVoice =
			availableFrenchVoices.find(
				function(voice) {

					return voice.name ===
						selectedVoiceName;

				}
			);
	}


	/*
	   Si aucune voix manuelle n'est trouvée,
	   Ma Voix choisit automatiquement
	   la meilleure voix disponible.
	*/

	if (!selectedVoice) {

		selectedVoice =
			getAutomaticVoice(language);

	}


	if (selectedVoice) {

		message.voice =
			selectedVoice;

		message.lang =
			selectedVoice.lang;

	}


    window.speechSynthesis.speak(
        message
    );
}

function handleTopRightButton() {

    const activeScreen =
        document.querySelector(".screen.active");

	if (
		!activeScreen ||
		activeScreen.id === "homeScreen"
	) {
		openVoiceScreen();
		return;
	}

    const backButton =
        activeScreen.querySelector(".back-button");

    if (backButton) {
        backButton.click();
    }
	else {
        showScreen("homeScreen");
    }
}

function updateTopRightButton(screenId) {

    const button =
        document.getElementById("topRightButton");

    if (!button) {
        return;
    }


    if (screenId === "homeScreen") {

        button.textContent =
            getLanguagePairLabel();

        button.classList.remove(
            "emergency"
        );

        button.classList.remove(
            "return-mode"
        );

    }
    else {

        button.textContent =
            "↶";

        button.classList.remove(
            "emergency"
        );

        button.classList.add(
            "return-mode"
        );

    }
}

function showScreen(screenId) {

    const selectedScreen = document.getElementById(screenId);

    if (!selectedScreen) {
        console.error("Écran introuvable :", screenId);
        return;
    }

    const screens = document.querySelectorAll(".screen");

    screens.forEach(function(screen) {
        screen.classList.remove("active");
    });

    selectedScreen.classList.add("active");

	updateTopRightButton(screenId);

    window.scrollTo(0, 0);
}

function openWriteScreen() {

    renderCustomFavorites();

    showScreen("writeScreen");
}

function loadFrenchVoices() {

    const voices =
        window.speechSynthesis.getVoices();


    availableVoices =
        voices;


    availableFrenchVoices =
        voices.filter(
            function(voice) {

                return voice.lang
                    .toLowerCase()
                    .startsWith("fr");

            }
        );

    fillVoiceSelect(
        "maleVoiceSelect",
        maleVoiceName
    );

    fillVoiceSelect(
        "femaleVoiceSelect",
        femaleVoiceName
    );
}


function fillVoiceSelect(selectId, selectedName) {

    const select =
        document.getElementById(selectId);

    if (!select) {
        return;
    }

    select.innerHTML = "";


    if (availableFrenchVoices.length === 0) {

        const option =
            document.createElement("option");

        option.textContent =
            "Aucune voix française trouvée";

        option.value = "";

        select.appendChild(option);

        return;
    }


    availableFrenchVoices.forEach(
        function(voice) {

            const option =
                document.createElement("option");

            option.value =
                voice.name;

            option.textContent =
                voice.name +
                " — " +
                voice.lang;

            select.appendChild(option);

        }
    );


    if (
        selectedName &&
        availableFrenchVoices.some(
            function(voice) {
                return voice.name === selectedName;
            }
        )
    ) {
        select.value =
            selectedName;
    }
}


function openVoiceScreen() {

    loadFrenchVoices();

    showScreen("voiceScreen");

    updateLanguageButtons();
	
	updateCaregiverVoiceStatus();

    updateVoiceButtons();
}

function choosePatientLanguage(language) {

    if (!SUPPORTED_LANGUAGES.includes(language)) {
        return;
    }

    patientLanguage =
        language;

    writeLocalSetting(
        LANGUAGE_STORAGE_KEYS.patient,
        patientLanguage
    );

    updateLanguageButtons();
	
	updateQuickBarLanguage();
	
	updateHomeLanguage();
	
	updateRespirationLanguage();
	
	updatePainLanguage();
	
	updatePositionLanguage();

    updateTopRightButton("voiceScreen");
}


function chooseCaregiverLanguage(language) {

    if (!SUPPORTED_LANGUAGES.includes(language)) {
        return;
    }

    caregiverLanguage =
        language;

    writeLocalSetting(
        LANGUAGE_STORAGE_KEYS.caregiver,
        caregiverLanguage
    );

    updateLanguageButtons();
	
	updateCaregiverVoiceStatus();

    updateTopRightButton("voiceScreen");
}


function updateLanguageButtons() {

    const patientButtons =
        document.querySelectorAll(
            "[data-patient-language]"
        );

    const caregiverButtons =
        document.querySelectorAll(
            "[data-caregiver-language]"
        );


    patientButtons.forEach(
        function(button) {

            button.classList.toggle(
                "language-active",
                button.dataset.patientLanguage ===
                    patientLanguage
            );
        }
    );


    caregiverButtons.forEach(
        function(button) {

            button.classList.toggle(
                "language-active",
                button.dataset.caregiverLanguage ===
                    caregiverLanguage
            );
        }
    );
}

function updateCaregiverVoiceStatus() {

    const status =
        document.getElementById(
            "caregiverVoiceStatus"
        );

    if (!status) {
        return;
    }


    const voices =
        getVoicesForLanguage(
            caregiverLanguage
        );


    const localVoices =
        voices.filter(
            function(voice) {

                return voice.localService === true;

            }
        );


    const languageNames = {
        fr: "française",
        en: "anglaise",
        de: "allemande",
        it: "italienne"
    };


    const languageName =
        languageNames[caregiverLanguage] ||
        caregiverLanguage;


    status.classList.remove(
        "voice-status-ok",
        "voice-status-warning"
    );


    if (localVoices.length > 0) {

        status.textContent =
            "✓ Voix " +
            languageName +
            " disponible hors connexion.";

        status.classList.add(
            "voice-status-ok"
        );

        return;
    }


    if (voices.length > 0) {

        status.textContent =
            "⚠️ Voix " +
            languageName +
            " détectée, mais son fonctionnement hors connexion n'est pas garanti.";

        status.classList.add(
            "voice-status-warning"
        );

        return;
    }


    status.textContent =
        "⚠️ Aucune voix " +
        languageName +
        " détectée sur cet appareil.";

    status.classList.add(
        "voice-status-warning"
    );
}

function testVoice(type) {

    const selectId =
        type === "male"
            ? "maleVoiceSelect"
            : "femaleVoiceSelect";

    const select =
        document.getElementById(selectId);

    if (!select || !select.value) {
        return;
    }


    const voice =
        availableFrenchVoices.find(
            function(item) {
                return item.name === select.value;
            }
        );

    if (!voice) {
        return;
    }


    window.speechSynthesis.cancel();

    const message =
        new SpeechSynthesisUtterance(
            "Bonjour. Voici ma voix."
        );

    message.lang =
        voice.lang;

    message.voice =
        voice;

    message.rate =
        0.9;

    window.speechSynthesis.speak(message);
}

/* =========================================
   SONNERIE D'APPEL HEP!
   ========================================= */

let attentionAudioContext = null;


function playAttentionAlarm() {

    const AudioContext =
        window.AudioContext ||
        window.webkitAudioContext;

    if (!AudioContext) {
        return;
    }


    if (!attentionAudioContext) {
        attentionAudioContext =
            new AudioContext();
    }


    const ctx =
        attentionAudioContext;


    if (ctx.state === "suspended") {
        ctx.resume();
    }


    const startTime =
        ctx.currentTime + 0.05;


    /*
       4 séries de deux bips.
       Durée totale : environ 4 secondes.
    */

    for (let i = 0; i < 4; i++) {

        const baseTime =
            startTime + (i * 1.0);

        createAlarmTone(
            ctx,
            880,
            baseTime,
            0.22
        );

        createAlarmTone(
            ctx,
            1175,
            baseTime + 0.30,
            0.30
        );
    }
}


function createAlarmTone(
    ctx,
    frequency,
    startTime,
    duration
) {

    const oscillator =
        ctx.createOscillator();

    const gain =
        ctx.createGain();


    oscillator.type =
        "sine";

    oscillator.frequency.value =
        frequency;


    gain.gain.setValueAtTime(
        0.0001,
        startTime
    );

    gain.gain.exponentialRampToValueAtTime(
        0.8,
        startTime + 0.02
    );

    gain.gain.exponentialRampToValueAtTime(
        0.0001,
        startTime + duration
    );


    oscillator.connect(gain);

    gain.connect(
        ctx.destination
    );


    oscillator.start(
        startTime
    );

    oscillator.stop(
        startTime + duration + 0.05
    );
}

function chooseVoice(type) {

    const selectId =
        type === "male"
            ? "maleVoiceSelect"
            : "femaleVoiceSelect";

    const select =
        document.getElementById(selectId);

    if (!select || !select.value) {
        return;
    }


    if (type === "male") {

        maleVoiceName =
            select.value;

        activeVoiceType =
            "male";

        writeLocalSetting(
            VOICE_STORAGE_KEYS.male,
            maleVoiceName
        );

    }
    else {

        femaleVoiceName =
            select.value;

        activeVoiceType =
            "female";

        writeLocalSetting(
            VOICE_STORAGE_KEYS.female,
            femaleVoiceName
        );

    }


    writeLocalSetting(
        VOICE_STORAGE_KEYS.active,
        activeVoiceType
    );

    updateVoiceButtons();

    speak(
        type === "male"
            ? "Voix masculine sélectionnée"
            : "Voix féminine sélectionnée"
    );
}


function updateVoiceButtons() {

    const maleButton =
        document.getElementById(
            "maleVoiceButton"
        );

    const femaleButton =
        document.getElementById(
            "femaleVoiceButton"
        );


    if (!maleButton || !femaleButton) {
        return;
    }


    maleButton.classList.remove(
        "voice-active"
    );

    femaleButton.classList.remove(
        "voice-active"
    );


    if (activeVoiceType === "male") {

        maleButton.classList.add(
            "voice-active"
        );

    }
    else {

        femaleButton.classList.add(
            "voice-active"
        );

    }
}


/* Compatibilité voix Android / iPhone */

if (
    "speechSynthesis" in window &&
    typeof window.speechSynthesis.addEventListener === "function"
) {

	window.speechSynthesis.addEventListener(
		"voiceschanged",
		function() {

			loadFrenchVoices();

			updateCaregiverVoiceStatus();
		}
	);

}


/* Douleur */

let selectedPainLocation = "";


function selectPainLocation(locationKey) {

    if (!PAIN_LOCATIONS[locationKey]) {
        return;
    }

    selectedPainLocation =
        locationKey;

    document
        .getElementById("painStep1")
        .classList.add("hidden");

    document
        .getElementById("painStep2")
        .classList.remove("hidden");

    updatePainIntensityTitle();
}


function selectPainLevel(level) {

    if (
        selectedPainLocation === "" ||
        !PAIN_LOCATIONS[selectedPainLocation]
    ) {
        return;
    }


    const location =
        PAIN_LOCATIONS[
            selectedPainLocation
        ];


    const caregiverLocation =
        location[
            caregiverLanguage
        ];


    if (!caregiverLocation) {
        return;
    }


    let sentence = "";


    if (caregiverLanguage === "fr") {

        sentence =
            caregiverLocation.speech +
            ". Douleur " +
            level +
            " sur 10.";

    }


    else if (caregiverLanguage === "en") {

        sentence =
            caregiverLocation.speech +
            ". Pain level " +
            level +
            " out of 10.";

    }


    else if (caregiverLanguage === "de") {

        sentence =
            caregiverLocation.speech +
            ". Schmerzstärke " +
            level +
            " von 10.";

    }


    else if (caregiverLanguage === "it") {

        sentence =
            caregiverLocation.speech +
            ". Dolore " +
            level +
            " su 10.";

    }


    speak(
        sentence,
        caregiverLanguage
    );
}


function changePainLocation() {

    selectedPainLocation = "";

    document.getElementById("painStep2").classList.add("hidden");
    document.getElementById("painStep1").classList.remove("hidden");
}


function resetPain() {

    selectedPainLocation = "";

    document.getElementById("painStep2").classList.add("hidden");
    document.getElementById("painStep1").classList.remove("hidden");
}


function speakCustomText() {

    const text =
        document.getElementById("customText").value.trim();

    if (text === "") {
        return;
    }

    speak(text);
}


function clearCustomText() {

    const textArea =
        document.getElementById("customText");

    textArea.value = "";

    textArea.focus();
}


function addText(text) {

    const textArea =
        document.getElementById("customText");

    const currentText = textArea.value;

    if (
        currentText !== "" &&
        !currentText.endsWith(" ")
    ) {
        textArea.value += " ";
    }

    textArea.value += text;

    textArea.focus();

    textArea.setSelectionRange(
        textArea.value.length,
        textArea.value.length
    );
}

/* =========================================
   PARTAGER MA VOIX PAR EMAIL
   ========================================= */

let shareEmailAddress = "";
let shareEmailSubject = "";
let shareEmailBody = "";


function shareAppByEmail() {

    const emailInput =
        document.getElementById("shareEmail");

    const messageElement =
        document.getElementById("shareMessage");

    const preview =
        document.getElementById("sharePreview");


    if (
        !emailInput ||
        !messageElement ||
        !preview
    ) {
        return;
    }


    const email =
        emailInput.value.trim();


    messageElement.textContent = "";


    if (
        email === "" ||
        !emailInput.checkValidity()
    ) {

        preview.classList.add("hidden");

        messageElement.textContent =
            "Veuillez saisir une adresse email valide.";

        emailInput.focus();

        return;
    }


    shareEmailAddress =
        email;


    shareEmailSubject =
        "Une app pour faire parler un patient aphone";


    shareEmailBody =
`Vous êtes invité-e à découvrir « Ma Voix », une application gratuite et simple, développée à partir des besoins rencontrés auprès de patients et de soignants en milieu hospitalier à Genève, pour aider les patients avec trachéotomie ou aphones à sortir de leur prison du silence.

Le principe de l'application est très simple :

Le patient dispose de gros boutons correspondant à ce qu'il peut vouloir dire — par exemple Oui, Non, Stop, HEP!, J'ai mal, Respiration, Position, Soins, Toilettes, Famille / Amis, Émotions, Questions, etc.

Il lui suffit d'appuyer sur un bouton et le téléphone ou la tablette prononce la phrase à sa place.

Quelques informations importantes :

• L'application ne nécessite aucun compte ; 0 impact sur la confidentialité des données.

• Elle fonctionne sur Android et iPhone, smartphone et tablette, avec un affichage adaptatif à la taille de l'écran.

• Une connexion Internet est nécessaire uniquement pour la première installation et pour les éventuelles mises à jour ultérieures.

• Après son installation, l'application peut fonctionner sans connexion Internet.

Vous pouvez accéder à l'application ici :

https://wrelax1.github.io/ma-voix/

INSTALLATION SUR IPHONE

1. Ouvrir l'adresse ci-dessus avec Safari.
2. Appuyer sur le bouton Partager.
3. Choisir « Ajouter à l'écran d'accueil ».
4. Vérifier que le nom est « Ma Voix », puis appuyer sur « Ajouter ».
5. Ma Voix apparaîtra comme une application normale.

INSTALLATION SUR ANDROID

1. Ouvrir l'adresse ci-dessus avec un navigateur.
2. Appuyer sur les trois points ⋮.
3. Choisir « Installer l'application » ou « Ajouter à l'écran d'accueil ».
4. Valider « Ma Voix ».
5. Ma Voix apparaîtra comme une application normale.

Redonnons une voix à ceux qui en sont privés.`;


    document.getElementById(
        "sharePreviewEmail"
    ).textContent =
        shareEmailAddress;


    document.getElementById(
        "sharePreviewSubject"
    ).textContent =
        shareEmailSubject;


    document.getElementById(
        "sharePreviewBody"
    ).textContent =
        shareEmailBody;


    preview.classList.remove("hidden");


    messageElement.textContent =
        "Vérifiez le message ci-dessous avant de l'envoyer.";


    preview.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


async function copyAndOpenMail() {

    if (
        !shareEmailAddress ||
        !shareEmailSubject ||
        !shareEmailBody
    ) {
        return;
    }


    const messageElement =
        document.getElementById("shareMessage");


    try {

        await navigator.clipboard.writeText(
            shareEmailBody
        );

        if (messageElement) {
            messageElement.textContent =
                "Message copié. Ouverture de votre messagerie…";
        }

    }
    catch (error) {

        if (messageElement) {
            messageElement.textContent =
                "Ouverture de votre messagerie… Le message reste affiché ci-dessous.";
        }

    }


	const mailtoUrl =
		"mailto:" +
		shareEmailAddress +
		"?subject=" +
		encodeURIComponent(shareEmailSubject) +
		"&body=" +
		encodeURIComponent(shareEmailBody);


    window.location.href =
        mailtoUrl;
}

const FAVORITES_STORAGE_KEY = "maVoixCustomFavorites";


function getCustomFavorites() {

    const savedFavorites =
        localStorage.getItem(FAVORITES_STORAGE_KEY);

    if (!savedFavorites) {
        return [];
    }

    try {
        return JSON.parse(savedFavorites);
    }
    catch (error) {
        return [];
    }
}

function openFavoritesScreen() {

    renderCustomFavorites();

    showScreen("favoritesScreen");
}


function saveFavoriteText(textAreaId) {

    const textArea =
        document.getElementById(textAreaId);

    if (!textArea) {
        return;
    }

    const phrase =
        textArea.value.trim();

    if (phrase === "") {
        return;
    }

    const favorites =
        getCustomFavorites();

    if (favorites.includes(phrase)) {

        speak("Cette phrase est déjà dans vos favoris");

        return;
    }

    favorites.push(phrase);

    localStorage.setItem(
        FAVORITES_STORAGE_KEY,
        JSON.stringify(favorites)
    );

    textArea.value = "";

    renderCustomFavorites();

    speak("Phrase ajoutée");
}


function saveFavorite() {

    saveFavoriteText("favoriteText");
}


function saveFavoriteFromWrite() {

    saveFavoriteText("customText");
}

function renderCustomFavorites() {

    const container =
        document.getElementById("customFavorites");

    if (!container) {
        return;
    }

    const favorites =
        getCustomFavorites();

    container.innerHTML = "";

    if (favorites.length === 0) {

        const message =
            document.createElement("p");

        message.className = "no-favorites";

        message.textContent =
            "Aucune phrase personnelle pour le moment.";

        container.appendChild(message);

        return;
    }


    favorites.forEach(function(phrase, index) {

        const item =
            document.createElement("div");

        item.className = "favorite-item";


        const speakButton =
            document.createElement("button");

        speakButton.className =
            "favorite-speak-button";

        speakButton.textContent =
            phrase;

        speakButton.onclick =
            function() {
                speak(phrase);
            };

		const deleteButton =
			document.createElement("button");

		deleteButton.className =
			"favorite-delete-button";

		deleteButton.textContent =
			"🗑️";

		deleteButton.setAttribute(
			"aria-label",
			"Supprimer la phrase"
		);

		deleteButton.onclick =
			function(event) {

				event.stopPropagation();

				deleteFavorite(index);
			};

        item.appendChild(speakButton);

        item.appendChild(deleteButton);

        container.appendChild(item);
    });
}


function deleteFavorite(index) {

    const favorites =
        getCustomFavorites();

    const phrase =
        favorites[index];

    const confirmed =
        confirm(
            "Supprimer cette phrase ?\n\n" +
            phrase
        );

    if (!confirmed) {
        return;
    }

    favorites.splice(index, 1);

    localStorage.setItem(
        FAVORITES_STORAGE_KEY,
        JSON.stringify(favorites)
    );

    renderCustomFavorites();
}

async function updateAppVersion() {

    const versionElement =
        document.getElementById("appVersion");

    if (!versionElement) {
        return;
    }


    try {

        const response =
            await fetch(
                "./sw.js",
                {
                    cache: "no-store"
                }
            );


        if (!response.ok) {
            return;
        }


        const swText =
            await response.text();


        const match =
            swText.match(
                /ma-voix-multilingue-v(\d+)/
            );


        if (!match) {
            return;
        }


        versionElement.textContent =
            "(v" + match[1] + ")";

    }
    catch (error) {

        console.warn(
            "Impossible de lire la version :",
            error
        );
    }
}

document.addEventListener(
    "DOMContentLoaded",
    function() {

        renderCustomFavorites();

        loadFrenchVoices();

        updateVoiceButtons();
		
		updateLanguageButtons();
		
		updateQuickBarLanguage();
		
		updateHomeLanguage();
		
		updateRespirationLanguage();
		
		updatePainLanguage();
		
		updatePositionLanguage();

		updateTopRightButton("homeScreen");
		
		updateAppVersion();

    }
);


if ("serviceWorker" in navigator) {

    let serviceWorkerRefreshing = false;

    const hadController =
        navigator.serviceWorker.controller !== null;


    window.addEventListener(
        "load",
        function() {

            navigator.serviceWorker
                .register("./sw.js")
                .then(function(registration) {

                    return registration.update();

                })
                .catch(function(error) {

                    console.error(
                        "Erreur Service Worker :",
                        error
                    );

                });

        }
    );


    navigator.serviceWorker.addEventListener(
        "controllerchange",
        function() {

            if (
                !hadController ||
                serviceWorkerRefreshing
            ) {
                return;
            }

            serviceWorkerRefreshing = true;

            window.location.reload();

        }
    );

}