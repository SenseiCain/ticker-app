const trendingData = {
    0: {ticker: "IBM", name: "International Business Machines", price: "118.33", delta: "-7.2"},
    1: {ticker: "ACOR", name: "Acorda Therapeutics, Inc.", price: "1.06", delta: "0.4"},
    2: {ticker: "UBER", name: "Uber Technologies, Inc.", price: "36.67", delta: "2.5"}
};

const newsData = {
    0: {title: "Analysis: What monopoly case? DOJ lawsuit unlikely to knock Google from pole position", url: "https://finance.yahoo.com/news/analysis-monopoly-case-doj-lawsuit-161611919.html?.tsrc=rss", publicationDate: "2020-10-20T16:16:11.000Z"},
    1: {title: "Dow Jones Up 200 Points On Stimulus Deal Hopes; This Hot IPO Stock Breaks Out", url: "https://finance.yahoo.com/m/1089ad3a-8771-3dd9-a13…9fd487f/dow-jones-up-200-points-on.html?.tsrc=rss", publicationDate: "2020-10-20T16:14:40.000Z"},
    2: {title: "Dow Jones Up 200 Points On Stimulus Deal Hopes; This Hot IPO Stock Breaks Out", url: "https://finance.yahoo.com/m/1089ad3a-8771-3dd9-a13…9fd487f/dow-jones-up-200-points-on.html?.tsrc=rss", publicationDate: "2020-10-20T16:14:40.000Z"}
}

const companyData = {
    "GOOGL": {
        data: {
            fiftyTwoWeekHigh: "158.75",
            fiftyTwoWeekLow: "90.56",
            high: "120.15",
            mktCap: "105.46B",
            open: "119.80",
            prevClose: "125.52",
            volume: "14.72M"},
        info: {
            ceo: "Ms. Virginia M. Rometty",
            description: "International Business Machines Corporation operates as an integrated solutions and services company worldwide. Its Cloud & Cognitive Software segment offers software for vertical and domain-specific solutions in health, financial services, and Internet of Things (IoT), weather, and security software and services application areas; and customer information control system and storage, and analytics and integration software solutions to support client mission critical on-premise workloads in banking, airline, and retail industries. It also offers middleware and data platform software, including Red Hat, which enables the operation of clients' hybrid multi-cloud environments; and Cloud Paks, WebSphere distributed, and analytics platform software, such as DB2 distributed, information integration, and enterprise content management, as well as IoT, Blockchain and AI/Watson platforms. The company's Global Business Services segment offers business consulting services; system integration, application management, maintenance, and support services for packaged software; finance, procurement, talent and engagement, industry-specific business process outsourcing services; IT infrastructure and platform services. Its Global Technology Services segment provides project, managed, outsourcing, and cloud-delivered services for enterprise IT infrastructure environments; and IT infrastructure support services. It's Systems segment offers servers for businesses, cloud service providers, and scientific computing organizations; data storage products and solutions; and z/OS, an enterprise operating system, as well as Linux. Its Global Financing segment provides lease, installment payment, loan financing, short-term working capital financing, and remanufacturing and remarketing services. It was formerly known as Computing-Tabulating-Recording Co. and changed its name to International Business Machines Corporation in 1924. It was founded in 1911 and is headquartered in Armonk, New York.",
            fte: 352600,
            hq: "Armonk, NY",
            industry: "Information Technology Services",
            website: "http://www.ibm.com"},
        title: {
            delta: "-5.66%",
            name: "International Business Machines",
            ticker: "IBM"}
    },
    "IBM": {
        data: {fiftyTwoWeekHigh: "158.75",
            fiftyTwoWeekLow: "90.56",
            high: "120.15",
            mktCap: "105.46B",
            open: "119.80",
            prevClose: "125.52",
            volume: "14.72M"},
        info: {
            ceo: "Ms. Virginia M. Rometty",
            description: "International Business Machines Corporation operates as an integrated solutions and services company worldwide. Its Cloud & Cognitive Software segment offers software for vertical and domain-specific solutions in health, financial services, and Internet of Things (IoT), weather, and security software and services application areas; and customer information control system and storage, and analytics and integration software solutions to support client mission critical on-premise workloads in banking, airline, and retail industries. It also offers middleware and data platform software, including Red Hat, which enables the operation of clients' hybrid multi-cloud environments; and Cloud Paks, WebSphere distributed, and analytics platform software, such as DB2 distributed, information integration, and enterprise content management, as well as IoT, Blockchain and AI/Watson platforms. The company's Global Business Services segment offers business consulting services; system integration, application management, maintenance, and support services for packaged software; finance, procurement, talent and engagement, industry-specific business process outsourcing services; IT infrastructure and platform services. Its Global Technology Services segment provides project, managed, outsourcing, and cloud-delivered services for enterprise IT infrastructure environments; and IT infrastructure support services. It's Systems segment offers servers for businesses, cloud service providers, and scientific computing organizations; data storage products and solutions; and z/OS, an enterprise operating system, as well as Linux. Its Global Financing segment provides lease, installment payment, loan financing, short-term working capital financing, and remanufacturing and remarketing services. It was formerly known as Computing-Tabulating-Recording Co. and changed its name to International Business Machines Corporation in 1924. It was founded in 1911 and is headquartered in Armonk, New York.",
            fte: 352600,
            hq: "Armonk, NY",
            industry: "Information Technology Services",
            website: "http://www.ibm.com"},
        title: {
            delta: "-5.66%",
            name: "International Business Machines",
            ticker: "IBM"
        }
    },
    "ACOR": {},
    "UBER": {}
}

export { trendingData, newsData, companyData };