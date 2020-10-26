import { useState, useEffect } from 'react';

// Yahoo Finance RESTful API
// Use to fetch company data for data & info components

const useFetchBasicInfo = (ticker) => {
    const [data, setData] = useState([]);
    const [statusInfo, setStatusInfo] = useState(false);
    const [redirectInfo, setRedirectInfo] = useState(false);

    useEffect(() => {
        setStatusInfo(true);
        setData([]);

        const url = `https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-profile?region=US&symbol=${ticker}`;
        const headers = {
            headers: {
                "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
            "x-rapidapi-key": "c2e6cd2352mshc152fd4126f9197p1e9892jsne99352339c02",
            "useQueryString": true
            }
        };

        const formatJSON = (json) => {
            const summary = json.summaryDetail;
            const assetProfile = json.assetProfile;
            const price = json.price;

            const resultData = {
                "open": summary.open.fmt,
                "high": summary.dayHigh.fmt,
                "mktCap": summary.marketCap.fmt,
                "prevClose": summary.previousClose.fmt,
                "fiftyTwoWeekHigh": summary.fiftyTwoWeekHigh.fmt,
                "fiftyTwoWeekLow": summary.fiftyTwoWeekLow.fmt,
                "volume": summary.volume.fmt
            };


            
            const resultInfo = {
                "hq": `${assetProfile.city}, ${assetProfile.state}`,
                "ceo": assetProfile.companyOfficers[0].name,
                "industry": assetProfile.industry,
                "website": assetProfile.website,
                "description": assetProfile.longBusinessSummary,
                "fte": assetProfile.fullTimeEmployees
            }

            const resultTitle = {
                name: price.shortName,
                ticker: json.symbol,
                delta: price.regularMarketChangePercent.fmt
            }

            return { data: resultData, info: resultInfo, title: resultTitle };
        }

        fetch(url, headers).then((response) => {
            if (response.ok) {
                return response.json();
            } else {
              throw new Error("Couldn't find Company!");
            }
          })
          .then(json => {
            const resultObj = formatJSON(json);
            setData(resultObj);
            setStatusInfo(false);
          })
          .catch((error) => {
            setStatusInfo(false);
            setRedirectInfo(true);
            console.log(error);
          });

    }, [ticker]);

    return { data, statusInfo, redirectInfo };
}

export { useFetchBasicInfo };