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
    changeLanguageButton: {
        tooltip: string;
    };
    login: {
        title: string;
        username: string;
        password: string;
        rememberMe: string;
        login: string;
        unknownErrorOccurred: string;
        register: string;
        backToLandingPage: string;
    };
    register: {
        title: string;
        username: string;
        password: string;
        repeatPassword: string;
        register: string;
        registrationSuccessful: string;
        unknownErrorOccurred: string;
        passwordsDoNotMatch: string;
        backToLandingPage: string;
        text: {
            title: string;
            body: string;
        };
    };
    dashboard: {
        sideMenu: {
            punches: string;
            networkCommands: string;
            devices: string;
            oresults: string;
            logout: string;
            language: string;
            changeLanguage: string;
            competitions: string;
            thisCompetition: string;
            createNewCompetition: string;
        };
        bottomMenu: {
            overview: string;
            punches: string;
            networkCommands: string;
            devices: string;
            oresults: string;
            logout: string;
            competitions: string;
        };
        competitionSelect: {
            title: string;
            startBySelectingCompetition: string;
            createNewCompetition: string;
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
        createCompetition: {
            baseInformation: string;
            additionalInformation: string;
            someInformationMissing: string;
            optional: string;
            createdSuccessfully: string;
            createAnother: string;
            backButtonText: string;
            createCompetition: string;
            next: string;
            generalInformation: string;
            competitionName: string;
            competitionNameHelper: string;
            competitionDate: string;
            competitionType: string;
            selectCompetitionType: string;
            individualCompetition: string;
            relayCompetition: string;
            additionalInformationTitle: string;
            competitionDescription: string;
            competitionLocation: string;
            competitionOrganizer: string;
            expectedEndDate: string;
            backToSelection: string;
        };
        competition: {
            title: string;
            settings: string;
            competitionName: string;
            competitionDescription: string;
            competitionLocation: string;
            competitionOrganizer: string;
            competitionDate: string;
            competitionEndDate: string;
            competitionType: string;
            dangerZone: string;
            deleteCompetition: string;
            deleteCompetitionWarning: string;
            delete: string;
            removedSuccessfully: string;
            saveChanges: string;
            competitionInformation: string;
            competitionID: string;
            competitionIdInfo: string;
            individualCompetition: string;
            relayCompetition: string;
            saveSuccess: string;
            saveError: string;
        };
        deleteCompetitionDialog: {
            title: string;
            text: string;
            cancel: string;
            delete: string;
        };
        competitions: {
            title: string;
            individualCompetition: string;
            relayCompetition: string;
            viewCompetition: string;
            noUpcomingCompetitions: string;
            noArchivedCompetitions: string;
            upcomingCompetitions: string;
            archivedCompetitions: string;
        };
    };
}
