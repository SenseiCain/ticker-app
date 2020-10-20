const trendingData = [
    {ticker: "IBM", name: "International Business Machines", price: "118.33", delta: "-7.2"},
    {ticker: "ACOR", name: "Acorda Therapeutics, Inc.", price: "1.06", delta: "0.4"},
    {ticker: "UBER", name: "Uber Technologies, Inc.", price: "36.67", delta: "2.5"}
];

const newsData = [
    {title: "Analysis: What monopoly case? DOJ lawsuit unlikely to knock Google from pole position", url: "https://finance.yahoo.com/news/analysis-monopoly-case-doj-lawsuit-161611919.html?.tsrc=rss", publicationDate: "2020-10-20T16:16:11.000Z"},
    {title: "Dow Jones Up 200 Points On Stimulus Deal Hopes; This Hot IPO Stock Breaks Out", url: "https://finance.yahoo.com/m/1089ad3a-8771-3dd9-a13…9fd487f/dow-jones-up-200-points-on.html?.tsrc=rss", publicationDate: "2020-10-20T16:14:40.000Z"},
    {title: "Dow Jones Up 200 Points On Stimulus Deal Hopes; This Hot IPO Stock Breaks Out", url: "https://finance.yahoo.com/m/1089ad3a-8771-3dd9-a13…9fd487f/dow-jones-up-200-points-on.html?.tsrc=rss", publicationDate: "2020-10-20T16:14:40.000Z"}
]

const companyData = {
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
        },
        chart: {
            day: [
                {time: 1603180800, price: 122.2},
                {time: 1603184400, price: 122},
                {time: 1603188000, price: 122},
                {time: 1603191600, price: 122.01},
                {time: 1603195200, price: 120.97},
                {time: 1603198800, price: 120.79},
                {time: 1603200600, price: 117.572998046875},
                {time: 1603204200, price: 117.49500274658203},
                {time: 1603207800, price: 118.19999694824219},
                {time: 1603211400, price: 118.44989776611328},
                {time: 1603214158, price: 118.62000274658203}],
            month: [
                {time: 1600695000, price: 120.25},
                {time: 1600781400, price: 120.51000213623047},
                {time: 1600867800, price: 118.83000183105469},
                {time: 1600954200, price: 118.08999633789062},
                {time: 1601040600, price: 118.94999694824219},
                {time: 1601299800, price: 121.7300033569336},
                {time: 1601386200, price: 120.94000244140625},
                {time: 1601472600, price: 121.66999816894531},
                {time: 1601559000, price: 121.08999633789062},
                {time: 1601645400, price: 120.56999969482422},
                {time: 1601904600, price: 122.01000213623047},
                {time: 1601991000, price: 121.97000122070312},
                {time: 1602077400, price: 124.06999969482422},
                {time: 1602163800, price: 131.49000549316406},
                {time: 1602250200, price: 127.79000091552734},
                {time: 1602509400, price: 127.20999908447266},
                {time: 1602595800, price: 125.0999984741211},
                {time: 1602682200, price: 125.94000244140625},
                {time: 1602768600, price: 124.88999938964844},
                {time: 1602855000, price: 125.93000030517578},
                {time: 1603114200, price: 125.5199966430664},
                {time: 1603214371, price: 118.61530303955078}]
        }
    }
}

export { trendingData, newsData, companyData };