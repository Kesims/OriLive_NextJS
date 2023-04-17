import { TranslationKeys } from "@/src/i18n/translationKeys";

export default {
    landingPage: {
        about: "About the project",
        changeLanguage: "Přepnout do češtiny",
        whatIsOrilive: "What is OriLive?",
        whatIsOriliveText:
            "OriLive is a student project that focuses on building a set of devices for wireless transmission" +
            " of results in orienteering sports. The development emphasizes low device costs, ease of use," +
            " and independence from mobile operator networks.",
        onodeBoard: "OriLive O-Node board",
        onodeBoardText:
            "The O-Node board is used to collect SRR data from SPORTident devices, which is then sent to" +
            " the nearest gateway unit using LoRa technology and the proprietary OPRP protocol.",
        onodeBoardFeatures: {
            compact: "Compact, cheap, light",
            batteryLife: "Battery life for several races",
            operatingMode: "Node/Wi-Fi Gateway",
            easySetup: "Setup via mobile app and Bluetooth",
            technical: "ESP32, LoRa 169MHz",
        },
        oprpProtocol: "OPRP protocol",
        oprpProtocolText:
            "OPRP (OriLive Punch Routing Protocol) is a simple protocol designed specifically for the" +
            " project's needs. It allows units to form a mesh network in which data can flow from individual" +
            " nodes to the gateway unit through multiple hops. At the same time, it is designed to keep the" +
            " frames as small as possible, which provides excellent coverage and ensures sufficient network throughput.",
        simplicity: "Simplicity",
        simplicityText:
            "The system is designed to require minimal preparation before the race and not to be a burden for the organizers.",
        mobileApp: "Mobile app",
        mobileAppText: "The mobile app makes setting up the units a matter of seconds.",
        webDashboard: "Web dashboard",
        webDashboardText: "Device status, data flow, and more can be monitored in the dashboard.",
        acknowledgements: "Acknowledgements",
        acknowledgementsText1:
            "I would like to thank everyone who helped me with the development of this project. First" +
            " and foremost, RNDr. Jan Koupil, Ph.D., for guiding me in creating the SOČ thesis and" +
            " Ing. Pavel Faltejsek, who introduced me to IT related to organizing races and gave me a" +
            " lot of valuable tips. Thanks also go to Karel Koudelka, who taught me how to work with modern" +
            " web technologies, and Mgr. Jan Jurica, the author of the project ",
        acknowledgementsText2: ", who also provided many tips and is very open to cooperation.",
        contact: "Contact",
    },
    login: {
        title: "Login",
        username: "Username",
        password: "Password",
        rememberMe: "Remember me",
        login: "Login",
    },
    dashboard: {
        sideMenu: {
            punches: "Punches",
            networkCommands: "Network commands",
            devices: "Device overview",
            oresults: "OResults integration",
            logout: "Logout",
        },
        bottomMenu: {
            overview: "Overview",
            punches: "Punches",
            networkCommands: "Commands",
            devices: "Devices",
            oresults: "OResults",
            logout: "Logout",
        },
        overview: {
            title: "Welcome to the dashboard",
            onodesTitle: "Available O-Node units",
            deviceSettingsButton: "Device management",
            devicesAsNodes: "units in node mode",
            devicesAsGateways: "units in gateway mode",
            oresultsTitle: "OResults integration",
            oresultsSettingsButton: "Integration management",
            oresultsDevicesMapped: "{{count}} devices mapped to OResults",
            networkCommandsTitle: "Network commands",
            networkCommandsSettingsButton: "Command management",
            commandsActive: "{{count}} active network commands",
            punchesTitle: "Recorded punches",
            punchesSettingsButton: "Punch detail",
            lastPunch: "Last punch: {{diffInMinutes}} minutes ago",
            moreThan60: "more than 60",
            punchesInLastHour: "punches in the last hour",
        },
        devices: {
            title: "Device overview",
            devicesAvailable: "available devices",
        },
        oresults: {
            title: "Propojení OResults",
        },
        punches: {
            title: "Zaznamenané ražení",
        },
        networkCommands: {
            title: "Síťové příkazy",
        },
    },
} satisfies TranslationKeys;
