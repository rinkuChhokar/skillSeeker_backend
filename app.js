const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Parse application/json
app.use(bodyParser.json());

function encodeQuery(query) {
  // Check if the query contains more than one word
  if (/\s/.test(query)) {
    // Convert the query to URL-encoded format
    return encodeURIComponent(query);
  }
  return query;
}


app.get("/", (req, res)=>{
  return res.send("Server is running!!");
})

app.post("/search-course", (req, res) => {
  try {
    const query = encodeQuery(req.body.query);
    // console.log("QUERY-", `https://www.udemy.com/api-2.0/search-courses/?src=ukw&q=${query}`)
    fetch(`https://www.udemy.com/api-2.0/search-courses/?src=ukw&q=${query}`, {
      headers: {
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.9",
        "cache-control": "no-cache",
        pragma: "no-cache",
        priority: "u=1, i",
        "sec-ch-ua":
          '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-requested-with": "XMLHttpRequest",
        "x-udemy-cache-brand": "FRen_US",
        "x-udemy-cache-campaign-code": "",
        "x-udemy-cache-device": "None",
        "x-udemy-cache-language": "en",
        "x-udemy-cache-logged-in": "0",
        "x-udemy-cache-marketplace-country": "FR",
        "x-udemy-cache-price-country": "FR",
        "x-udemy-cache-release": "c1bd6cdc4b40c5b188df",
        "x-udemy-cache-user": "",
        "x-udemy-cache-version": "1",
        cookie:
          '__udmy_2_v57r=224cd4dc2e9a4a348d3d37e50e4a5d8c; csrftoken=GewKP6uzu9BB2qXZITHtlklRBa1jd6Zefb4mFhqEY5jOKAebL7xPbmLa82Z5iozG; ud_cache_campaign_code=""; ud_cache_marketplace_country=FR; ud_cache_price_country=FR; ud_cache_release=c1bd6cdc4b40c5b188df; ud_cache_user=""; ud_cache_version=1; ud_cache_device=None; ud_cache_logged_in=0; __cf_bm=S27.GVt9hJQP2sj3BEUUsO722X4o30VY9opLh4DTfek-1717657234-1.0.1.1-L0YThbU6XU9uiYE_l.Q97p.jnVFeyD_cR34fwjAmk4hBw3rpwKLJHW6o4B6AIkBu4ppOnbhsNxca9NNmk8AtRA; __cfruid=1e48e25b9d0416114b6e09427bf74219b66aebb1-1717657234; OptanonAlertBoxClosed=2024-06-06T07:00:44.194Z; cf_clearance=FJKqyCWHd0HLjWB_lmHGAAJSgIaB38PrtVuyyh0WhUg-1717657242-1.0.1.1-eKL.AErlp4jhepWOoZ8OvS02rH0MdCNofSzpFCZECUc3tIZoiB82vvo_u.FfKIIFDPSonvzPv8VT5YwNYbC1rA; __ssid=ac115853030fcb11856ba26610be6f4; _ga=GA1.1.601335357.1717657246; ud_firstvisit=2024-06-06T07:00:45.640369+00:00:1sF777:tx64w5kZYnbIgKrqJA49QEfIpn8; __stripe_mid=6ab1655c-ba6b-4193-8637-5a4d0368be445f980b; __stripe_sid=29b92e5b-d48c-4392-b24d-26dddf2b896ab335d8; query_session_identifier_id=VqDjJTNhQ9aOqduo1qht5g; last_searched_phrase=23eeeb4347bdd26bfc6b7ee9a3b755dd; ud_cache_brand=FRen_US; ud_cache_language=en; OptanonConsent=isGpcEnabled=0&datestamp=Thu+Jun+06+2024+12%3A31%3A03+GMT%2B0530+(India+Standard+Time)&version=202402.1.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=6395f72b-86e0-4127-b955-70203e409dc9&interactionCount=1&isAnonUser=1&landingPath=NotLandingPage&groups=C0003%3A1%2CC0005%3A1%2CC0004%3A1%2CC0001%3A1%2CC0002%3A1&geolocation=FR%3BIDF&AwaitingReconsent=false; _ga_7YMFEFLR6Q=GS1.1.1717657246.1.1.1717657268.0.0.1034381541; FPAU=1.2.1840689173.1717657269; eventing_session_id=MWQ1ZjA2NjEtYzA2OS00YW-1717659588209; evi="3@YlZWAZgwfsLD-HoV2paGxAoQldOxdw7vCSG2--w033FnHczCUpgqvwKCQR7mQQV9-NJthXRkm__g_rTIk8Jp7kREQgrjNcDcMsU="; ud_rule_vars="eJx9jtEKwjAMRX9l9FUdWZtttt8yKLHNtKgU284X8d8tqCAoQl4S7jk3N1Eo7bmwt9eQQ4nJSInOo3eSNSEp3Hrl1cg9MFLvt864GI-BhWnEbRJzSLk8Weup8FTvk5AgcQNDnQZGA2CUanvUCGpVF4BJrGvqRBUtcXEHWxLNc3A2xyU5tldKgXanly1z_AASXxbOf9q06XWLegQlv9pc9Wd-_VvC-behMzC0iLqT3dtwF_cHuRxY4w==:1sF7G3:KzOvXve0lK5vNu8JgzhtE7bVtlA"; _dd_s=rum=0&expire=1717658701024',
        Referer: `https://www.udemy.com/courses/search/?src=ukw&q=${query}`,
        "Referrer-Policy": "strict-origin-when-cross-origin",
      },
      body: null,
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        let all_courses = data;

        let all_course_ids = [];
        data.courses.map((course) => {
          all_course_ids.push(course.id);
        });

        // console.log("all_course_ids",all_course_ids)

        // return false;

        fetch(
          `https://www.udemy.com/api-2.0/pricing/?course_ids=${all_course_ids}&fields[pricing_result]=price,discount_price,list_price,price_detail,price_serve_tracking_id`,
          {
            headers: {
              accept: "application/json, text/plain, */*",
              "accept-language": "en-US,en;q=0.9",
              "cache-control": "no-cache",
              pragma: "no-cache",
              priority: "u=1, i",
              "sec-ch-ua":
                '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
              "sec-ch-ua-mobile": "?0",
              "sec-ch-ua-platform": '"Windows"',
              "sec-fetch-dest": "empty",
              "sec-fetch-mode": "cors",
              "sec-fetch-site": "same-origin",
              "x-requested-with": "XMLHttpRequest",
              "x-udemy-cache-brand": "NLen_US",
              "x-udemy-cache-campaign-code": "ST21MT60724",
              "x-udemy-cache-device": "None",
              "x-udemy-cache-language": "en",
              "x-udemy-cache-logged-in": "0",
              "x-udemy-cache-marketplace-country": "NL",
              "x-udemy-cache-price-country": "NL",
              "x-udemy-cache-release": "922447f4722d4e81511b",
              "x-udemy-cache-user": "",
              "x-udemy-cache-version": "1",
              cookie:
                '__udmy_2_v57r=5a8e3063e7fc4ebb8a2eec1d0c2f863f; csrftoken=Al03FA187vNeWzXZGRU83BxSoUJtBd703AKcIjrvxjdlM6Hp2wGFwscrucAwBFpt; ud_cache_brand=NLen_US; ud_cache_campaign_code=ST21MT60724; ud_cache_marketplace_country=NL; ud_cache_price_country=NL; ud_cache_release=922447f4722d4e81511b; ud_cache_user=""; ud_cache_version=1; ud_cache_language=en; ud_cache_device=None; ud_cache_logged_in=0; __cf_bm=NlsReLY3JAq4i_79L1dne4Y8klSNWLGxAUIA55ilqG8-1717751776-1.0.1.1-T2rQsyKInPTt5Fq9WJcMhOY9rPCuKSRa2p9HEWaCUEl29XQZeyk_nCNvvr2DDw.ERpzVJfGjtGdi4CSZZX4Tyw; __cfruid=849a38fb57db3d446b89725c82e5ed877ecdba4e-1717751776; cf_clearance=L3d1RlUhOmitZuz1xOgo4Ujo_zKV1XHXf7ln4YX2CM8-1717751786-1.0.1.1-uYb44h5I0iFYC5sgPMJ6iMtySJ8ANtV6hFwvL8EI1vbVF7Ew6xTyNc8a6gPkoA3O25jvb45cSz7vQ9mssABCXg; __stripe_mid=adda930b-efd3-4a0e-9788-95d6bc83825dab8b43; __stripe_sid=dc41e940-0f11-4532-8c43-a354bab23eaf17e9a4; __ssid=e7afd6c2d56a8be00c4d5bf9570493b; OptanonAlertBoxClosed=2024-06-07T09:16:59.157Z; _ga=GA1.1.693069941.1717751799; query_session_identifier_id=7Sb52XyDQwOcOVMo0X5LJQ; last_searched_phrase=23eeeb4347bdd26bfc6b7ee9a3b755dd; ud_firstvisit=2024-06-07T09:17:23.948937+00:00:1sFViu:Vn9f-3u2pHnKCKle1-BId9Z_idg; _ga_7YMFEFLR6Q=GS1.1.1717751799.1.1.1717751844.0.0.0; OptanonConsent=isGpcEnabled=0&datestamp=Fri+Jun+07+2024+14%3A47%3A31+GMT%2B0530+(India+Standard+Time)&version=202402.1.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=699b166e-1173-400c-9038-8c80851ebeca&interactionCount=2&isAnonUser=1&landingPath=NotLandingPage&groups=C0003%3A1%2CC0005%3A1%2CC0004%3A1%2CC0001%3A1%2CC0002%3A1&AwaitingReconsent=false&geolocation=NL%3BNH; eventing_session_id=NGJkMGQyYTItODA3OS00Yz-1717753661415; _dd_s=rum=0&expire=1717752750688; evi="3@K9dLPSeqICColMDXsUUGYtEs-NM6h8TAVi63_F2unoGgwPnXsDe4CmMnH5F9NTdxoGzMeqVVAojUFSDKyV503prqMAVfZ2V-1Yg="; ud_rule_vars="eJx9jtsKwjAQRH-l5NUL201NYr6lENJ0o8FKMEl9Kf13AyoIoq_DnDOzsGLTiQqN5h5yKDHpg1XEQXCS3nU0DMoikWtHcOiV4F67GC-BmG7Y0jMfUi5P1oy2UF_zniFgtwOxA9nAUbdCt4e9FEKi2gBogJ5ta2uyFS1xdmdTkvU-OJPjnByZu03BDtPLlil-AIluM-U_a1Lz4x4VShBfa676M73-lnD99bcaFJcd4tuwsvUBMgpZcA==:1sFVj9:QVHd9YySJklXa9pfi2Ur5Wczaq0"',
              Referer: "https://www.udemy.com/courses/search/?src=ukw&q=python",
              "Referrer-Policy": "strict-origin-when-cross-origin",
            },
            body: null,
            method: "GET",
          }
        )
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            // console.log("1st course price",data);
            all_courses.courses.map((course) => {
              course["price"] = data.courses[course.id];
            });
            // console.log("1st final course",all_courses.courses[0]);
            return res.status(200).json({
              status: "success",
              data: all_courses,
            });
            // console.log(data)
          })
          .catch((error) => {
            console.log(error);
            res.status(400).json({
              status: "error",
              message: "Internal Server Error",
            });
          });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({
          status: "error",
          message: "Internal Server Error",
        });
      });
  } catch (error) {
    res.status(500).json({
      status: "error",
    });
  }
});

app.listen(5000, () => {
  console.log("Server is running at port 5000");
});
