import { useState, useEffect } from 'react';

// Yahoo Finance RESTful API
// Use to fetch company data for data & info components

const useFetchBasicInfo = (ticker) => {
    const [data, setData] = useState([]);
    const [statusInfo, setStatusInfo] = useState(false);

    useEffect(() => {

        const fetchData = async () => {
            const url = `https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-profile?region=US&symbol=${ticker}`;

            const resp = await fetch(url, {
                headers: {
                    "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
	                "x-rapidapi-key": "c2e6cd2352mshc152fd4126f9197p1e9892jsne99352339c02",
	                "useQueryString": true
                }
            });

            const json = await resp.json();

            const summary = json.summaryDetail;
            const resultData = {
                "open": summary.open.fmt,
                "high": summary.dayHigh.fmt,
                "mktCap": summary.marketCap.fmt,
                "prevClose": summary.previousClose.fmt,
                "52Wkhigh": summary.fiftyTwoWeekHigh.fmt,
                "52WkLow": summary.fiftyTwoWeekLow.fmt,
                "volume": summary.volume.fmt
            };


            const assetProfile = json.assetProfile;
            const resultInfo = {
                "hq": `${assetProfile.city}, ${assetProfile.state}`,
                "ceo": assetProfile.companyOfficers[0].name,
                "industry": assetProfile.industry,
                "website": assetProfile.website,
                "description": assetProfile.longBusinessSummary,
                "fte": assetProfile.fullTimeEmployees
            }

            const resultObj = { data: resultData, info: resultInfo };

            setData(resultObj);
            setStatusInfo(false);
        };

        fetchData();
    }, []);

    return { data, statusInfo };
}

export { useFetchBasicInfo };