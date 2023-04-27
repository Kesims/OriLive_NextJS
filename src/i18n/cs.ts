import { TranslationKeys } from "@/src/i18n/translationKeys";

export default {
    landingPage: {
        about: "O projektu",
        changeLanguage: "Switch to English",
        whatIsOrilive: "Co je Orlive?",
        whatIsOriliveText:
            "Jedná se o studentský projekt, který se zabývá konstrukcí sady zařízení pro" +
            " bezdrátový přenos výsledků v orientačních sportech. Při vývoji je kladen důraz" +
            " na nízkou pořizovací cenu zařízení, jednoduchost ovládání a nezávislost na sítích" +
            " mobilních operátorů.",
        onodeBoard: "Deska OriLive O-Node",
        onodeBoardText:
            "Deska O-Node slouží ke sběru SRR dat ze zařízení SPORTident, která následně " +
            "pomocí technologie LoRa a vlastního OPRP protokolu odesílá na nejbližší " +
            "gateway jednotku.",
        onodeBoardFeatures: {
            compact: "Kompaktní, levná, lehká",
            batteryLife: "Výdrž baterie na několik závodů",
            operatingMode: "Node/Wi-Fi Gateway",
            easySetup: "Nastavení pomocí mobilní aplikace a Bluetooth",
            technical: "ESP32, LoRa 433/169 MHz",
        },
        oprpProtocol: "OPRP protokol",
        oprpProtocolText:
            "OPRP (OriLive Punch Routing Protocol) je jednoduchý protokol, speciálně " +
            "navržený pro potřeby projektu. Jednotkám umožňuje formovat meshovou síť, ve " +
            "které mohou data téct z jednotlivých nodů ke gateway jednotce přes více " +
            "přeskoků. Zároveň je navržený tak, aby byly rámce co nejmenší. To celému " +
            "systému umožnuje výborné pokrytí a zajišťuje dostatečnou propustnost sítě.",
        simplicity: "Jednoduchost",
        simplicityText:
            "Systém je navržený tak, aby vyžadoval pouze minimální přípravy před závodem a " +
            "nepředstavoval tak pro pořadatele zátěž.",
        mobileApp: "Mobilní aplikace",
        mobileAppText: "Mobilní aplikace dělá z nastavení jednotek otázku vteřin.",
        webDashboard: "Webový dashboard",
        webDashboardText: "Stav zařízení, tok dat a podobně lze sledovat v dashboardu.",
        acknowledgements: "Poděkování",
        acknowledgementsText1:
            "Chci poděkovat všem, kteří mi pomohli s vývojem tohoto projektu. V první řadě je to " +
            "RNDr. Jan Koupil, Ph.D., za vedení při tvorbě práce SOČ a Ing. Pavel Faltejsek, který " +
            "mě zasvětil do IT okolo pořádání závodů a dal mi hromadu cenných tipů. Dík patří také " +
            "Karlovi Koudelkovi, který mě naučil pracovat s moderními webovými technologiemi a Mgr. " +
            "Janu Juricovi, autorovi projektu ",
        acknowledgementsText2: ", který také poskytl mnoho tipů a je velmi otevřený spolupráci.",
        contact: "Kontakt",
    },
    login: {
        title: "Přihlášení",
        username: "Uživatelské jméno",
        password: "Heslo",
        rememberMe: "Zapamatovat si údaje",
        login: "Přihlásit se",
    },
    dashboard: {
        sideMenu: {
            punches: "Detail ražení",
            networkCommands: "Síťové příkazy",
            devices: "Správa zařízení",
            oresults: "Propojení OResults",
            logout: "Odhlásit se",
            language: "Jazyk",
            changeLanguage: "Switch to English",
        },
        bottomMenu: {
            overview: "Přehled",
            punches: "Ražení",
            networkCommands: "Příkazy",
            devices: "Zařízení",
            oresults: "OResults",
            logout: "Odhlásit",
        },
        overview: {
            title: "Vítejte v dashboardu",
            onodesTitle: "Dostupné jednotky O-Node",
            deviceSettingsButton: "Správa zařízení",
            devicesAsNodes: "jednotek v režimu node",
            devicesAsGateways: "jednotek v režimu gateway",
            oresultsTitle: "Propojení OResults",
            oresultsSettingsButton: "Správa propojení",
            oresultsDevicesMapped: "{{count}} zařízení mapováno do OResults",
            networkCommandsTitle: "Síťové příkazy",
            networkCommandsSettingsButton: "Správa příkazů",
            commandsActive: "{{count}} aktivních síťových příkazů",
            punchesTitle: "Zaznamenané ražení",
            punchesSettingsButton: "Detail ražení",
            lastPunch: "Poslední ražení: {{diffInMinutes}} minut zpět",
            moreThan60: "více než 60",
            punchesInLastHour: "ražení za poslední hodinu",
        },
        devices: {
            title: "Správa zařízení",
            devicesAvailable: "dostupných zařízení",
            deviceId: "ID jednotky",
            deviceType: "Typ jednotky",
            batteryLevel: "Stav baterie",
            lastSeen: "Poslední kontakt",
            online: "Online",
            deviceRemovedSuccessfully: "Zařízení bylo úspěšně odebráno.",
            failedToRemoveDevice: "Při odstraňování zařízení došlo k neznámé chybě.",
        },
        oresults: {
            title: "Propojení OResults",
            unitsMapped: "zařízení mapováno do OResults",
            mapNewDevice: "Mapovat nové zařízení",
            localID: "Lokální ID",
            oresultsApiKey: "OResults API klíč",
            mapDeviceButton: "Mapovat zařízení",
            deviceMappedSuccessfully: "Mapování bylo úspešně nastaveno.",
            unknownErrorOccurred: "Při mapování zařízení došlo k neznámé chybě.",
        },
        punches: {
            title: "Zaznamenané ražení",
            punchesInLastHour: "ražení za poslední hodinu",
            minutesSinceLastPunch: "minut od poslednícho ražení",
            stationNumber: "ČÍSLO KONTROLY",
            siNumber: "ČÍSLO ČIPU",
            punchTime: "ČAS RAŽENÍ",
            receiveTime: "ČAS PŘIJETÍ",
        },
        networkCommands: {
            title: "Síťové příkazy",
            activeCommands: "aktivních síťových příkazů",
            competitionId: "ID závodu",
            commandType: "Typ",
            commandData: "Data",
            creationTime: "Čas vytvoření",
            addCommand: "Vytvořit síťový příkaz",
            commandTypeLong: "Typ příkazu",
            createCommandButton: "Vytvořit",
            commandAdded: "Příkaz byl úspěšně přidán.",
            unknownErrorOccurred: "Došlo k neznámé chybě.",
        },
    },
} satisfies TranslationKeys;
