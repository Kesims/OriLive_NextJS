export interface TranslationKeys {
    landingPage: {
        about: string;
        changeLanguage: string;
        whatIsOrilive: string;
        whatIsOriliveText: string;
        onodeBoard: string;
        onodeBoardText: string;
        onodeBoardFeatures: {
            compact: string;
            batteryLife: string;
            operatingMode: string;
            easySetup: string;
            technical: string;
        };
        oprpProtocol: string;
        oprpProtocolText: string;
        simplicity: string;
        simplicityText: string;
        mobileApp: string;
        mobileAppText: string;
        webDashboard: string;
        webDashboardText: string;
        acknowledgements: string;
        acknowledgementsText1: string;
        acknowledgementsText2: string;
        contact: string;
    };
    login: {
        title: string;
        username: string;
        password: string;
        rememberMe: string;
        login: string;
    };
    dashboard: {
        sideMenu: {
            punches: string;
            networkCommands: string;
            devices: string;
            oresults: string;
            logout: string;
        };
        bottomMenu: {
            overview: string;
            punches: string;
            networkCommands: string;
            devices: string;
            oresults: string;
            logout: string;
        };
        overview: {
            title: string;
            onodesTitle: string;
            deviceSettingsButton: string;
            devicesAsNodes: string;
            devicesAsGateways: string;
            oresultsTitle: string;
            oresultsSettingsButton: string;
            oresultsDevicesMapped: string;
            networkCommandsTitle: string;
            networkCommandsSettingsButton: string;
            commandsActive: string;
            punchesTitle: string;
            punchesSettingsButton: string;
            lastPunch: string;
            moreThan60: string;
            punchesInLastHour: string;
        };
        devices: {
            title: string;
            devicesAvailable: string;
            deviceId: string;
            deviceType: string;
            batteryLevel: string;
            lastSeen: string;
            online: string;
            deviceRemovedSuccessfully: string;
            failedToRemoveDevice: string;
        };
        networkCommands: {
            title: string;
            activeCommands: string;
            competitionId: string;
            commandType: string;
            commandData: string;
            creationTime: string;
            addCommand: string;
            commandTypeLong: string;
            createCommandButton: string;
            commandAdded: string;
            unknownErrorOccurred: string;
        };
        oresults: {
            title: string;
            unitsMapped: string;
            mapNewDevice: string;
            localID: string;
            oresultsApiKey: string;
            mapDeviceButton: string;
            deviceMappedSuccessfully: string;
            unknownErrorOccurred: string;
        };
        punches: {
            title: string;
            punchesInLastHour: string;
            minutesSinceLastPunch: string;
            stationNumber: string;
            siNumber: string;
            punchTime: string;
            receiveTime: string;
        };
    };
}
